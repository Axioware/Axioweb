import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Andre Cvijovic",
    role: "CEO",
    company: "Talegacy",
    avatar: "TG",
    content:
      "An excellent experience! The Axioware team delivered exceptional work on time, consistently going above and beyond the basic requirements. The project was seamless from start to finish. Highly professional and absolutely worth the investment. Will definitely be connecting with them again.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aaron Gott",
    role: "CEO",
    company: "AGI Driving Academy ",
    avatar: "AGI",
    content:
      "I can’t recommend Axioware highly enough for their work on my project. 5-stars doesn't really cover it. The milestones always stayed on time and were nearly perfect each time. When revisions were needed, they were handled promptly and without any hassle. The project evolved through many milestones, and the team consistently adapted and delivered on time and on budget. Working with them, and if they offer services you need, your money would be well spent here!",
    rating: 5,
  },
  {
    id: 3,
    name: "Asad Karim",
    role: "Founder",
    company: "VYVA Life",
    avatar: "VYVA",
    content:
      "The automation solutions provided by Axioware transformed our operations. Manual data handling was removed entirely, workflows became faster, and our team could focus on higher-value work. Highly efficient and well-implemented solution.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Manager",
    company: "TorontoChef",
    avatar: "TC",
    content:
      "Axioware built a custom AI voice agent for our restaurant that significantly reduced response time for customer calls and reservations. The system handled peak hours smoothly and helped lower operational costs. The team was professional, responsive, and delivered exactly what we needed",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Operations Manager",
    company: "Twin Clothes",
    avatar: "TC",
    content:
      "Axioware developed an AI-powered customer support voice agent that streamlined our inbound calls and improved customer satisfaction. The assistant handled repetitive queries efficiently, allowing our human agents to focus on complex issues. Excellent execution and communication throughout.",
    rating: 5,
  },
  {
    id: 5,
    name: "Khurram Raza",
    role: "CTO",
    company: "Max Mask",
    avatar: "MM",
    content:
      "Axioware developed an AI-powered customer support voice agent that streamlined our inbound calls and improved customer satisfaction. The assistant handled repetitive queries efficiently, allowing our human agents to focus on complex issues. Excellent execution and communication throughout.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          highlight="Clients"
          subtitle="Don't just take our word for it. Hear from businesses we've helped transform."
          light
        />

        <div className="mt-12 relative pt-6">
          {/* Main Testimonial Card */}
          <div className="max-w-4xl mx-auto overflow-hidden pt-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20">
                  {/* Quote Icon */}
                  <div className="absolute -top-5 left-8 md:left-12">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-accent text-accent"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-2xl text-white leading-relaxed mb-8 font-display">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      <span className="font-display font-bold text-white">
                        {testimonials[currentIndex].avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-white/70">
                        {testimonials[currentIndex].role},{" "}
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-white hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}