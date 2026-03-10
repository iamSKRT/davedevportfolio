import { motion } from "framer-motion";
import { Github, Instagram, ArrowDown, Terminal, Code2, Sparkles } from "lucide-react";

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

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-6"
            >
              Hi, I am{" "}
              <br />
              <span className="text-gradient">Christian Dave</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
            >
              Software Developer Intern
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground/70 mb-10 max-w-lg leading-relaxed text-sm"
            >
              Hello! I'm a Software Developer Intern and a graduating student with a strong passion for technology and continuous learning. I enjoy building web-based systems and software applications that solve real-world problems. Through my experience and projects, I have developed skills in web development, problem-solving, and system design. I am always eager to explore new technologies and improve my development skills to create efficient and user-friendly solutions.
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
                href="#projects"
                className="px-8 py-3.5 rounded-xl bg-secondary border border-border text-secondary-foreground font-semibold text-sm hover:border-primary/30 transition-all"
              >
                View Projects
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 border border-border"
              >
                <Github size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 border border-border"
              >
                <Instagram size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right side - code card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-2xl p-6 glow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45, 80%, 50%, 0.6)" }} />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">about.ts</span>
              </div>
              <pre className="text-sm font-mono leading-relaxed">
                <code>
                  <span className="text-primary/70">const</span>{" "}
                  <span className="text-foreground">developer</span>{" "}
                  <span className="text-primary/70">=</span> {"{\n"}
                  {"  "}name: <span className="text-primary">"Christian Dave"</span>,{"\n"}
                  {"  "}role: <span className="text-primary">"Software Dev Intern"</span>,{"\n"}
                  {"  "}skills: [<span className="text-primary">"Vue.js"</span>, <span className="text-primary">"Laravel"</span>,{"\n"}
                  {"          "}<span className="text-primary">"MySQL"</span>, <span className="text-primary">"JavaScript"</span>],{"\n"}
                  {"  "}passion: <span className="text-primary">"Building things"</span>,{"\n"}
                  {"  "}available: <span className="text-primary">true</span>{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
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
