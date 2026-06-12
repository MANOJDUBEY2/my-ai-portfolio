import { Database, Terminal, Settings2, Cpu, BarChart2 } from "lucide-react";
import { motion } from "motion/react";

interface TechItem {
  name: string;
  deviconClass: string;
  tooltip: string;
}

const DATA_SCIENCE_STACK: TechItem[] = [
  { name: "Python", deviconClass: "devicon-python-plain colored", tooltip: "General purpose AI and ML programming" },
  { name: "SQL", deviconClass: "devicon-mysql-plain colored", tooltip: "Relational database querying and modeling" },
  { name: "NumPy", deviconClass: "devicon-numpy-plain colored", tooltip: "High performance multi-dimensional arrays" },
  { name: "Pandas", deviconClass: "devicon-pandas-plain colored", tooltip: "Data structures, cleaning and analysis" },
  { name: "Matplotlib", deviconClass: "devicon-matplotlib-plain colored", tooltip: "Data plots and visual diagrams" },
  { name: "Jupyter", deviconClass: "devicon-jupyter-plain colored", tooltip: "Interactive exploratory notebooks" }
];

const AI_ML_STACK: TechItem[] = [
  { name: "TensorFlow", deviconClass: "devicon-tensorflow-original colored", tooltip: "Neural networks and deep learning models" },
  { name: "Scikit-Learn", deviconClass: "devicon-scikitlearn-plain colored", tooltip: "Classical ML pipelines and regression" },
  { name: "PyTorch", deviconClass: "devicon-pytorch-plain colored", tooltip: "Dynamic graph tensor operations" },
  { name: "OpenCV", deviconClass: "devicon-opencv-plain colored", tooltip: "Computer vision and image manipulation" },
  { name: "Neural Nets", deviconClass: "devicon-keras-plain colored", tooltip: "Layer-based deep models & Keras APIs" },
  { name: "HF Models", deviconClass: "devicon-match-default", tooltip: "Transformer embeddings & tokenizers" }
];

const ENVIRONMENT_STACK: TechItem[] = [
  { name: "Git", deviconClass: "devicon-git-plain colored", tooltip: "Version control management" },
  { name: "GitHub", deviconClass: "devicon-github-original", tooltip: "Social coding and CI/CD pipelines" },
  { name: "VS Code", deviconClass: "devicon-vscode-plain colored", tooltip: "Primary code editing environment" },
  { name: "Linux", deviconClass: "devicon-linux-plain", tooltip: "Terminal-level execution and scripting" },
  { name: "Docker", deviconClass: "devicon-docker-plain colored", tooltip: "Workspace containerization" },
  { name: "PostgreSQL", deviconClass: "devicon-postgresql-plain colored", tooltip: "Advanced SQL data structures" }
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-6">Tech Stack & Capabilities</div>

        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-4xl lg:text-5xl mb-4 leading-tight">
            The Tools I Wield to
            <br />
            <span className="gradient-text font-black">Build Intelligent Systems</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light text-sm sm:text-base">
            A curated collection of industry-grade data science, statistical analysis, and machine learning structures.
          </p>
        </div>

        {/* ── Category 1: Data Science ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="text-2xl select-none">📊</span>
            <h3 className="font-poppins font-bold text-xl text-white">Data Science</h3>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(90deg, rgba(255,149,0,0.3) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {DATA_SCIENCE_STACK.map((item, idx) => (
              <div
                key={idx}
                className="tech-card group select-none"
                data-tooltip={item.tooltip}
              >
                <i className={`${item.deviconClass} text-4xl block mb-3 transition-transform group-hover:scale-110 duration-300`} />
                <span className="text-xs text-gray-400 font-medium font-poppins">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category 2: AI / ML ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="text-2xl select-none">🤖</span>
            <h3 className="font-poppins font-bold text-xl text-white">Artificial Intelligence & ML</h3>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(90deg, rgba(0,245,212,0.3) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {AI_ML_STACK.map((item, idx) => (
              <div
                key={idx}
                className="tech-card group select-none"
                data-tooltip={item.tooltip}
              >
                {item.name === "HF Models" ? (
                  <span className="text-3xl block mb-3 animate-pulse select-none" style={{ marginTop: "2px" }}>🤗</span>
                ) : (
                  <i className={`${item.deviconClass} text-4xl block mb-3 transition-transform group-hover:scale-110 duration-300`} />
                )}
                <span className="text-xs text-gray-400 font-medium font-poppins">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category 3: Tools & Env ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="text-2xl select-none">🛠️</span>
            <h3 className="font-poppins font-bold text-xl text-white">Tools & Environment</h3>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(90deg, rgba(255,149,0,0.3) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {ENVIRONMENT_STACK.map((item, idx) => (
              <div
                key={idx}
                className="tech-card group select-none"
                data-tooltip={item.tooltip}
              >
                <i className={`${item.deviconClass} text-4xl block mb-3 transition-transform group-hover:scale-110 duration-300 ${
                  item.name === "GitHub" || item.name === "Linux" ? "text-white" : ""
                }`} />
                <span className="text-xs text-gray-400 font-medium font-poppins">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category 4: Advanced Capabilities (Differentiators) ── */}
        <div>
          <div className="flex items-center gap-3.5 mb-8">
            <span className="text-2xl select-none">⚡</span>
            <h3 className="font-poppins font-bold text-xl text-saffron">Advanced Capabilities</h3>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(90deg, rgba(255,149,0,0.3) 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Prompt Engineering Card */}
            <div className="glass glass-hover p-6 rounded-2xl border border-saffron/15 flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-3.5 select-none font-sans">✍️</div>
                <h4 className="font-poppins font-bold text-white text-[15px] mb-2">Prompt Engineering</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Advanced Chain of Thought, few-shot conditioning, and structured ReAct layouts for maximizing AI reliability.
                </p>
              </div>
              <div className="mt-5">
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill animated" style={{ width: "90%" }} />
                </div>
                <div className="text-[10px] text-gray-600 font-mono mt-1 text-right">90% Proficiency</div>
              </div>
            </div>

            {/* LLM Integration Card */}
            <div className="glass glass-hover p-6 rounded-2xl border border-teal/15 flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-3.5 select-none font-sans">🔗</div>
                <h4 className="font-poppins font-bold text-white text-[15px] mb-2">LLM Integration</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Plugging language logic (GPT series, Gemini API) seamlessly into production-compliant pipeline architectures.
                </p>
              </div>
              <div className="mt-5">
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill animated" style={{ width: "82%" }} />
                </div>
                <div className="text-[10px] text-gray-600 font-mono mt-1 text-right">82% Proficiency</div>
              </div>
            </div>

            {/* Data Automation Card */}
            <div className="glass glass-hover p-6 rounded-2xl border border-saffron/15 flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-3.5 select-none font-sans">⚙️</div>
                <h4 className="font-poppins font-bold text-white text-[15px] mb-2">Data Automation</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  End-to-end data pipelines: cleaning raw inputs, mapping database metrics, and computing reports.
                </p>
              </div>
              <div className="mt-5">
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill animated" style={{ width: "88%" }} />
                </div>
                <div className="text-[10px] text-gray-600 font-mono mt-1 text-right">88% Proficiency</div>
              </div>
            </div>

            {/* NLP Continuous Study Card */}
            <div className="glass glass-hover p-6 rounded-2xl border border-teal/15 flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-3.5 select-none font-sans">🧠</div>
                <h4 className="font-poppins font-bold text-white text-[15px] mb-2">NLP (Continuous Study)</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Evaluating transformer embeddings, textual tokenization rules, vector similarity, and context chat boundaries.
                </p>
              </div>
              <div className="mt-5">
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill animated" style={{ width: "72%" }} />
                </div>
                <div className="text-[10px] text-gray-600 font-mono mt-1 text-right">Active Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
