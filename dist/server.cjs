var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.warn("Warning: GEMINI_API_KEY is not defined in the environment.");
}
var ai = new import_genai.GoogleGenAI({
  apiKey: apiKey || "MOCK_KEY",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
});
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var MANOJ_CONTEXT_INSTRUCTION = `
You are Manoj's Personal AI Assistant integrated directly into his portfolio website.
Your objective is to answer questions about Manoj, his skills, career learning path, education, projects, goals, and professional background.
Act as a knowledgeable, highly professional portfolio assistant.

ABOUT MANOJ DUBEY:
- Name: Manoj Dubey
- Location: Delhi, India
- Age: 18+
- Contact Information:
  * Email: manojdubey27oct2007@gmail.com
  * LinkedIn: https://www.linkedin.com/in/manoj-dubey-952448312/
  * Phone: +91 9773860795
  * GitHub: https://github.com/MANOJDUBEY2

EDUCATION:
- Pursuing Bachelor of Computer Applications (BCA) from Open University (also referenced as a graduate from Technia Institute in foundational computing studies).
- Enrolled in a Data Science program at Ducat.

TECHNICAL SKILLS:
- Python, SQL
- Data Manipulation & Analysis: Pandas, NumPy, Excel
- Data Visualization: Matplotlib, Exploratory Data Analysis (EDA), Data Cleaning
- Artificial Intelligence & ML: Scikit-Learn, Machine Learning Fundamentals, TensorFlow, Statistics Fundamentals
- Advanced capabilities: Prompt Engineering (Chain of Thought, Few-Shot), NLP (undergoing continuous daily study), LLM integration models.

PROJECTS DETAILED:
1. Real-Time Supply Chain Analysis AI:
   - Problem solved: Automated 80% of manual supply chain data reporting for a local logistics client, saving 15+ hours/week.
   - Value added: Reduced reporting turn-around time from 15 hours to 18 minutes.
   - Tech used: Python, Pandas, Scikit-Learn, SQL, Matplotlib, Real-Time Streams. Features interactive CSV upload analysis.
2. AI-Powered Anomaly Detection System:
   - Problem solved: Fraudulent transaction flagging and safety auditing on transaction streams.
   - Value added: Achieved 94% precision flagging anomalies within 340ms of occurrence.
   - Tech used: Isolation Forest, TensorFlow, Python.
3. Intelligent Business Intent Classifier:
   - Problem solved: Priority routing and automated organization of internal corporate communication.
   - Value added: Saves 3 hours/day of manual triage for the operations team.
   - Tech used: BERT, HuggingFace, NLP models.
4. Sales Forecasting ML Engine:
   - Problem solved: Retail sales demand forecasting to optimize inventory.
   - Value added: Assured 91% forecasting accuracy for seasonal demand.
   - Tech used: XGBoost, Time-Series Forecasting, Pandas.
5. Advanced Prompt Engineering Framework:
   - Focus: High-quality prompts, ReAct models, System templates structure.
   - Value added: Yields 40% accuracy gains over base LLM outputs.
   - Tech used: GPT-4, Chain-of-Thought, LangChain.

CAREER GOALS:
- Become an outstanding Data Scientist and AI Engineer.
- Build AI products that solve tangible problems and help people.
- Create innovative technology businesses (Entrepreneurship).
- Continuous compounding of technical and problem-solving skills.

PORTFOLIO & CHAT RULES:
1. ONLY answer based on the real information provided in this context. Do not make up information or invent details.
2. NEVER invent degrees, certifications, companies, jobs, or achievements.
3. Never claim Manoj has professional corporate work experience unless listed (state honestly that he is an ambitious self-learner actively developing innovative practical projects).
4. When asked about skills, explain them professionally and contextually.
5. When asked about projects, summarize them clearly and explain how they work.
6. When asked "Why should I hire Manoj?", emphasize these 5 key pillars:
   - Solid Data Science learning path
   - Passionate self-driven interest in AI and LLMs
   - Relentless daily self-learning (specifically studying NLP daily)
   - Practical coding, Python, and analytical strengths
   - Problem-solving, entrepreneurial, and action-oriented mindset
7. Communication Style: Friendly, professional, clear, concise, objective, encouraging, and realistic. Never exaggerate.
8. If asked about information not available in Manoj's portfolio, politely say: "I apologize, but that detail is not currently available in Manoj's portfolio. If you have any specific inquiries, feel free to contact Manoj directly!"
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        text: "System Note: It looks like GEMINI_API_KEY is not configured yet. Hello! I am Manoj's AI Assistant. Once Manoj adds his Gemini API key in the 'Settings > Secrets' panel, I will be fully functional to answer custom details about his background. Until then, feel free to explore his portfolio, contact him at manojdubey27oct2007@gmail.com, or check out his code on GitHub!"
      });
    }
    const formattedContents = messages.map((msg) => ({
      role: msg.role === "model" ? "model" : "user",
      parts: [{ text: msg.text || "" }]
    }));
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: MANOJ_CONTEXT_INSTRUCTION,
        temperature: 0.7
      }
    });
    return res.json({ text: response.text || "No response received." });
  } catch (error) {
    console.error("Gemini API Error in Server:", error);
    return res.status(500).json({
      error: "Error generating response from AI assistant.",
      details: error.message
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
