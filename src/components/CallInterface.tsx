import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, Headphones, MessageSquare, User, Bot, Globe, ChefHat, Sparkles } from "lucide-react";
import { useConversation } from "@elevenlabs/react";
import { ScrollArea } from "@/components/ui/scroll-area";

type CallState = "incoming" | "connecting" | "active" | "ended";
type Language = "english" | "urdu";

interface TranscriptMessage {
  id: string;
  role: "user" | "agent";
  text: string;
  timestamp: Date;
}

const AGENT_IDS = {
  english: import.meta.env.VITE_AGENT_ENGLISH,
  urdu: import.meta.env.VITE_AGENT_URDU,
};

const AGENT_STYLES = {
  english: {
    name: "Chefie",
    icon: ChefHat,
    bgColor: "bg-amber-500/20",
    iconColor: "text-amber-400",
    pulseColor: "bg-amber-500/40",
    borderColor: "border-amber-400/30",
    accentGlow: "shadow-amber-500/30",
  },
  urdu: {
    name: "Aria",
    icon: Sparkles,
    bgColor: "bg-violet-500/20",
    iconColor: "text-violet-400",
    pulseColor: "bg-violet-500/40",
    borderColor: "border-violet-400/30",
    accentGlow: "shadow-violet-500/30",
  },
};

export default function CallInterface() {
  const [callState, setCallState] = useState<CallState>("incoming");
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);
  const [transcripts, setTranscripts] = useState<TranscriptMessage[]>([]);
  const [partialTranscript, setPartialTranscript] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const connectedRef = useRef(false);const callStateRef = useRef<CallState>("incoming");
  const sessionActiveRef = useRef(false);
  const setCallStateSync = (state: CallState) => {
    callStateRef.current = state;
    setCallState(state);
  };

  const conversation = useConversation({
    onConnect: () => {
      if (connectedRef.current) return;
      connectedRef.current = true;
      sessionActiveRef.current = true;
      setCallStateSync("active");
      // ...

      timeoutRef.current = setTimeout(async () => {
        if (sessionActiveRef.current) {
          try {
            await conversation.endSession(); // conversation from closure is fine here since it's the SDK object, not state
          } catch (err) {
            console.error("Error ending session:", err);
          }
        }
      }, 30000);
    },
    onDisconnect: () => {
      connectedRef.current = false;
      if (callStateRef.current === "active" || callStateRef.current === "connecting") {
        setCallStateSync("ended");
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    },
    onMessage: (message) => {
      console.log("ElevenLabs message:", message);
      
      // Handle different message types for transcript
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const msg = message as any;
      
      if (msg.type === "user_transcript" && msg.user_transcription_event?.user_transcript) {
        const userText = msg.user_transcription_event.user_transcript;
        setTranscripts(prev => [...prev, {
          id: `user-${Date.now()}`,
          role: "user",
          text: userText,
          timestamp: new Date()
        }]);
        setPartialTranscript("");
      } else if (msg.type === "agent_response" && msg.agent_response_event?.agent_response) {
        const agentText = msg.agent_response_event.agent_response;
        setTranscripts(prev => [...prev, {
          id: `agent-${Date.now()}`,
          role: "agent",
          text: agentText,
          timestamp: new Date()
        }]);
      } else if (msg.type === "transcript" && msg.text) {
        // Handle partial/streaming transcripts
        if (msg.role === "user") {
          setPartialTranscript(msg.text);
        }
      }
    },
    onError: (error) => {
      console.error("ElevenLabs error:", error);
      setCallStateSync("ended");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    },
  });

  // Auto-scroll transcript
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcripts, partialTranscript]);

  // Timer for active call
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callState === "active") {
      interval = setInterval(() => {
        setCallDuration((prev) => {
          if (prev >= 30) return prev;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  // Reset after call ends
  useEffect(() => {
    if (callState === "ended") {
      const timeout = setTimeout(() => {
        setCallState("incoming");
        setCallDuration(0);
        setIsMuted(false);
        setIsSpeakerOn(true);
        setShowTranscript(false);
        setTranscripts([]);
        setPartialTranscript("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [callState]);

  useEffect(() => {
    return () => {
      connectedRef.current = false;
      sessionActiveRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const handlePickUp = async () => {
    if (conversation.status === "connected" || connectedRef.current || callState === "connecting") {
      return;
    }

    setCallState("connecting");

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Starting session with agent:", AGENT_IDS[selectedLanguage]);
      await (conversation.startSession as any)({
        agentId: AGENT_IDS[selectedLanguage],
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setCallState("ended");
    }
  };

  const handleHangUp = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (conversation.status === "connected") {
      await conversation.endSession();
    } else {
      console.warn("Skipping endSession: not connected");
    }

    setCallState("ended");
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleSpeaker = async () => {
    const newSpeakerState = !isSpeakerOn;
    setIsSpeakerOn(newSpeakerState);
    if (conversation.status === "connected") {
      await conversation.setVolume({ volume: newSpeakerState ? 1 : 0 });
    }
  };

  const toggleTranscript = () => {
    setShowTranscript((prev) => !prev);
  };

  const agentStyle = AGENT_STYLES[selectedLanguage];
  const AgentIcon = agentStyle.icon;
  const getAgentName = () => agentStyle.name;

  const getStatusText = () => {
    switch (callState) {
      case "incoming":
        return "Incoming Call";
      case "connecting":
        return "Connecting...";
      case "active":
        return conversation.isSpeaking ? "Agent Speaking" : "Listening...";
      case "ended":
        return "Call Ended";
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-primary via-primary/90 to-primary/80 flex flex-col relative overflow-hidden">
      {/* Status Bar Area */}
      <div className="pt-12 px-6 pb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={callState + (conversation.isSpeaking ? "-speaking" : "")}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center justify-center gap-2"
          >
            {/* Speaking/Listening indicator dot */}
            {callState === "active" && (
              <motion.div
                className={`w-2 h-2 rounded-full ${conversation.isSpeaking ? "bg-accent" : "bg-green-400"}`}
                animate={{ 
                  scale: conversation.isSpeaking ? [1, 1.3, 1] : [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
            <p className="text-white/60 text-xs text-center">
              {getStatusText()}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 min-h-0">
        <AnimatePresence mode="wait">
          {showTranscript && callState === "active" ? (
            /* Transcript View */
            <motion.div
              key="transcript"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full h-full flex flex-col"
            >
              {/* Mini caller info */}
              <div className="flex items-center gap-2 mb-3">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={selectedLanguage}
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className={`w-8 h-8 rounded-full ${agentStyle.bgColor} flex items-center justify-center relative`}
                  >
                    {conversation.isSpeaking && (
                      <motion.div
                        className={`absolute inset-0 rounded-full ${agentStyle.pulseColor}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.3, 0.8] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    )}
                    <AgentIcon className={`w-4 h-4 ${agentStyle.iconColor} relative z-10`} />
                  </motion.div>
                </AnimatePresence>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={selectedLanguage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-white text-sm font-medium"
                    >
                      {getAgentName()}
                    </motion.p>
                  </AnimatePresence>
                  <p className="text-white/50 text-xs">{30 - callDuration}</p>
                </div>
              </div>

              {/* Transcript messages */}
              <ScrollArea className="flex-1 pr-2" ref={scrollRef}>
                <div className="space-y-3 pb-2">
                  {transcripts.length === 0 && !partialTranscript && (
                    <p className="text-white/40 text-xs text-center py-8">
                      Conversation will appear here...
                    </p>
                  )}
                  {transcripts.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.role === "user" ? "bg-white/20" : "bg-accent/20"
                      }`}>
                        {msg.role === "user" ? (
                          <User className="w-3 h-3 text-white/70" />
                        ) : (
                          <Bot className="w-3 h-3 text-accent" />
                        )}
                      </div>
                      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs ${
                        msg.role === "user" 
                          ? "bg-white/20 text-white rounded-br-sm" 
                          : "bg-accent/20 text-white rounded-bl-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {/* Partial transcript (typing indicator) */}
                  {partialTranscript && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2 flex-row-reverse"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-3 h-3 text-white/70" />
                      </div>
                      <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-br-sm bg-white/10 text-white/60 text-xs">
                        {partialTranscript}...
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>
            </motion.div>
          ) : (
            /* Default Call View */
            <motion.div
              key="call-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              {/* Avatar with speaking/listening indicators */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLanguage}
                  initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className={`w-24 h-24 rounded-full ${agentStyle.bgColor} flex items-center justify-center mb-4 relative shadow-lg ${agentStyle.accentGlow}`}
                >
                  {/* Incoming ring */}
                  {(callState === "incoming" || callState === "connecting") && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${agentStyle.pulseColor} opacity-30`}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Speaking indicator - larger pulse */}
                  {callState === "active" && conversation.isSpeaking && (
                    <>
                      <motion.div
                        className={`absolute inset-0 rounded-full ${agentStyle.pulseColor}`}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      <motion.div
                        className={`absolute inset-[-8px] rounded-full border-2 ${agentStyle.borderColor}`}
                        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: 0.1 }}
                      />
                    </>
                  )}

                  {/* Listening indicator - subtle glow */}
                  {callState === "active" && !conversation.isSpeaking && (
                    <motion.div
                      className="absolute inset-[-4px] rounded-full border border-green-400/40"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  <motion.div
                    animate={callState === "active" && conversation.isSpeaking ? { scale: [1, 1.15, 1] } : {}}
                    transition={{ duration: 0.4, repeat: Infinity }}
                  >
                    <AgentIcon className={`w-12 h-12 ${agentStyle.iconColor} relative z-10`} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <AnimatePresence mode="wait">
                  <motion.h3 
                    key={selectedLanguage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="text-white text-xl font-semibold mb-1"
                  >
                    {getAgentName()}
                  </motion.h3>
                </AnimatePresence>
                <p className="text-white/60 text-sm">AI Restaurant Assistant</p>
              </motion.div>

              {/* Call Duration / Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={callState + callDuration}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white/80 text-sm font-medium"
                  >
                    {callState === "incoming" && "Tap to answer"}
                    {callState === "connecting" && "Connecting..."}
                    {callState === "active" && formatTime(callDuration)}
                    {callState === "ended" && "Goodbye!"}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Audio Waveform Animation */}
              <AnimatePresence>
                {callState === "active" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-1 mt-6"
                  >
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 rounded-full ${conversation.isSpeaking ? "bg-accent" : "bg-green-400/70"}`}
                        animate={{
                          height: isMuted 
                            ? 8 
                            : conversation.isSpeaking 
                              ? [8, 32, 16, 40, 12, 36, 8, 28, 8][i % 9]
                              : [8, 14, 10, 16, 8, 14, 8, 12, 8][i % 9],
                        }}
                        transition={{
                          duration: conversation.isSpeaking ? 0.25 : 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.04,
                        }}
                        style={{ height: 8 }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Incoming call ring animation */}
              <AnimatePresence>
                {callState === "incoming" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 mt-6"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-green-400"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Connecting spinner */}
              <AnimatePresence>
                {callState === "connecting" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                  >
                    <motion.div
                      className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Call Controls */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="px-6 pb-12"
      >
        <AnimatePresence mode="wait">
          {callState === "incoming" ? (
            <motion.div
              key="incoming-controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Language Selector */}
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-white/60" />
                <div className="flex bg-white/10 rounded-full p-1">
                  <button
                    onClick={() => setSelectedLanguage("english")}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedLanguage === "english"
                        ? "bg-accent text-white shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setSelectedLanguage("urdu")}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedLanguage === "urdu"
                        ? "bg-accent text-white shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    اردو
                  </button>
                </div>
              </div>

              {/* Call Controls */}
              <div className="flex items-center justify-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleHangUp}
                  className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30 active:shadow-md transition-shadow"
                >
                  <PhoneOff className="w-7 h-7 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePickUp}
                  className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 active:shadow-md transition-shadow"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Phone className="w-7 h-7 text-white" />
                </motion.button>
              </div>
            </motion.div>
          ) : callState === "connecting" ? (
            <motion.div
              key="connecting-controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHangUp}
                className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30"
              >
                <PhoneOff className="w-7 h-7 text-white" />
              </motion.button>
            </motion.div>
          ) : callState === "active" ? (
            <motion.div
              key="active-controls"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center justify-center gap-3"
            >
              {/* Mute Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMute}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isMuted ? "bg-red-500/80" : "bg-white/10"
                }`}
              >
                {isMuted ? (
                  <MicOff className="w-5 h-5 text-white" />
                ) : (
                  <Mic className="w-5 h-5 text-white" />
                )}
              </motion.button>

              {/* Transcript Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTranscript}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  showTranscript ? "bg-accent/80" : "bg-white/10"
                }`}
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </motion.button>

              {/* End Call Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHangUp}
                className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/30"
              >
                <PhoneOff className="w-6 h-6 text-white" />
              </motion.button>

              {/* Speaker Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSpeaker}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isSpeakerOn ? "bg-accent/80" : "bg-white/10"
                }`}
              >
                {isSpeakerOn ? (
                  <Volume2 className="w-5 h-5 text-white" />
                ) : (
                  <VolumeX className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="ended-controls"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-white/60" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
