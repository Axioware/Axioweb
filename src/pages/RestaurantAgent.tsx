import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageSquare, Clock, ShieldCheck, CheckCircle, XCircle, Bell, Search, Menu, Users, FileText, TrendingUp, DollarSign, Headphones, Star, PhoneOff, AlertTriangle, Zap, Shield, BarChart3, Loader2, Mic } from "lucide-react";
import { useConversation } from "@elevenlabs/react";

const CHEFIE_AGENT_ID = import.meta.env.VITE_AGENT_ENGLISH;

const problems = [{
  icon: PhoneOff,
  title: "Missed Calls = Lost Revenue",
  description: "During peak hours, staff can't answer every call. Each missed call is a potential $30-50 order walking away to your competition.",
  color: "text-red-500"
}, {
  icon: Clock,
  title: "Long Hold Times",
  description: "Customers hate waiting. 75% of callers hang up after 1 minute on hold, never to call back again.",
  color: "text-orange-500"
}, {
  icon: AlertTriangle,
  title: "Inconsistent Order Taking",
  description: "Human errors lead to wrong orders, forgotten items, and unhappy customers demanding refunds.",
  color: "text-amber-500"
}, {
  icon: DollarSign,
  title: "High Labor Costs",
  description: "Hiring dedicated phone staff is expensive. Training, turnover, and scheduling add hidden costs that eat into margins.",
  color: "text-rose-500"
}];

const benefits = [{
  icon: TrendingUp,
  title: "Never Miss an Order",
  description: "24/7 availability means capturing every order, even at 2 AM or during the lunch rush. No more lost revenue.",
  color: "text-emerald-500"
}, {
  icon: Zap,
  title: "Instant Response",
  description: "No hold times ever. Customers start ordering immediately, dramatically improving satisfaction and conversion.",
  color: "text-yellow-500"
}, {
  icon: CheckCircle,
  title: "Accurate Every Time",
  description: "AI doesn't get tired, distracted, or have a bad day. Every order is captured correctly with verbal confirmation.",
  color: "text-green-500"
}, {
  icon: DollarSign,
  title: "Reduce Costs Significantly",
  description: "Replace expensive phone staff while handling 3x more calls during peak hours. ROI in under 30 days.",
  color: "text-teal-500"
}];

const features = [{
  icon: Phone,
  title: "Place Orders",
  desc: "Natural conversation captures name, phone, delivery/pickup preference, items with quantities, and special instructions",
  color: "text-blue-500"
}, {
  icon: XCircle,
  title: "Cancel Orders",
  desc: "Allows order cancellation within 15 minutes, validates customer via phone number and order ID",
  color: "text-red-500"
}, {
  icon: MessageSquare,
  title: "SMS Confirmations",
  desc: "Automatic SMS with order ID, order summary, estimated ready time, and support contact info",
  color: "text-purple-500"
}, {
  icon: Bell,
  title: "Order Modifications",
  desc: "Customers can add or remove items within 15 minutes of placing their order",
  color: "text-amber-500"
}, {
  icon: Search,
  title: "Status Inquiry",
  desc: "Real-time order tracking - answers 'Where is my order?' instantly with accurate status",
  color: "text-cyan-500"
}, {
  icon: Menu,
  title: "Menu & Availability",
  desc: "Full menu knowledge with item availability, daily specials, and ingredient information",
  color: "text-orange-500"
}, {
  icon: Users,
  title: "Human Escalation",
  desc: "Seamless transfer to staff for complex situations, allergies, or special requests",
  color: "text-indigo-500"
}, {
  icon: Shield,
  title: "Fraud Protection",
  desc: "Smart limits on repeat orders and flags suspicious cancellation patterns",
  color: "text-emerald-500"
}, {
  icon: FileText,
  title: "Complete Audit Trail",
  desc: "Full call transcripts, order change history, and SMS delivery confirmations",
  color: "text-pink-500"
}];

const testimonials = [{
  quote: "We were losing 20+ orders every weekend night to missed calls. Now we capture every single one. Revenue is up 35% on weekends.",
  author: "Maria Garcia",
  role: "Owner, Taco Loco",
  rating: 5
}, {
  quote: "The accuracy is incredible. We went from 15% order errors to less than 1%. Customer complaints dropped dramatically.",
  author: "James Chen",
  role: "GM, Golden Dragon",
  rating: 5
}, {
  quote: "Paid for itself in the first week. My staff can focus on food prep instead of being tied to the phone during rush hour.",
  author: "Anthony Romano",
  role: "Owner, Romano's Pizzeria",
  rating: 5
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function RestaurantAgent() {
  const [isConnecting, setIsConnecting] = useState(false);
  
  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to Chefie");
      setIsConnecting(false);
    },
    onDisconnect: () => {
      console.log("Disconnected from Chefie");
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error("Chefie error:", error);
      setIsConnecting(false);
    },
  });

  const isActive = conversation.status === "connected";

  const handleCall = useCallback(async () => {
    if (isActive) {
      await conversation.endSession();
    } else {
      setIsConnecting(true);
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (conversation.startSession as any)({
          agentId: CHEFIE_AGENT_ID,
        });
      } catch (error) {
        console.error("Failed to start call:", error);
        setIsConnecting(false);
      }
    }
  }, [isActive, conversation]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20"
            >
              <span className="text-2xl">👨‍🍳</span>
              <span>Meet Chefie</span>
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white leading-tight">
              <span className="text-accent">Chefie</span> Your AI
              <br />
              Restaurant Assistant
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-4 leading-relaxed max-w-2xl mx-auto">
              The friendly voice that never sleeps. Chefie takes orders, answers questions, and keeps your customers happy — all while you focus on cooking amazing food.
            </p>
            <p className="text-sm text-white/60 mb-10">
              Available 24/7 for your restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/30">
                <a href="#demo" className="group">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Chefie
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact" className="group">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 text-destructive text-sm font-medium rounded-full mb-4">
              The Problem
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Phone Orders Are Costing You Money
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every restaurant faces these challenges. The question is: how much revenue are you losing?
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-destructive/20 hover:border-destructive/40 hover:shadow-xl hover:shadow-destructive/10 transition-all duration-300 h-full flex flex-col"
              >
                <problem.icon className={`w-10 h-10 ${problem.color} mb-4 flex-shrink-0`} />
                <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
                <p className="text-sm text-muted-foreground flex-grow">{problem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution/Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              The Chefie Difference
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Restaurants Love Chefie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chefie handles phone orders with superhuman accuracy and a friendly personality that customers love.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/50">
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/50 text-white text-sm font-medium rounded-full mb-4">
              <BarChart3 className="w-4 h-4" />
              Full Feature Set
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Chefie Can Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chefie is purpose-built for restaurants with features that actually matter.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="p-3 rounded-xl bg-secondary/50 w-fit mb-4 group-hover:bg-secondary transition-colors flex-shrink-0">
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground flex-grow">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 text-center shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isActive ? "active" : "idle"}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-5xl relative"
                  style={{ background: isActive ? "rgba(var(--accent), 0.2)" : "rgba(var(--accent), 0.1)" }}
                >
                  {isActive && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                      {conversation.isSpeaking && (
                        <motion.div
                          className="absolute inset-[-8px] rounded-full border-2 border-accent/40"
                          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                      )}
                    </>
                  )}
                  {isActive ? (
                    <motion.div
                      animate={conversation.isSpeaking ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.4, repeat: Infinity }}
                    >
                      <Mic className="w-12 h-12 text-accent" />
                    </motion.div>
                  ) : (
                    "👨‍🍳"
                  )}
                </motion.div>
              </AnimatePresence>
              
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {isActive ? (conversation.isSpeaking ? "Chefie is speaking..." : "Listening...") : "Live Demo"}
              </span>
              
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Talk to Chefie
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {isActive 
                  ? "You're now connected! Speak naturally and Chefie will assist you with your order."
                  : "\"Hey there! I'm Chefie, your friendly AI assistant. Try placing an order, ask about today's specials, or check on an existing order. I'm here to help!\""
                }
              </p>

              <Button 
                size="lg" 
                onClick={handleCall}
                disabled={isConnecting}
                className={isActive 
                  ? "bg-red-500 hover:bg-red-600 text-white mb-6" 
                  : "bg-accent hover:bg-accent/90 text-white mb-6"
                }
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : isActive ? (
                  <>
                    <PhoneOff className="w-5 h-5 mr-2" />
                    End Call
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Chefie Now
                  </>
                )}
              </Button>

              {/* Audio waveform when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 rounded-full ${conversation.isSpeaking ? "bg-accent" : "bg-green-500"}`}
                          animate={{
                            height: conversation.isSpeaking 
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
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <p className="text-sm text-muted-foreground mb-8">
                No sign-up required. Demo uses sample menu data.
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Try saying to Chefie:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Hey Chefie, I'd like to order a pizza", "What are today's specials?", "Can I cancel my order?", "How long until my order is ready?"].map((phrase, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground border border-border/50">
                      "{phrase}"
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              <Star className="w-4 h-4" />
              Chefie Success Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Restaurant Owners Love Chefie
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-card p-6 rounded-xl border border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Let Chefie Handle Your Calls?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of restaurants that trust Chefie with their phone orders. More revenue, happier customers, less stress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact" className="group">
                  Get Chefie for Your Restaurant
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Talk to Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
