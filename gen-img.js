import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'A sleek, modern, abstract 3D representation of a digital tax assistant and financial calendar app. The scene features glowing blue and yellow accents on a clean dark background, with stylized floating UI elements like calendars, checkmarks, and notification bells. High tech, professional, financial technology vibe, 8k resolution, photorealistic.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        fs.writeFileSync('public/anaf-tracker.png', base64Data, 'base64');
        console.log('Image saved to public/anaf-tracker.png');
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }
}
run();
