import React from "react";
import { Brain, Search, Cpu, BarChart3, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface NlpItem {
  title: string;
  icon: React.ReactNode;
  desc: string;
  badge: string;
}

const NLP_DETAILS: NlpItem[] = [
  {
    title: "Transformer Architectures",
    icon: <Cpu className="w-5 h-5 text-teal" />,
    desc: "Rigorous study of transformer attention paradigms — evaluating BERT embeddings, positional encoding configurations, and supervised learning rules for text classifiers.",
    badge: "BERT & LLAMAS"
  },
  {
    title: "Semantic Search & RAG",
    icon: <Search className="w-5 h-5 text-saffron" />,
    desc: "Integrating Retrieval-Augmented Generation models. Interfacing document vector chunks using dimensional projection models like FAISS for grounded retrieval accuracy.",
    badge: "FAISS VECTOR SPACE"
  },
  {
    title: "Context-Aware Chat Agents",
    icon: <Brain className="w-5 h-5 text-teal" />,
    desc: "Designing multi-turn dialogue agents with structured system rules. Creating persistent backend states that map context rules accurately across user conversation lines.",
    badge: "AGENT PARADIGMS"
  },
  {
    title: "Sentiment & Intent Extractors",
    icon: <BarChart3 className="w-5 h-5 text-saffron" />,
    desc: "Extracting critical metrics from unstructured text streams. Converting plain-text emails and support chat dialogs into structured intent categories automatically.",
    badge: "NLU PIPELINES"
  }
];

export default function NLPEdge() {
  return (
    <section id="nlp" className="relative py-28 overflow-hidden">
      {/* Background visual gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,245,212,0.1) 0%, rgba(255,149,0,0.1) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-12">The NLP Edge</div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Block: Description with emphasis quotes */}
          <div>
            <div className="flex">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full mb-6 select-none"
              >
                <Star className="w-3.5 h-3.5 text-teal fill-teal animate-spin-slow" />
                <span className="text-[10px] font-bold text-teal uppercase font-mono tracking-wider">
                  Special Focus
                </span>
              </div>
            </div>

            <h2 className="font-poppins font-black text-4xl lg:text-5xl mb-8 leading-tight">
              Beyond Raw Numbers —
              <br />
              <span className="teal-text">Analyzing Intent</span>
            </h2>

            {/* Quote design box */}
            <div className="nlp-section p-7 sm:p-9 rounded-3xl mb-8 border border-teal/25 bg-teal/[0.02]">
              <p className="text-gray-200 text-base leading-relaxed font-light italic mb-6 border-l-2 border-teal pl-5 select-text">
                "My continuous study in Natural Language Processing enables me to go beyond
                classical numerical tables. I leverage <strong className="text-teal font-semibold font-mono">unstructured context</strong> to automate real-time business triages, translating language into actionable, structured parameters."
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                Roughly 80% of business documents is unstructured text (emails, call logs, logs, documents).
                Combining standard tabular Scikit-Learn models with transformer classification ensures that systems fully grasp the context of a scenario, rather than only reading isolated digits.
              </p>
            </div>

            {/* Continuous commit note */}
            <div
              className="p-5 rounded-2xl flex items-start gap-4 border border-saffron/20 bg-saffron/[0.02] shadow-sm"
            >
              <span className="text-2xl mt-0.5 select-none animate-pulse">🔥</span>
              <div>
                <h5 className="font-bold text-white mb-1.5 text-sm">Structured Self-Learning</h5>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Every morning starts with structured notebook scripting and reviewing NLP literature (BERT architectures, vector similarity modeling, few-shot prompting). This compounding daily work translates directly to cleaner context-aware AI pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Capabilities list bento-style */}
          <div className="space-y-4">
            {NLP_DETAILS.map((det, idx) => (
              <div
                key={idx}
                className="glass p-5.5 rounded-2xl border border-white/5 hover:border-teal/30 hover:bg-obsidian-600/80 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/5">
                      {det.icon}
                    </div>
                    <h4 className="font-poppins font-bold text-white text-sm sm:text-base">
                      {det.title}
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono text-gray-600 bg-white/5 border border-white/5 px-2 py-0.5 rounded uppercase tracking-wide">
                    {det.badge}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light pl-12 select-text">
                  {det.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
