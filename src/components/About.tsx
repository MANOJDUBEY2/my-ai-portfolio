import { BookOpen, Award, Sparkles, TrendingUp, Calendar, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Ambient overlay */}
      <div
        className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="section-label mb-16">About Me</div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Narrative description */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-poppins font-black text-4xl lg:text-5xl leading-tight">
              Turning Raw Data into
              <br />
              <span className="gradient-text font-black">Intelligent Decisions</span>
            </h2>

            <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed font-light">
              <p>
                I'm Manoj, an aspiring{" "}
                <span className="text-white font-medium">Data Scientist & AI Engineer</span>,
                pursuing a Bachelor of Computer Applications (BCA) from Open University and
                currently enrolled in a comprehensive Data Science program at Ducat. My entry
                into computing is grounded in computer science fundamentals paired with a intense
                specialization in modern statistical reasoning.
              </p>
              <p>
                My focus centers on constructing{" "}
                <span className="text-saffron font-medium">AI-Native utilities</span> — setups
                that go beyond simple processing models to establish interactive pipelines that
                contextually grasp, learn, and dynamically output optimal solutions. From designing{" "}
                <span className="text-teal font-medium">real-time Machine Learning systems</span>{" "}
                to deploying structured prompt engineering parameters, I design practical,
                production-compliant systems.
              </p>
              <p>
                What distinguishes my approach is a commitment to continuous growth. Each day,
                I dedicate focused study towards deep learning concepts and{" "}
                <span className="text-teal font-medium">Natural Language Processing (NLP)</span>{" "}
                architectures — exploring context-aware LLM agents, token embeddings, and semantic RAG setups.
                This structure assures the systems I create are smarter and contextually robust.
              </p>
            </div>

            {/* Daily commitment highlight box */}
            <div
              className="p-5.5 rounded-2xl flex items-start gap-4 border border-teal/15 mt-8 shadow-lg bg-obsidian-700/40"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,245,212,0.04) 0%, rgba(255,149,0,0.02) 100%)",
              }}
            >
              <span className="text-2xl mt-0.5 select-none animate-pulse">🎯</span>
              <div>
                <h4 className="font-bold text-white mb-1.5 text-sm sm:text-base">
                  Daily Dedication to Natural Language Processing
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  I dedicate structured time daily to studying transformers, context embeddings,
                  BERT fine-tuning, and Retrieval-Augmented Generation (RAG) paradigms, moving from
                  raw theory to deployment.
                </p>
              </div>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2 pt-3">
              <span className="skill-pill select-none">Data Science</span>
              <span className="skill-pill skill-pill-teal select-none">Machine Learning</span>
              <span className="skill-pill select-none">Prompt Engineering</span>
              <span className="skill-pill skill-pill-teal select-none">Daily NLP Study</span>
              <span className="skill-pill select-none">Python Automation</span>
              <span className="skill-pill skill-pill-teal select-none">Exploratory Analysis</span>
            </div>
          </div>

          {/* Educational Timeline & stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bento statistics panel */}
            <div className="grid grid-cols-2 gap-4">
              <div className="stat-card">
                <div className="text-3xl font-black font-poppins text-saffron flex items-center justify-center gap-1.5">
                  <BookOpen className="w-5 h-5 text-saffron" />
                  BCA
                </div>
                <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase tracking-wider">
                  Open University / Technia
                </p>
              </div>

              <div
                className="stat-card"
                style={{
                  background: "rgba(0,245,212,0.05)",
                  borderColor: "rgba(0,245,212,0.15)",
                }}
              >
                <div className="text-3xl font-black font-poppins text-teal flex items-center justify-center gap-1.5">
                  <Award className="w-5 h-5 text-teal" />
                  5+
                </div>
                <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase tracking-wider">
                  Projects Developed
                </p>
              </div>

              <div
                className="stat-card col-span-2"
                style={{
                  background: "rgba(0,245,212,0.03)",
                  borderColor: "rgba(0,245,212,0.1)",
                }}
              >
                <div className="text-xl font-black font-poppins text-teal flex items-center justify-center gap-2">
                  <Compass className="w-4 h-4 text-teal animate-spin-slow" />
                  Constant Learning Goal
                </div>
                <p className="text-[10px] text-gray-500 font-mono mt-1.5">
                  Focusing on Transformer Models, BERT, & Context Chat Agents
                </p>
              </div>
            </div>

            {/* Timeline element */}
            <div className="p-1">
              <h3 className="font-poppins font-bold text-lg text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-4.5 h-4.5 text-saffron" /> My Journey & Path
              </h3>

              <div className="space-y-1">
                {/* Timeline item 1 */}
                <div className="timeline-item">
                  <span className="text-[10px] text-gray-500 font-semibold font-mono flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3 text-teal" /> FOUNDATION
                  </span>
                  <p className="font-bold text-white text-sm">Computer Science & BCA studies</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                    Building core database (SQL), algorithms, networking and general CS architectures.
                  </p>
                </div>

                {/* Timeline item 2 */}
                <div className="timeline-item">
                  <span className="text-[10px] text-gray-500 font-semibold font-mono flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3 text-teal" /> SPECIALISATION
                  </span>
                  <p className="font-bold text-white text-sm">Ducat Data Science Focus</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                    Deep dive into data processing (Pandas, NumPy), statistics, and machine learning models (Scikit-Learn).
                  </p>
                </div>

                {/* Timeline item 3 */}
                <div className="timeline-item">
                  <span className="text-[10px] text-gray-500 font-semibold font-mono flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3 text-teal" /> PRACTICAL
                  </span>
                  <p className="font-bold text-white text-sm">Prompt Engineering & Automation</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                    Integrating language reasoning systems, system instructions, and RAG architectures securely.
                  </p>
                </div>

                {/* Timeline item 4 */}
                <div className="timeline-item last-child border-transparent">
                  <span className="text-[10px] text-saffron font-semibold font-mono flex items-center gap-1 mb-1 animate-pulse">
                    <Calendar className="w-3 h-3 text-saffron" /> CURRENTLY ACTIVE
                  </span>
                  <p className="font-bold text-white text-sm">Daily NLP Research & Development</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                    Mastering semantic vector spaces, text categorization, chunk embeddings, and agent-driven intelligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
