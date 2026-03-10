import { motion } from "framer-motion";
import customerSupportCert from "@/assets/customer_support.png";
import aiLiteracyCert from "@/assets/ai_literacy.png";

const skills = [
  "HTML", "CSS", "JavaScript", "PHP", "Vue.js", "Laravel", "MySQL", "PostgreSQL",
];

const certificates = [
  {
    title: "IT Customer Support Basics",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    image: customerSupportCert,
  },
  {
    title: "AI For Industry® — Literacy in AI",
    issuer: "AI Singapore",
    date: "February 2026",
    image: aiLiteracyCert,
  },
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
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">02.</p>
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

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-sm font-mono text-primary mb-8 tracking-widest uppercase">
            Certificates & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border bg-secondary/30 overflow-hidden backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
