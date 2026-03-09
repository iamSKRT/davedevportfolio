import { motion } from "framer-motion";
import { Github, Instagram, ArrowDown, Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-primary font-mono text-xs tracking-widest">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
          >
            Hi, I am{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">Christian Dave</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-light max-w-xl"
          >
            Software Developer Intern
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground/70 mb-10 max-w-lg leading-relaxed"
          >
            Building clean, scalable web applications with modern technologies.
            Passionate about turning ideas into elegant digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 border border-border"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 border border-border"
            >
              <Instagram size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
