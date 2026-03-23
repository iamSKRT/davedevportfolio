import { motion, Variants } from "framer-motion";
import { Github, Instagram, Linkedin, ArrowDown } from "lucide-react";

const roleText = "Software Developer Intern";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] sm:opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto lg:max-w-none">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-6 sm:mb-8"
          >
            Hi, I am <br />
            <span className="text-gradient">Christian Dave</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col justify-center flex-1"
            >
              {/* Animated Role */}
              <motion.p
                variants={container}
                initial="hidden"
                animate="show"
                className="text-lg sm:text-xl md:text-2xl mb-4 font-light
                  bg-gradient-to-r from-green-300 via-gray-400 to-green-600
                  bg-clip-text text-transparent"
              >
                {roleText.split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>

              <p className="text-muted-foreground/100 mb-6 sm:mb-10 leading-relaxed text-sm sm:text-base">
                Hello! I am a Software Developer Intern and a graduating student with a strong passion for emerging technologies.
                I specialize in creating web-based systems and software applications that deliver practical solutions 
                to real-world challenges, combining creativity with efficient, user-focused design. Behind every error solved, 
                there’s a cup of coffee.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity glow"
                >
                  Get In Touch
                </a>

                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-xl bg-secondary border border-border text-secondary-foreground font-semibold text-sm sm:text-base hover:border-primary/30 transition-all"
                >
                  View Projects
                </a>

                <a
                  href="https://github.com/iamSKRT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 border border-border"
                >
                  <Github size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/christian-dave-alvarez-0750933a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] transition-all duration-300 border border-border"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://www.instagram.com/iam_chrstndv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-[#E4405F] transition-all duration-300 border border-border"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>

            {/* Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center w-full md:w-auto"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 glow w-full md:w-auto overflow-x-auto">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-red-400" />
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-green-400" />
                  <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-muted-foreground font-mono">
                    about.ts
                  </span>
                </div>

                <pre className="text-xs sm:text-base md:text-lg font-mono leading-relaxed">
                {`const developer = {
                  name: "Christian Dave",
                  role: "Software Dev Intern",
                  skills: ["Vue.js", "JavaScript", "Laravel", "MySQL"],
                  passion: "Building things",
                  available: true
                  };`}
                </pre>
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
