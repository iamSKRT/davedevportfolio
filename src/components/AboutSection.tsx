import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "PHP", "Vue.js", "Laravel", "MySQL", "PostgreSQL",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">01.</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm a passionate Software Developer Intern focused on building clean,
              efficient, and user-friendly web applications. I enjoy turning complex
              problems into simple, beautiful solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With experience in both frontend and backend development, I work with
              modern technologies to deliver full-stack web solutions. I'm always eager
              to learn new skills and take on challenging projects.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-mono text-primary mb-6 tracking-widest uppercase">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-secondary-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
