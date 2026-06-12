import { useState, useEffect } from "react";
import { Rocket, Github, Sparkles, Brain, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import manojImg from "./manoj.png";

const PHRASES = [
  "Data Science Engineer",
  "AI-Native Solution Architect",
  "Machine Learning Developer",
  "Prompt Engineering Specialist",
  "NLP Enthusiast & Daily Learner",
  "Real-Time Data Analyst",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((id) => id + 1);
      }, 70);

      if (charIndex === currentPhrase.length) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((id) => id - 1);
      }, 40);

      if (charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Ambient backgrounds */}
      <div
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,149,0,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,245,212,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Side: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col justify-center"
        >
          {/* Availability badge */}
          <div className="flex">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-teal/20"
              style={{ background: "rgba(0,245,212,0.06)" }}
            >
              <span className="live-dot" />
              <span
                className="text-xs font-semibold tracking-wider uppercase font-mono"
                style={{ color: "#00F5D4" }}
              >
                Available for Opportunities
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="font-poppins font-black leading-tight mb-5 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Architecting the Future
            <br />
            <span className="gradient-text">with Data & AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-xl mb-2 font-light">
            Hi, I'm <span className="font-bold text-saffron">Manoj Dubey</span> —
          </p>
          <div className="text-gray-300 text-lg mb-8 h-8 flex items-center">
            <span id="typed-text" className="font-semibold text-teal font-mono">
              {text}
            </span>
            <span className="typing-cursor" />
          </div>

          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg font-light">
            An ambitious coder specializing in real-world automation solutions
            that leverage{" "}
            <span className="font-semibold text-white">Machine Learning</span>,{" "}
            <span className="font-semibold text-saffron">Prompt Engineering</span>, and{" "}
            <span className="font-semibold text-teal">Real-Time Context</span> to solve
            tangible business inefficiencies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-saffron select-none">
              <Rocket className="w-4 h-4 stroke-[2.2]" /> View My Projects
            </a>
            <a
              href="https://github.com/MANOJDUBEY2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-teal select-none"
            >
              <Github className="w-4 h-4 stroke-[2.2]" /> Connect on GitHub
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <div className="text-3xl font-black gradient-text font-poppins">5+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase font-mono tracking-wider">
                Real-World Projects
              </div>
            </div>
            <div className="w-px h-8 bg-gray-800" />
            <div>
              <div className="text-3xl font-black gradient-text font-poppins">Daily</div>
              <div className="text-xs text-gray-500 mt-1 uppercase font-mono tracking-wider">
                NLP Study Streak
              </div>
            </div>
            <div className="w-px h-8 bg-gray-800" />
            <div>
              <div className="text-3xl font-black gradient-text font-poppins text-teal">AI-Native</div>
              <div className="text-xs text-gray-500 mt-1 uppercase font-mono tracking-wider">
                Solution Agent
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Orbiting borders */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
              style={{
                border: "1px dashed rgba(255,149,0,0.18)",
                margin: "-24px",
              }}
            />
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(0,245,212,0.15)",
                margin: "-48px",
                animation: "spin 35s linear infinite reverse",
              }}
            />

            {/* Glowing spot dot */}
            <div
              className="absolute w-4.5 h-4.5 rounded-full pointer-events-none"
              style={{
                background: "#FF9500",
                boxShadow: "0 0 15px rgba(255,149,0,0.8)",
                top: "-8px",
                left: "48%",
              }}
            />

            {/* Photo ring */}
            <div className="profile-ring flex items-center justify-center w-[280px] h-[280px] sm:w-[325px] sm:h-[325px]">
              <div className="rounded-full overflow-hidden bg-obsidian-800 w-[270px] h-[270px] sm:w-[315px] sm:h-[315px]">
                <img
                  src={manojImg}
                  alt="Manoj Dubey"
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    // Fail gracefully
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=350&q=80";
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-2 -right-4 glass px-4 py-2 border border-saffron/20 rounded-xl flex items-center gap-2 shadow-xl">
              <span className="text-lg">🤖</span>
              <div>
                <p className="text-xs font-bold text-saffron">AI-Native</p>
                <p className="text-[10px] text-gray-500 font-mono">BUILDER</p>
              </div>
            </div>

            <div className="absolute top-2 -left-8 glass px-4 py-2 border border-teal/20 rounded-xl flex items-center gap-2 shadow-xl">
              <span className="text-lg">🧠</span>
              <div>
                <p className="text-xs font-bold text-teal">NLP</p>
                <p className="text-[10px] text-gray-500 font-mono">DAILY STUDIER</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow marker */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-saffron" />
        </motion.div>
      </div>
    </section>
  );
}
