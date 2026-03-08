import express from "express";
import { createServer as createViteServer } from "vite";
import Stripe from "stripe";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import DOMPurify from "isomorphic-dompurify";
import { createClient } from "@supabase/supabase-js";

// Initialize Stripe
const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-02-24.acacia",
    })
  : null;

// Initialize Supabase (if env vars are present)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Security Headers (Helmet)
  // Relaxed for preview environment to prevent blocking valid scripts/styles
  app.use(
    helmet({
      contentSecurityPolicy: false, // Disabled for preview stability
      crossOriginEmbedderPolicy: false,
    })
  );

  // 2. CORS
  app.use(
    cors({
      origin: true, // Allow all origins for preview/dev environment
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  // 3. Rate Limiting
  const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // Limit each IP to 100 requests per windowMs
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests, please try again later." },
  });
  app.use("/api", apiLimiter);

  // Parse JSON bodies
  app.use(express.json());

  // 4. Input Sanitization Middleware
  app.use((req, res, next) => {
    if (req.body) {
      const sanitize = (obj: any) => {
        for (const key in obj) {
          if (typeof obj[key] === "string") {
            obj[key] = DOMPurify.sanitize(obj[key]);
          } else if (typeof obj[key] === "object" && obj[key] !== null) {
            sanitize(obj[key]);
          }
        }
      };
      sanitize(req.body);
    }
    next();
  });

  // 5. Auth Middleware (Supabase)
  const requireAuth = async (req: any, res: any, next: any) => {
    // Skip auth for public routes (e.g., health check, checkout for now if needed)
    if (req.path === '/api/health' || req.path === '/api/create-checkout-session') {
      return next();
    }

    if (!supabase) {
      console.warn("Supabase not configured, skipping auth check.");
      return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Missing Authorization header" });
    }

    const token = authHeader.split(" ")[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    req.user = user;
    next();
  };

  // Apply Auth Middleware to API routes
  // Note: We apply it to specific routes or globally to /api/* excluding public ones
  app.use("/api", requireAuth);

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Stripe Checkout Session Endpoint
  app.post("/api/create-checkout-session", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured on the server." });
    }

    const { productId, priceId } = req.body;

    try {
      let sessionConfig: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/`,
        line_items: [],
      };

      // If a specific Price ID is provided, use it
      if (priceId) {
        sessionConfig.line_items = [
          {
            price: priceId,
            quantity: 1,
          },
        ];
      } else if (productId) {
        // Fallback: If only Product ID is provided, we need to determine the price
        // This is less ideal than using a Price ID, but we can try to find a price or create one ad-hoc
        // For this demo, we'll use hardcoded prices based on the product ID if needed, 
        // or ideally the client sends the price ID.
        
        // Map Product IDs to amounts (in cents)
        const prices: Record<string, number> = {
          'prod_U6ya8Y5jxh2l3P': 3999, // V4.2 Proven Turbo ($39.99)
          'prod_U6xawZia0AqzOR': 1999, // V4.1 Proven Enhanced ($19.99)
        };

        const amount = prices[productId];
        
        if (amount) {
           sessionConfig.line_items = [
            {
              price_data: {
                currency: 'usd',
                product: productId,
                unit_amount: amount,
              },
              quantity: 1,
            },
          ];
        } else {
            return res.status(400).json({ error: "Invalid product or price configuration." });
        }
      } else {
        return res.status(400).json({ error: "Missing productId or priceId." });
      }

      const session = await stripe.checkout.sessions.create(sessionConfig);

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Stripe error:", error);
      // 6. Error Handling: No stack traces leaked
      res.status(500).json({ error: "An error occurred while processing your request." });
    }
  });

  // Global Error Handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    app.use(express.static("dist"));
    
    // SPA fallback for production
    app.get("*", (req, res) => {
      res.sendFile("index.html", { root: "dist" });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
