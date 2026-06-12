import React, { useState } from "react";
import { 
  Mail, 
  Linkedin, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Award
} from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    const formData = new FormData();
    formData.append("access_key", "a4b15591-e9b9-4625-bff2-ffe6f0971016");
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("subject", formState.subject);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.status === 200) {
        setStatus("SUCCESS");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    } finally {
      setTimeout(() => {
        setStatus("IDLE");
      }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-5 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(0,245,212,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-0 top-0 w-[250px] h-[250px] rounded-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(circle, rgba(255,149,0,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-6">Get in Touch</div>

        <div className="text-center mb-16">
          <h2 className="font-poppins font-black text-4xl lg:text-5xl mb-4 leading-tight">
            Let's Build Something
            <br />
            <span className="gradient-text font-black text-transparent bg-clip-text">Extraordinary Together</span>
          </h2>
          <p className="text-gray-500 max-w-sm sm:max-w-md mx-auto font-light text-sm sm:text-base">
            Have a project that needs data engineering, an AI pipeline designed, or looking to hire a self-driven trainee? Connect immediately!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Contact metrics options */}
          <div className="space-y-6">
            
            {/* Email link */}
            <a
              href="mailto:manojdubey27oct2007@gmail.com"
              className="glass glass-hover flex items-center gap-5 p-5 sm:p-6 rounded-2xl border border-saffron/15 group select-none"
            >
              <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl bg-saffron/10 border border-saffron/15 text-saffron flex-shrink-0">
                <Mail className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-bold text-white text-[14px] sm:text-base mb-1">Email Connection</h4>
                <p className="text-xs sm:text-sm text-saffron font-mono truncate">manojdubey27oct2007@gmail.com</p>
                <p className="text-[10px] text-gray-500 mt-1 font-light">Professional queries and direct proposals</p>
              </div>
            </a>

            {/* LinkedIn profile link */}
            <a
              href="https://www.linkedin.com/in/manoj-dubey-952448312/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-5 p-5 sm:p-6 rounded-2xl border border-teal/10 group select-none"
            >
              <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl bg-teal/5 border border-teal/10 text-teal flex-shrink-0">
                <Linkedin className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-bold text-white text-[14px] sm:text-base mb-1">LinkedIn Network</h4>
                <p className="text-xs sm:text-sm text-teal font-mono truncate">manoj-dubey-952448312</p>
                <p className="text-[10px] text-gray-500 mt-1 font-light">Industry networking and collaboration</p>
              </div>
            </a>

            {/* Phone option */}
            <a
              href="https://wa.me/919773860795?text=hi%20manoj%20dwivedi%20i%20see%20your%20profile%20i%20have%20some%20work%20for%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover flex items-center gap-5 p-5 sm:p-6 rounded-2xl border border-white/5 group select-none"
            >
              <div className="w-13 h-13 rounded-xl flex items-center justify-center text-xl bg-white/5 border border-white/5 text-gray-300 flex-shrink-0 group-hover:text-teal group-hover:border-teal/30 transition-colors">
                <Phone className="w-5.5 h-5.5" />
              </div>
              <div className="flex-1 min-w-0 font-poppins">
                <h4 className="font-bold text-white text-[14px] sm:text-base mb-1">Phone Line</h4>
                <p className="text-xs sm:text-sm text-gray-300 font-mono group-hover:text-teal transition-colors">+91 9773860795</p>
                <p className="text-[10px] text-gray-500 mt-1 font-light">Availability (Indian Standard Time)</p>
              </div>
            </a>

            {/* What I'm Open To Callout details */}
            <div
              className="p-6 rounded-2xl border border-white/5 shadow-inner"
              style={{
                background: "linear-gradient(135deg, rgba(255,149,0,0.02) 0%, rgba(0,245,212,0.02) 100%)"
              }}
            >
              <h5 className="font-poppins font-bold text-white text-sm mb-4">Open To Collaborations:</h5>
              <div className="space-y-3 text-xs text-gray-400 font-light font-mono">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>Entry-Level Data Scientist / Analyst positions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>AI Automation consulting layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span>Open-source ML modeling experiments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  <span>NLP agent workflow research contributions</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Block: Web3Forms Contact form */}
          <div>
            <div className="glass p-6 sm:p-8 rounded-3xl border border-teal/10">
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-6">Send direct message</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4 font-poppins">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-semibold font-mono tracking-wider text-gray-500 mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={handleChange}
                      className="form-input text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-semibold font-mono tracking-wider text-gray-500 mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="form-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-semibold font-mono tracking-wider text-gray-500 mb-1.5 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="ML Pipeline / Hiring Trainee Opportunities"
                    value={formState.subject}
                    onChange={handleChange}
                    className="form-input text-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-semibold font-mono tracking-wider text-gray-500 mb-1.5 block">
                    Message Body
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your data pipeline inquiry or trainee requirements..."
                    value={formState.message}
                    onChange={handleChange}
                    className="form-input text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "SENDING"}
                  className={`btn-saffron w-full justify-center py-3.5 text-xs sm:text-sm tracking-wide ${
                    status === "SENDING" ? "opacity-75" : ""
                  }`}
                  style={{
                    background: status === "SUCCESS" ? "linear-gradient(135deg, #00C4A7, #00F5D4)" : ""
                  }}
                >
                  {status === "IDLE" && (
                    <>
                      <Send className="w-4 h-4 stroke-[2.2]" />
                      <span>Send Message</span>
                    </>
                  )}
                  {status === "SENDING" && (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-4 h-4 border-2 border-obsidian-900 border-t-transparent rounded-full"
                      />
                      <span>Encrypting & Sending...</span>
                    </>
                  )}
                  {status === "SUCCESS" && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-obsidian-900 font-bold">Message Dispatched! ✓</span>
                    </>
                  )}
                  {status === "ERROR" && (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      <span>Transmit Failed! Try again</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
