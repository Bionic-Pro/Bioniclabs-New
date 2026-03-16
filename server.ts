import express from "express";
import { createServer as createViteServer } from "vite";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import DOMPurify from "isomorphic-dompurify";
import { createClient } from "@supabase/supabase-js";

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
    // Skip auth for public routes (e.g., health check)
    if (req.path === '/api/health') {
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
