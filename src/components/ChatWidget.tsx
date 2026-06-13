import { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  Brain, 
  Bot, 
  ArrowRight, 
  Terminal, 
  AlertCircle,
  HelpCircle,
  User
} from "lucide-react";
import { Message, PresetPrompt } from "../types";
import { motion, AnimatePresence } from "motion/react";
import manojImg from "./manoj.png";

const PRESET_PROMPTS: PresetPrompt[] = [
  {
    label: "Why hire Manoj?",
    prompt: "Why should I hire Manoj Dubey? What makes him stand out?"
  },
  {
    label: "Key Skills",
    prompt: "What technical skills and advanced capabilities does Manoj have?"
  },
  {
    label: "Main Projects",
    prompt: "Tell me about Manoj's top projects and the real-world value they added."
  },
  {
    label: "Contact Manoj",
    prompt: "How can I get in touch with Manoj for opportunities?"
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! 👋 I'm Manoj's Personal AI Assistant. Ask me anything about his learning journey in Data Science, NLP capabilities, project applications, or how to get in touch!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsgId = `msg-${Date.now()}`;
    const userMessage: Message = {
      id: userMsgId,
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Prepare message history to match the context expectations
    // Select the last 10 messages to keep the token size reasonable
    const chatHistory = [...messages, userMessage].map(m => ({
      role: m.role,
      text: m.text
    })).slice(-10);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: chatHistory })
      });

      if (!response.ok) {
        throw new Error("HTTP connection error");
      }

      const data = await response.json();
      const modelMessage: Message = {
        id: `msg-${Date.now()}-reply`,
        role: "model",
        text: data.text || "I was unable to retrieve a response from Manoj's environment.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, modelMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: Message = {
        id: `msg-${Date.now()}-err`,
        role: "model",
        text: "I'm currently having trouble connecting to the AI service. Please ensure the GEMINI_API_KEY is correctly configured in the environment settings. Contact Manoj: manojdubey27oct2007@gmail.com",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="ai-chat-root" className="fixed bottom-6 right-6 z-50 font-inter">
      {/* Floating Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            id="chat-toggle-btn"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-14 h-14 rounded-full relative overflow-hidden group cursor-pointer shadow-2xl shadow-saffron/20 border border-saffron/30"
            style={{
              background: "linear-gradient(135deg, #FF9500 0%, #CC7700 100%)"
            }}
          >
            {/* Ambient Animated Ping / Glow */}
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Bot className="w-6 h-6 text-obsidian-900 stroke-[2.2]" />
            </motion.div>
            
            {/* Sparkle Tag */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-dark flex items-center justify-center text-[8px] font-bold text-obsidian-900">
                AI
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded Chat Dialog Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-dialog-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[360px] sm:w-[400px] h-[580px] rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/10 glass shadow-black/80"
          >
            {/* Chat Header */}
            <div 
              id="chat-window-header"
              className="px-4 py-4 flex items-center justify-between border-b border-white/10"
              style={{
                background: "linear-gradient(90deg, rgba(13, 17, 23, 0.9) 0%, rgba(22, 27, 34, 0.9) 100%)"
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-saffron/30 bg-obsidian-900">
                    <img 
                      src={manojImg} 
                      alt="M" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback icon if image doesn't load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-teal border-2 border-obsidian-900 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-poppins font-bold text-white flex items-center gap-1.5">
                    Manoj's Assistant
                  </h4>
                  <p className="text-[10px] text-gray-500 tracking-wider flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-saffron" />
                    POWERED BY GEMINI 1.5
                  </p>
                </div>
              </div>

              <button
                id="close-chat-btn"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Context Bar */}
            <div className="px-4 py-1.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-[10px] font-mono text-teal/80">
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-saffron" /> CONNECTION_SECURE // OK
              </span>
              <span className="text-gray-600">DELHI_IN_NODE</span>
            </div>

            {/* Messages Scroll Area */}
            <div 
              id="chat-messages-container"
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
              style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,149,0,0.015) 0%, transparent 80%)"
              }}
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start gap-2.5 max-w-[85%] ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                        {/* Avatar representation inside message thread */}
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border text-[11px] font-poppins font-bold ${
                          isUser 
                            ? "bg-white/5 border-white/10 text-white" 
                            : "bg-saffron/10 border-saffron/20 text-saffron"
                        }`}>
                          {isUser ? <User className="w-3.5 h-3.5 text-gray-400" /> : <Bot className="w-3.5 h-3.5 text-saffron" />}
                        </div>

                        <div className="flex flex-col">
                          {/* Bubble Body */}
                          <div
                            className={`p-3.5 rounded-2xl text-[13px] leading-relaxed select-text ${
                              isUser
                                ? "bg-saffron text-obsidian-900 font-medium rounded-tr-none"
                                : "bg-obsidian-600/90 border border-white/5 text-gray-100 rounded-tl-none font-light"
                            }`}
                          >
                            <p className="whitespace-pre-line">{msg.text}</p>
                          </div>
                          
                          {/* Message meta descriptor */}
                          <span className={`text-[9px] text-gray-600 font-mono mt-1 ${isUser ? "text-right" : "text-left"}`}>
                            {msg.timestamp}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start gap-2.5 max-w-[85%]">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-saffron/10 border border-saffron/20 text-saffron">
                        <Bot className="w-3.5 h-3.5 text-saffron animate-pulse" />
                      </div>
                      <div className="bg-obsidian-600/90 border border-white/5 text-gray-400 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-saffron animate-bounce" style={{ animationDelay: "100ms" }} />
                        <span className="w-2 h-2 rounded-full bg-saffron animate-bounce" style={{ animationDelay: "250ms" }} />
                        <span className="w-2 h-2 rounded-full bg-saffron animate-bounce" style={{ animationDelay: "400ms" }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Presets Slider panel */}
            {messages.length < 3 && (
              <div className="px-4 py-2 border-t border-white/5 bg-black/10 flex flex-col gap-1.5">
                <p className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                  <Brain className="w-3 h-3 text-teal" /> QUICK QUESTIONS:
                </p>
                <div className="flex flex-wrap gap-1.5 pr-2 py-0.5">
                  {PRESET_PROMPTS.map((preset, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSendMessage(preset.prompt)}
                      className="px-2.5 py-1 text-[11px] text-left rounded-lg bg-obsidian-500 hover:bg-obsidian-400 border border-white/5 text-gray-300 hover:text-white transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>{preset.label}</span>
                      <ArrowRight className="w-3 h-3 text-teal" />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-obsidian-800 border-t border-white/10 flex gap-2 items-center"
            >
              <input
                id="ai-chat-input-field"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask something about Manoj..."
                className="flex-1 bg-obsidian-500 text-xs px-3.5 py-2.5 rounded-xl border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-saffron/50 font-light"
                disabled={isLoading}
              />
              <button
                id="ai-chat-send-btn"
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer select-none ${
                  inputText.trim() 
                    ? "bg-saffron text-obsidian-900 shadow-md shadow-saffron/20 hover:scale-105" 
                    : "bg-obsidian-500 text-gray-600 border border-white/5"
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
