import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-obsidian-900/60 relative z-10 font-inter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo details */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm text-obsidian-900 border border-saffron/10"
              style={{ background: "linear-gradient(135deg,#FF9500,#00F5D4)" }}
            >
              M
            </div>
            <div>
              <div className="font-poppins font-bold gradient-text text-base leading-none">Manoj</div>
              <div className="text-[10px] text-gray-600 mt-1 uppercase font-mono tracking-wider">
                Data Science & AI Builder
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-mono tracking-wide">
            <a href="#about" className="hover:text-saffron transition-colors">About</a>
            <a href="#stack" className="hover:text-saffron transition-colors">Stack</a>
            <a href="#projects" className="hover:text-saffron transition-colors">Projects</a>
            <a href="#nlp" className="hover:text-saffron transition-colors">NLP Edge</a>
            <a href="#contact" className="hover:text-saffron transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://github.com/MANOJDUBEY2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all w-9 h-9"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-dubey-952448312/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:text-teal hover:border-teal/30 hover:bg-teal/5 transition-all w-9 h-9"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:manojdubey27oct2007@gmail.com"
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 hover:text-saffron hover:border-saffron/30 hover:bg-saffron/5 transition-all w-9 h-9"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Separator lines */}
        <div
          className="h-px w-full my-8 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-gray-600 font-mono">
          <p>
            © {currentYear} Manoj. Crafted with <Heart className="w-3 h-3 text-red-500 inline fill-red-500 animate-pulse mx-0.5" /> & Data Science fundamentals.
          </p>
          <div className="flex items-center gap-2 select-none">
            <span className="live-dot" style={{ width: "6px", height: "6px" }} />
            <span className="text-teal font-semibold">Continuous self-learning in progress</span>
          </div>
          <a
            href="https://github.com/MANOJDUBEY2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal transition-colors"
          >
            github.com/MANOJDUBEY2
          </a>
        </div>
      </div>
    </footer>
  );
}
