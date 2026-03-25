import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO, { generateArticleSchema, generateBreadcrumbSchema } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getPostById, getRelatedPosts } from "@/data/blogArticles";
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  User, 
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  ChevronRight,
  BookOpen,
  Quote
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  const post = id ? getPostById(id) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);
  const shareUrl = `https://axioware.com/blog/${post.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.id}`,
        image: post.image,
        publishedTime: new Date(post.date).toISOString(),
        author: post.author,
      }),
      generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: post.title, url: `/blog/${post.id}` },
      ]),
    ]
  };

  return (
    <Layout>
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonical={`/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        structuredData={combinedSchema}
        article={{
          publishedTime: new Date(post.date).toISOString(),
          author: post.author,
          section: post.category,
          tags: post.tags,
        }}
      />

      {/* Hero Section with Featured Image */}
      <section className="relative pt-24 pb-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/50 to-background" />
        
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground/70 truncate max-w-[200px]">{post.title}</span>
          </motion.nav>

          <div className="max-w-4xl mx-auto text-center">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full border border-accent/20">
                <post.categoryIcon className="w-4 h-4" />
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-[1.2]"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {post.excerpt}
            </motion.p>

            {/* Author & Meta Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-10"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>

              <Separator orientation="vertical" className="h-10 hidden sm:block" />

              {/* Date & Read Time */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="article-content"
              >
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-6 pb-3 border-b border-border/50">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="font-display text-lg font-semibold text-foreground mt-8 mb-3">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-[1.8] mb-6 text-base sm:text-lg">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-none space-y-3 mb-6 pl-0">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-outside space-y-3 mb-6 pl-6 marker:text-accent marker:font-semibold">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-muted-foreground leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:font-bold">
                        {children}
                      </li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="relative my-8 pl-6 pr-4 py-4 bg-secondary/50 border-l-4 border-accent rounded-r-xl">
                        <Quote className="absolute -top-3 -left-3 w-8 h-8 text-accent/30" />
                        <div className="text-foreground/90 italic text-lg leading-relaxed">
                          {children}
                        </div>
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <a 
                        href={href} 
                        className="text-accent font-medium underline underline-offset-4 hover:text-accent/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="bg-secondary px-2 py-1 rounded text-sm font-mono text-accent">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-secondary border border-border/50 rounded-xl p-4 overflow-x-auto mb-6 text-sm">
                        {children}
                      </pre>
                    ),
                    hr: () => (
                      <hr className="my-10 border-border/50" />
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>

                {/* Article Footer */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="text-sm font-medium text-foreground mr-2">Tags:</span>
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 text-muted-foreground rounded-full transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Share Row - Mobile */}
                  <div className="lg:hidden">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground">Share:</span>
                      <div className="flex gap-2">
                        <button
                          onClick={shareOnTwitter}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button
                          onClick={shareOnLinkedIn}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button
                          onClick={shareOnFacebook}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleCopyLink}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300"
                          aria-label="Copy link"
                        >
                          <LinkIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="sticky top-28 space-y-6">
                  {/* Author Card */}
                  <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{post.author}</h4>
                        <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Expert insights on {post.category.toLowerCase()} and digital transformation.
                    </p>
                  </div>

                  {/* Share Card */}
                  <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-accent" />
                      Share Article
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={shareOnTwitter}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-secondary hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </button>
                      <button
                        onClick={shareOnLinkedIn}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-secondary hover:bg-[#0A66C2] hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </button>
                      <button
                        onClick={shareOnFacebook}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-secondary hover:bg-[#1877F2] hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </button>
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-secondary hover:bg-accent hover:text-white transition-all duration-300 text-sm font-medium"
                      >
                        <LinkIcon className="w-4 h-4" />
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Newsletter CTA */}
                  <div className="p-6 bg-gradient-to-br from-primary to-accent rounded-2xl text-white">
                    <BookOpen className="w-8 h-8 mb-3 opacity-80" />
                    <h4 className="font-semibold mb-2">Stay Updated</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Get the latest insights delivered to your inbox.
                    </p>
                    <Button 
                      asChild 
                      variant="secondary" 
                      size="sm" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                    >
                      <Link to="/blog#newsletter">Subscribe</Link>
                    </Button>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Related Articles
                </h2>
                <Button asChild variant="ghost" className="hidden sm:flex">
                  <Link to="/blog" className="group">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${relatedPost.id}`} className="block">
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/90 text-white text-xs font-medium rounded-full">
                            <relatedPost.categoryIcon className="w-3 h-3" />
                            {relatedPost.category.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {relatedPost.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {relatedPost.date}
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-12 bg-background border-t border-border/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog" className="group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contact" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
