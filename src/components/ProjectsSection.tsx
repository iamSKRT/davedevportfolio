import { motion } from "framer-motion";
import { useState } from "react";

import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/ecommerce.jpg";
import project3 from "@/assets/monitoring_system.png";
import project4 from "@/assets/ojtmanagementsystem.png";

// 👉 add extra images for OJT (import more if you have)
import ojt2 from "@/assets/signup.png";
import ojt3 from "@/assets/studentdashboard.png";
import ojt4 from "@/assets/admindashboard.png";

const projects = [
  {
    title: "Coffee Shop Web-Based System",
    description:
      "A complete coffee shop management platform featuring a Online Payment interface, menu management, real-time order tracking,and sales analytics dashboard.",
    images: [project1],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/yourusername/coffee-shop",
    demo: "",
  },
  {
    title: "E-Commerce Platform with Inventory Management System using Barcode Scanner",
    description:
      "A modern online store with product catalog, cart system, and payment integration.",
    images: [project2],
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "PHP", "MYSQL"],
    github: "https://github.com/iamSKRT/Boutique_Shop",
    demo: "vievieboutique.shop",
  },
  {
    title: "Gate Pass Monitoring System Using Facial Recognition",
    description:
      "A smart security system using facial recognition to automate gate pass verification.",
    images: [project3],
    tags: ["Python", "PostgreSQL"],
    github: "",
    demo: "",
  },
  {
    title: "OJT Management System",
    description:
      "The OJT Management System is a Web-based platform designed to efficiently track student tasks, and working hours. It provides a user-friendly interface for students to log their daily reports, export csv and into a printed pdf file.",
    // 👉 MULTIPLE IMAGES HERE
    images: [project4, ojt2, ojt3, ojt4],
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
          {projects.map((project, index) => {
            const [currentImage, setCurrentImage] = useState(0);

            return (
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
                  <div className={`${index % 2 === 1 ? "md:order-2" : ""} relative`}>
                    <img
                      src={project.images[currentImage]}
                      alt={project.title}
                      className="w-full h-full min-h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* 🔵 MINI CIRCLES */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            className={`w-3 h-3 rounded-full transition ${
                              i === currentImage
                                ? "bg-black scale-110"
                                : "bg-white/20 hover:bg-black/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:text-right md:order-1" : ""}`}>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary transition">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

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

                    <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>

                      {/* GitHub */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-400 transition"
                      >
                        Code
                      </a>

                      {/* Demo */}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition"
                      >
                        Live Demo
                      </a>

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* VIEW MORE */}
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