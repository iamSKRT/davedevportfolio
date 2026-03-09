import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    title: "Coffee Shop Web-Based System",
    description:
      "A complete coffee shop management platform featuring a point-of-sale interface, menu management, real-time order tracking, sales analytics dashboard, and inventory monitoring for ingredients and supplies.",
    image: project1,
    tags: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern online store with product catalog, cart system, and payment integration. Features responsive design and admin panel.",
    image: project2,
    tags: ["PHP", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Gate Pass Monitoring System",
    description:
      "A smart security system using facial recognition to automate gate pass verification. Features real-time face detection, visitor logging, access control, and comprehensive analytics dashboard.",
    image: project3,
    tags: ["Laravel", "Vue.js", "MySQL", "OpenCV"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">02.</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden rounded-xl border border-border glow">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
