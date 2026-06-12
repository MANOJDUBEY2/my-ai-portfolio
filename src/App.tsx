import MatrixBackground from "./components/MatrixBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import NLPEdge from "./components/NLPEdge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <div id="portfolio-app-root" className="min-h-screen bg-obsidian-900 text-gray-300 font-sans relative selection:bg-saffron/20 selection:text-saffron">
      {/* 1. Dynamic Data Matrix Rain Canvas Backdrop */}
      <MatrixBackground />

      {/* 2. Glassmorphism Scroll Navigation bar */}
      <Header />

      {/* 3. Main content wrappers */}
      <main className="relative z-10">
        {/* Intro branding visual segment */}
        <Hero />

        {/* Section divider */}
        <div className="section-sep" />

        {/* Dynamic educational and self-learning narrative */}
        <About />

        {/* Section divider */}
        <div className="section-sep" />

        {/* Curated skill grid with dynamic progress indicators */}
        <TechStack />

        {/* Section divider */}
        <div className="section-sep" />

        {/* Project grid along with logistics anomaly analyzer simulator */}
        <Projects />

        {/* Section divider */}
        <div className="section-sep" />

        {/* Special differentiation section: Unstructured NLP text focus */}
        <NLPEdge />

        {/* Section divider */}
        <div className="section-sep" />

        {/* Web3Forms submit block */}
        <Contact />
      </main>

      {/* 4. Document Footer detailing legal rights and socials */}
      <Footer />

      {/* 5. Floating interactive Personal Assistant chatbot panel */}
      <ChatWidget />
    </div>
  );
}
