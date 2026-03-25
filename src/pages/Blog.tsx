import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  User,
  Calendar,
  BookOpen,
  TrendingUp,
  Brain,
  MessageSquare,
  Mic,
  Search,
  ChevronRight,
  Share2,
  Code,
} from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import { blogPosts, categories as blogCategories } from "@/data/blogArticles";

const categories = [
  { name: "All", icon: BookOpen },
  { name: "Voice Agents & AI Chatbots", icon: Mic },
  { name: "AI & ML", icon: Brain },
  { name: "Web Development", icon: Code },
  { name: "SEO", icon: TrendingUp },
  { name: "Social Media Marketing", icon: Share2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All") return blogPosts.length;
    return blogPosts.filter((post) => post.category === categoryName).length;
  };

  return (
    <Layout>
      <SEO
        title="Blog - AI Insights, Tutorials & Industry News"
        description="Explore the Axioware blog for expert insights on AI, Voice Agents, Chatbots, Machine Learning, Web Development, and SEO. Stay ahead with the latest trends."
        keywords="AI Blog, Voice Agents Articles, Chatbot Tutorials, Machine Learning Insights, Web Development Tips, SEO Guides, Digital Transformation"
        canonical="/blog"
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-20 pb-12 flex items-center justify-center overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              <BookOpen className="w-4 h-4" /> Insights & Resources
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              The Axioware Blog
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed">
              Expert insights on AI, automation, and digital transformation. Stay ahead with the latest trends and best
              practices.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-secondary/30 border-b border-border/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.name
                    ? "bg-accent text-white"
                    : "bg-card border border-border/50 text-muted-foreground hover:border-accent/40 hover:text-foreground"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="text-xs opacity-60">({getCategoryCount(category.name)})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Info */}
      {(searchQuery || activeCategory !== "All") && (
        <section className="py-4 bg-background border-b border-border/30">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span>
                {filteredPosts.length === 1 ? " article" : " articles"}
                {searchQuery && (
                  <span>
                    {" "}
                    for "<span className="text-accent">{searchQuery}</span>"
                  </span>
                )}
                {activeCategory !== "All" && (
                  <span>
                    {" "}
                    in <span className="text-accent">{activeCategory}</span>
                  </span>
                )}
              </p>
              {(searchQuery || activeCategory !== "All") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading
              badge="Featured"
              title="Editor's Picks"
              highlight="Picks"
              subtitle="Our most impactful articles hand-selected by our editorial team."
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-8"
            >
              {featuredPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <motion.article
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />*/}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 rounded-full shadow-md">
                        <post.categoryIcon className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">{post.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <SectionHeading
            badge="Latest"
            title="All Articles"
            highlight="Articles"
            subtitle="Browse our complete collection of insights and guides."
          />

          {regularPosts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {regularPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <motion.article
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />*/}

                      {/* Category */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-accent/90 rounded-full">
                        <post.categoryIcon className="w-3 h-3 text-white" />
                        <span className="text-xs font-medium text-white">{post.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Date */}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>

                      <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="text-sm font-medium text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Clear all filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-accent/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(210_75%_12%/0.4)_100%)]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
            <p className="text-white/80 mb-8">
              Get the latest AI insights, industry trends, and exclusive content delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold">Subscribe</Button>
            </div>
            <p className="text-white/50 text-sm mt-4">Join 5,000+ professionals. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
