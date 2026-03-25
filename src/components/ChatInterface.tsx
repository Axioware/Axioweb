import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
}

const demoConversation: { text: string; sender: "bot" | "user" }[] = [
  { text: "Hi there! 👋 How can I help you today?", sender: "bot" },
  { text: "I'd like to learn about your services", sender: "user" },
  { text: "Great choice! We offer AI chatbots for customer support, lead generation, and automation. Would you like a quick demo?", sender: "bot" },
  { text: "Yes, that sounds interesting!", sender: "user" },
  { text: "Perfect! I can help you get started right away. What industry is your business in?", sender: "bot" },
  { text: "We're in e-commerce", sender: "user" },
  { text: "Excellent! Our e-commerce chatbots can handle product inquiries, order tracking, and abandoned cart recovery. Shall I connect you with our team?", sender: "bot" },
];

const quickReplies = [
  "Tell me more",
  "Book a demo",
  "Pricing info",
];

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Scroll within the container, not the whole page
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  };

  const addMessage = (text: string, sender: "bot" | "user") => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      time: getCurrentTime(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const startConversation = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setMessages([]);
    setCurrentIndex(0);
    
    // Start with first bot message
    simulateTyping(() => {
      addMessage(demoConversation[0].text, "bot");
      setCurrentIndex(1);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!isPlaying || currentIndex >= demoConversation.length || isTyping) return;

    const currentItem = demoConversation[currentIndex];
    
    if (currentItem.sender === "user") {
      addMessage(currentItem.text, "user");
      setInputValue("");
      
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      
      // If next message is from bot, simulate typing
      if (nextIndex < demoConversation.length && demoConversation[nextIndex].sender === "bot") {
        simulateTyping(() => {
          addMessage(demoConversation[nextIndex].text, "bot");
          setCurrentIndex(nextIndex + 1);
        }, 1800);
      }
    }
  };

  const handleQuickReply = (reply: string) => {
    if (!isPlaying || isTyping) return;
    
    addMessage(reply, "user");
    
    simulateTyping(() => {
      addMessage("Thanks for your interest! I'll connect you with our team right away. 🚀", "bot");
    }, 1500);
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentIndex(0);
    setIsPlaying(false);
    setIsTyping(false);
    setInputValue("");
  };

  const canSend = isPlaying && currentIndex < demoConversation.length && 
                  demoConversation[currentIndex]?.sender === "user" && !isTyping;

  const showQuickReplies = isPlaying && !isTyping && 
                           currentIndex >= demoConversation.length && 
                           messages.length > 0;

  return (
    <div className="w-full h-full bg-gradient-to-b from-secondary to-card flex flex-col">
      {/* Chat Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3 pt-10">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-white text-sm font-semibold">AI Assistant</p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/70 text-xs">
              {isTyping ? "Typing..." : "Online"}
            </span>
          </div>
        </div>
        {isPlaying && (
          <button 
            onClick={resetChat}
            className="text-white/70 text-xs hover:text-white transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Chat Messages */}
      <div ref={messagesContainerRef} className="flex-1 p-4 space-y-3 overflow-y-auto bg-secondary/30">
        {!isPlaying && messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center px-4"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-accent" />
            </div>
            <p className="text-foreground font-medium mb-2 text-sm">Try our AI Chatbot</p>
            <p className="text-muted-foreground text-xs mb-4">
              Click below to start an interactive demo
            </p>
            <button
              onClick={startConversation}
              className="px-4 py-2 bg-accent text-white rounded-full text-xs font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              Start Demo
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: message.sender === "bot" ? -20 : 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex gap-2 ${message.sender === "user" ? "justify-end" : ""}`}
            >
              {message.sender === "bot" && (
                <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-3.5 h-3.5 text-accent" />
                </div>
              )}
              <div
                className={`rounded-2xl px-3 py-2 max-w-[80%] shadow-sm ${
                  message.sender === "bot"
                    ? "bg-card rounded-tl-sm border border-border/30"
                    : "bg-accent text-white rounded-tr-sm"
                }`}
              >
                <p className={`text-xs ${message.sender === "bot" ? "text-foreground" : ""}`}>
                  {message.text}
                </p>
                <span
                  className={`text-[10px] mt-0.5 block ${
                    message.sender === "bot"
                      ? "text-muted-foreground"
                      : "text-white/70 text-right"
                  }`}
                >
                  {message.time}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex gap-2"
            >
              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-border/30">
                <div className="flex gap-1.5">
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-accent/60 rounded-full"
                  />
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    className="w-2 h-2 bg-accent/60 rounded-full"
                  />
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    className="w-2 h-2 bg-accent/60 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Replies */}
        <AnimatePresence>
          {showQuickReplies && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {quickReplies.map((reply, index) => (
                <motion.button
                  key={reply}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-[10px] font-medium hover:bg-accent/20 transition-colors border border-accent/20"
                >
                  {reply}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-3 bg-card border-t border-border/50">
        <div className="flex items-center gap-2 bg-secondary/50 rounded-full px-3 py-2">
          <input
            type="text"
            placeholder={canSend ? "Tap send to continue..." : "Type a message..."}
            className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
            value={canSend ? demoConversation[currentIndex]?.text || "" : inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            readOnly={canSend}
          />
          <button
            onClick={handleSendMessage}
            disabled={!canSend}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
              canSend
                ? "bg-accent hover:bg-accent/90 cursor-pointer"
                : "bg-muted cursor-not-allowed"
            }`}
          >
            <Send className={`w-3.5 h-3.5 ${canSend ? "text-white" : "text-muted-foreground"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
