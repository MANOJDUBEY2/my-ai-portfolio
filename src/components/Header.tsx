import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import manojImg from "./manoj.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 navbar-glass transition-all duration-300 ${
        isScrolled ? "py-2.5 shadow-xl bg-obsidian-900/90" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center border border-saffron/20 shadow-md shadow-saffron/5"
            style={{ background: "linear-gradient(135deg,#FF9500,#00F5D4)" }}
          >
            <img
              src={manojImg}
              alt="M"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <span className="font-poppins font-bold text-lg hidden sm:block tracking-wide">
            <span className="gradient-text">Manoj</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#stack" className="nav-link">Tech Stack</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#nlp" className="nav-link">NLP Edge</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* GitHub CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MANOJDUBEY2"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-xs font-bold text-obsidian-900 px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 select-none"
            style={{
              background: "linear-gradient(135deg,#FF9500,#00F5D4)",
              color: "#060811",
            }}
          >
            <Github className="w-4 h-4 stroke-[2.2]" /> GitHub
          </a>
          <button
            id="menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-saffron transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-saffron" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu md:hidden px-6 py-5 space-y-4 border-b border-white/5 bg-obsidian-900"
        >
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block nav-link text-base py-2"
          >
            About
          </a>
          <a
            href="#stack"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block nav-link text-base py-2"
          >
            Tech Stack
          </a>
          <a
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block nav-link text-base py-2"
          >
            Projects
          </a>
          <a
            href="#nlp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block nav-link text-base py-2"
          >
            NLP Edge
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block nav-link text-base py-2"
          >
            Contact
          </a>
          <a
            href="https://github.com/MANOJDUBEY2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-saffron text-sm w-full justify-center mt-2"
          >
            <Github className="w-4 h-4" /> View GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
