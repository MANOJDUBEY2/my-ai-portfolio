import React, { useState, useEffect } from "react";
import { 
  Github, 
  Play, 
  Upload, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle,
  Database,
  Search,
  Sparkles,
  AlertCircle
} from "lucide-react";

interface ProjectItem {
  title: string;
  category: string;
  icon: string;
  problem: string;
  value: string;
  tech: string[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "AI-Powered Anomaly Detection System",
    category: "Security AI",
    icon: "🛡️",
    problem: "Identifying fraudulent transfers and safety hazards inside massive financial data streams.",
    value: "Flags transaction anomalies with 94% precision, processing within 340ms of packet arrival.",
    tech: ["Isolation Forest", "TensorFlow", "Python", "NumPy"]
  },
  {
    title: "Intelligent Business Intent Classifier",
    category: "NLP Operations",
    icon: "💬",
    problem: "Manual email routing in massive customer success pipelines leads to 4+ hours of backlog daily.",
    value: "Processes corporate context to route queries immediately, saving operations teams 3 hours/day.",
    tech: ["BERT", "HuggingFace", "NLP", "PyTorch"]
  },
  {
    title: "Sales Forecasting ML Engine",
    category: "Predictive Analytics",
    icon: "📈",
    problem: "Retailers experience inventory loss or stockouts due to intuition-based demand mapping models.",
    value: "Assures 91% seasonal forecast accuracy, enabling optimal supply ordering configurations.",
    tech: ["XGBoost", "Time-Series", "Pandas", "Scikit-Learn"]
  },
  {
    title: "Advanced Prompt Engineering Framework",
    category: "Generative AI",
    icon: "✍️",
    problem: "Unpredictable outputs from Large Language Models when integrated into automated workflows.",
    value: "Establishes structured system chains of thought, boosting downstream correctness by 40%.",
    tech: ["GPT-4", "Chain-of-Thought", "LangChain"]
  }
];

// Mock data rows for logistics stream simulator
interface LogisticsRow {
  timestamp: string;
  orderId: string;
  supplier: string;
  latencyMin: number;
  isAnomaly: boolean;
}

const MOCK_SUPPLIERS = ["DelhiLogistics", "NorthCargo", "ApexFreight", "SaffronDelivery", "BharatExpress"];

export default function Projects() {
  const [logisticsData, setLogisticsData] = useState<LogisticsRow[]>([
    { timestamp: "12:00:10", orderId: "ORD-9801", supplier: "DelhiLogistics", latencyMin: 42, isAnomaly: false },
    { timestamp: "12:00:12", orderId: "ORD-9802", supplier: "NorthCargo", latencyMin: 48, isAnomaly: false },
    { timestamp: "12:00:15", orderId: "ORD-9803", supplier: "ApexFreight", latencyMin: 180, isAnomaly: true },
    { timestamp: "12:00:18", orderId: "ORD-9804", supplier: "SaffronDelivery", latencyMin: 35, isAnomaly: false },
    { timestamp: "12:00:20", orderId: "ORD-9805", supplier: "BharatExpress", latencyMin: 55, isAnomaly: false }
  ]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [fileSelected, setFileSelected] = useState<string | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  // Auto-stream new rows if streaming is active
  useEffect(() => {
    if (!isStreaming) return;

    const timer = setInterval(() => {
      const now = new Date().toLocaleTimeString([], { hour12: false });
      const randomSupplier = MOCK_SUPPLIERS[Math.floor(Math.random() * MOCK_SUPPLIERS.length)];
      const latency = Math.floor(Math.random() * 210) + 15; // 15 to 225 minutes
      const isAnom = latency > 130; // Threshold of 130 minutes for delay anomaly

      const newRow: LogisticsRow = {
        timestamp: now,
        orderId: `ORD-${Math.floor(Math.random() * 8000) + 1000}`,
        supplier: randomSupplier,
        latencyMin: latency,
        isAnomaly: isAnom
      };

      setLogisticsData(prev => [newRow, ...prev.slice(0, 7)]);
    }, 2000);

    return () => clearInterval(timer);
  }, [isStreaming]);

  // Handle CSV mockup drop
  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileSelected(file.name);
      setUploadMessage("Parsing CSV headers... Detected column schema [timestamp, supplier, speed, latency_min]. Applying Isolation Forest isolation index...");

      setTimeout(() => {
        // Mock analysis results injection
        setLogisticsData([
          { timestamp: "12:11:00", orderId: "ORD-CSV1", supplier: "DelhiLogistics", latencyMin: 310, isAnomaly: true },
          { timestamp: "12:11:05", orderId: "ORD-CSV2", supplier: "NorthCargo", latencyMin: 38, isAnomaly: false },
          { timestamp: "12:11:10", orderId: "ORD-CSV3", supplier: "ApexFreight", latencyMin: 220, isAnomaly: true },
          ...logisticsData
        ]);
        setUploadMessage("Analysis complete! 2 delay anomalies isolated based on Scikit-Learn predictions (latency > 130m). Simulated logs updated.");
      }, 1800);
    }
  };

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-6">Featured Projects</div>

        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-4xl lg:text-5xl mb-4 leading-tight">
            Where Code Meets
            <br />
            <span className="gradient-text font-black">Real-World Impact</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light text-sm sm:text-base">
            Every pipeline scales down manual inefficiencies. Interact with the logistics stream simulation below to see real-time anomaly detection in action!
          </p>
        </div>

        {/* ── INTERACTIVE LIVE PROJECT: SUPPLY CHAIN ANALYTICS (Featured) ── */}
        <div className="project-card grid lg:grid-cols-5 dark-border overflow-hidden mb-12 shadow-2xl relative">
          
          {/* Left / Top Side: Problem Statement and Control Structure */}
          <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="live-badge select-none font-mono tracking-widest">
                  <span className="live-dot" /> LIVE SIMULATOR
                </div>
                <span className="text-[10px] text-saffron uppercase font-mono tracking-widest font-bold">
                  Featured Project ★
                </span>
              </div>

              <h3 className="font-poppins font-black text-2xl text-white mb-4">
                Real-Time Supply Chain Analyst AI
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                <p>
                  <strong className="text-saffron font-semibold font-mono uppercase tracking-wide text-[11px] block mb-1">
                    Problem Context:
                  </strong>
                  A regional logistics courier spent 15+ hours/week manually cleaning inventory spreadsheets and isolation logs to extract supply latencies.
                </p>
                <p>
                  <strong className="text-teal font-semibold font-mono uppercase tracking-wide text-[11px] block mb-1">
                    Value Added:
                  </strong>
                  This dynamic ML platform automates continuous ingestion and filters delays instantly using predictive classification rules. Reduced manual auditing overhead by 80% (from 15hrs to 18min).
                </p>
              </div>

              {/* Technologies list */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="skill-pill text-xs">Python</span>
                <span className="skill-pill skill-pill-teal text-xs">Pandas</span>
                <span className="skill-pill text-xs">Scikit-Learn</span>
                <span className="skill-pill skill-pill-teal text-xs">Real-Time Streams</span>
                <span className="skill-pill text-xs">SQL</span>
              </div>
            </div>

            {/* Interactive Upload Input Section */}
            <div className="space-y-4">
              <div 
                className="rounded-xl p-4 border border-teal/20 transition-all bg-teal/5 flex flex-col sm:flex-row gap-4 items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-teal flex-shrink-0 animate-bounce" />
                  <div>
                    <h5 className="text-xs font-bold text-teal font-poppins">CSV Sandbox Upload</h5>
                    <p className="text-[10px] text-gray-500 font-light">Simulate real custom data analysis</p>
                  </div>
                </div>

                <label className="px-5 py-2 text-[11px] font-bold text-obsidian-900 bg-teal rounded-lg cursor-pointer hover:bg-teal-light transition-all select-none">
                  Choose CSV File
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleCSVUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {fileSelected && (
                <div className="rounded-lg bg-black/40 p-3 border border-white/5 text-[11px] leading-relaxed font-mono text-gray-300">
                  <div className="flex justify-between items-center text-[10px] text-teal border-b border-white/5 pb-1 mb-1.5 font-bold">
                    <span>UPLOADED: {fileSelected}</span>
                    <button onClick={() => { setFileSelected(null); setUploadMessage(null); }} className="hover:text-red-400">RESET</button>
                  </div>
                  {uploadMessage}
                </div>
              )}
            </div>
          </div>

          {/* Right / Bottom Side: Stream Simulator Console */}
          <div className="lg:col-span-2 bg-obsidian-900/90 p-5 sm:p-6 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-mono text-saffron uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-saffron" /> LOGISTICS_STREAM
                </h4>
                <button
                  onClick={() => setIsStreaming(!isStreaming)}
                  className={`px-3 py-1 text-[10px] font-bold font-mono rounded-md hover:scale-105 transition-transform flex items-center gap-1 cursor-pointer select-none ${
                    isStreaming 
                      ? "bg-red-500/15 text-red-400 border border-red-500/30" 
                      : "bg-teal/15 text-teal border border-teal/40"
                  }`}
                >
                  <Play className={`w-2.5 h-2.5 ${isStreaming ? "fill-red-400" : "fill-teal"}`} />
                  {isStreaming ? "STOP" : "RUN STREAM"}
                </button>
              </div>

              {/* Console data stream panel */}
              <div className="rounded-xl bg-black/40 border border-white/5 p-3.5 max-h-[240px] overflow-y-auto space-y-2.5 font-mono text-[10px]">
                {logisticsData.map((row, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-2 rounded border border-white/5 ${
                      row.isAnomaly 
                        ? "bg-red-500/5 border-red-500/20 text-red-300" 
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">[{row.timestamp}]</span>
                        <span className="font-bold text-gray-200">{row.supplier}</span>
                      </div>
                      <div className="text-[9px] text-gray-500">
                        Order: {row.orderId} // Latency: {row.latencyMin}m
                      </div>
                    </div>
                    <div>
                      {row.isAnomaly ? (
                        <span className="px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20">
                          ANOMALY
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-teal/10 text-teal font-bold border border-teal/20 text-[9px]">
                          OK
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated bar-chart analysis summary */}
            <div className="mt-5 pt-3.5 border-t border-white/5">
              <p className="text-[10px] text-gray-500 font-mono flex items-center justify-between mb-2">
                <span>DELAY OUTLIER LEVEL:</span>
                <span className="text-teal font-bold">THRESHOLD 130m</span>
              </p>
              {/* Dynamic graph bars representation */}
              <div className="flex items-end h-16 gap-1 px-1 justify-between">
                {logisticsData.map((row, idx) => {
                  const percent = Math.min((row.latencyMin / 250) * 100, 100);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center group relative">
                      {/* Tooltip on graph hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-obsidian-700 text-[8px] border border-white/10 px-1 py-0.5 rounded text-white font-mono z-20">
                        {row.latencyMin}m
                      </div>
                      <div
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          row.isAnomaly 
                            ? "bg-gradient-to-t from-red-600 to-red-400" 
                            : "bg-gradient-to-t from-saffron to-teal"
                        }`}
                        style={{ height: `${percent}%` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ── SECONDARY PROJECTS GRID ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_DATA.map((proj, idx) => (
            <div key={idx} className="project-card p-6 flex flex-col justify-between">
              <div>
                {/* Visual Category info */}
                <div className="flex items-center justify-between mb-4.5 border-b border-white/5 pb-3">
                  <span className="text-2xl select-none">{proj.icon}</span>
                  <span className="text-[10px] text-gray-500 font-mono tracking-wider font-semibold">
                    {proj.category}
                  </span>
                </div>

                <h4 className="font-poppins font-bold text-white text-[15px] mb-3 leading-snug">
                  {proj.title}
                </h4>

                <div className="space-y-3 mb-5">
                  <p className="text-xs text-gray-500 font-light">
                    <span className="text-saffron font-bold font-mono text-[9px] uppercase tracking-wider block mb-0.5">Problem</span>
                    {proj.problem}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    <span className="text-teal font-bold font-mono text-[9px] uppercase tracking-wider block mb-0.5">Impact</span>
                    {proj.value}
                  </p>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t, idx_t) => (
                    <span key={idx_t} className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/5 text-gray-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub details */}
                <a
                  href="https://github.com/MANOJDUBEY2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-teal hover:text-teal-light font-bold select-none group font-poppins"
                >
                  <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /> Code details
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
