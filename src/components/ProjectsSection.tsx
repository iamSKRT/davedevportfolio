import { motion } from "framer-motion";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/ecommerce.jpg";
import project3 from "@/assets/monitoring_system.png";
import project4 from "@/assets/ojtmanagementsystem.png";

const projects = [
  {
    title: "Coffee Shop Web-Based System",
    description:
      "A complete coffee shop management platform featuring a Online Payment interface, menu management, real-time order tracking,and sales analytics dashboard.",
    image: project1,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yourusername/coffee-shop",
    demo: "",
  },
  {
    title: "E-Commerce Platform with Inventory Management System using Barcode Scanner",
    description:
      "A modern online store with product catalog, cart system, and payment integration.",
    image: project2,
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "PHP", "MYSQL"],
    github: "https://github.com/iamSKRT/Boutique_Shop",
    demo: "vievieboutique.shop",
  },
  {
    title: "Gate Pass Monitoring System Using Facial Recognition",
    description:
      "A smart security system using facial recognition to automate gate pass verification.",
    image: project3,
    tags: ["Python", "PostgreSQL"],
    github: "",
    demo: "",
  },
  {
    title: "OJT Magement System",
    description: "The OJT Management System is a digital platform designed to efficiently track student training  activities, tasks, and working hours. It allows students to log their daily accomplishments and instantly export them into a ready-to-print PDF report.  The system automatically calculates weekly totals, overall completed hours, and remaining required hours, ensuring accurate and hassle-free monitoring. It also features an admin dashboard where supervisors can assign required hours, monitor student progress, and review submitted tasks. This system simplifies OJT management by reducing manual work, improving accuracy, and providing a more organized and reliable training experience.",
    image: project4, 
    tags: ["TypeScript", "Vue.js", "Supabase"],
    github: "",
    demo: "https://ojtmanagementsystem-one.vercel.app/",
  },
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#070F1A]">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">01.</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 bg-[#0B1220] rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition">

                {/* IMAGE */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full min-h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* CONTENT */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:text-right md:order-1" : ""}`}>
                  
                  {/* TITLE */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border border-primary text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>

                  {/* CODE BUTTON (GitHub) */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-400 transition border border-white/10"
                  >
                    {/* GitHub Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                      0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
                      -1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
                      3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                      0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 
                      3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 
                      2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 
                      1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 
                      2.222 0 1.606-.015 2.898-.015 3.293 0 .321.216.694.825.576C20.565 
                      21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>

                    Code
                  </a>

                  {/* LIVE DEMO BUTTON */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-md"
                  >
                    {/* External Link Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v11h11" />
                    </svg>

                    Live Demo
                  </a>

                </div>


                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/projects"
            className="px-8 py-3 rounded-lg border border-primary text-primary font-mono text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
          >
            View More Projects →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
