import { GoogleGenAI } from "@google/genai";

const useVertex = process.env.GEMINI_BACKEND === "vertex";

export const ai = useVertex
  ? new GoogleGenAI({
      vertexai: true,
      project: process.env.GOOGLE_CLOUD_PROJECT,
      location: process.env.GOOGLE_CLOUD_LOCATION,
    })
  : new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-3.5-flash";
