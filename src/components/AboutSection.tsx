import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaVuejs, FaReact } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";
import image_part_002 from "@/assets/grid-piece-1-1.png";
import image_part_003 from "@/assets/grid-piece-1-2.png";
import image_part_005 from "@/assets/grid-piece-2-1.png";
import image_part_008 from "@/assets/grid-piece-2-2.png";
import React, { useState } from "react";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
];

const backendSkills = [
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
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
  const [previewOpen, setPreviewOpen] = useState(false);
  const images = [image_part_002, image_part_003, image_part_005, image_part_008];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">

        {/* Header */}
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

        <div className="grid md:grid-cols-2 gap-5 items-start">

          {/* Left Image Grid */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-[2px] max-w-[380px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setPreviewOpen(true)}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt={`About Me ${index + 1}`}
                  className="w-full h-[240px] md:h-[280px] object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-muted-foreground leading-relaxed text-lg">
           I am a Software Developer Intern dedicated to building clean, efficient, and user-friendly web applications. 
           I am pursuing a Bachelor of Science in Information Technology at Our Lady of Fatima University (Antipolo Campus),
           where I continuously expand my knowledge and skills. Passionate about learning new programming languages and exploring
           emerging technologies, I strive to apply innovative solutions to real-world problems. My goal is to create meaningful 
           software experiences while growing as a versatile and creative developer.
            </p>

            <h3 className="text-sm font-mono text-primary tracking-widest uppercase">
              Tech Stack
            </h3>

            {/* FRONTEND BOX */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-border bg-secondary/20"
            >
              <h4 className="text-primary font-semibold mb-3">Frontend</h4>

              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary border border-border text-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* BACKEND BOX */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-border bg-secondary/20"
            >
              <h4 className="text-primary font-semibold mb-3">Backend</h4>

              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary border border-border text-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Image Preview */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setPreviewOpen(false)}
        >
          <div className="max-w-[90%] max-h-[90%] overflow-hidden">
            <img
              src={image_part_002}
              alt="Full Preview"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
