import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaVuejs, FaReact } from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";

import image_part_002 from "@/assets/grid-piece-1-1.png";
import image_part_003 from "@/assets/grid-piece-1-2.png";
import image_part_005 from "@/assets/grid-piece-2-1.png";
import image_part_008 from "@/assets/grid-piece-2-2.png";
import companyLogo from "@/assets/pisopay.png"; // Current internship logo
import companyLogo1 from "@/assets/sampleLogo.jpg"; 
import companyLogo2 from "@/assets/sampleLogo.jpg"; 
import companyLogo3 from "@/assets/sampleLogo.jpg"; 

// Tech stack
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

// Framer Motion variants for tech stack animations
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

// Timeline item component
const TimelineItem = ({ logo, position, company, date, description, highlight = false }) => (
  <div className="relative flex items-start gap-4 pl-8">
    {/* Timeline circle */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="absolute left-0 top-2 w-2 h-3 bg-red-500 rounded-full"
    />
    <img
      src={logo}
      alt={`${company} Logo`}
      className="w-11 h-12 object-cover rounded-md"
    />
    <div className="flex flex-col">
      <h4 className="font-semibold text-foreground">{company}</h4>
      <p className={highlight ? "text-gray-400 mt-1" : "mt-1"}>{position}</p>
      <p className="text-muted-foreground text-sm">{date}</p>
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    </div>
  </div>
);

// Timeline container with animated path
const Timeline = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative flex flex-col space-y-12">
      {/* Animated vertical line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1 w-0.5 bg-green-500 top-0"
      />
      {children}
    </div>
  );
};

const AboutSection = () => {
  const [previewOpen, setPreviewOpen] = useState(false);

  const images = [
    image_part_002,
    image_part_003,
    image_part_005,
    image_part_008,
  ];

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

        {/* MAIN GRID - 3 COLUMNS */}
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* LEFT IMAGE GRID */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-[3px] max-w-[380px] rounded-lg overflow-hidden cursor-pointer md:col-span-1"
            onClick={() => setPreviewOpen(true)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={img}
                  alt={`About Me ${index + 1}`}
                  className="w-full h-[220px] md:h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>

          {/* MIDDLE COLUMN - About + Tech Stack */}
          <motion.div
            className="flex flex-col space-y-6 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* ABOUT TEXT */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am Currently a <span className="font-semibold text-foreground">Software Developer Intern </span>
                dedicated to building clean, efficient, and user-friendly web applications.
                I am a graduating students pursuing a degree in
                <span className="font-semibold text-foreground"> Bachelor of Science in Information Technology </span>
                at
                <span className="font-semibold text-foreground"> Our Lady of Fatima University (Antipolo Campus)</span>,
                where I continuously expand my knowledge and technical skills.
              </p>
              <p>
                Passionate about learning new programming languages and exploring emerging
                technologies, I enjoy creating modern web experiences and applying innovative
                solutions to real-world problems. My goal is to develop meaningful software
                while growing as a versatile and creative developer.
              </p>
            </div>

            {/* TECH STACK */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-primary tracking-widest uppercase">
                Tech Stack
              </h3>

              {/* FRONTEND */}
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

              {/* BACKEND */}
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
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Timeline */}
          <motion.div
            className="hidden md:flex flex-col space-y-12 md:col-span-1 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
              Work Experience
            </h3>

                      <Timeline>
                        <TimelineItem
                          logo={companyLogo}
                          position="Software Developer Intern"
                          company="Pisopay.com Inc."
                          date="Feb 2026 - Present"
                          description="Gaining hands-on experience in developing and maintaining web applications, 
                          collaborating with the development team, adapting and learning new programming languages, 
                          software tools, and databases while following best practices in software development."
                          highlight={true}
                        />  
                          <TimelineItem
                          logo={companyLogo1}
                          position="Future Role 1"
                          company="Company Name"
                          date="TBD"
                          description="Description of the work experience."
                        />
                        <TimelineItem
                          logo={companyLogo2}
                          position="Future Role 2"
                          company="Company Name"
                          date="TBD"
                          description="Description of the work experience."
                        />
                        <TimelineItem
                          logo={companyLogo3}
                          position="Future Role 3"
                          company="Company Name"
                          date="TBD"
                          description="Description of the work experience."
                        /> 
              </Timeline>
            </motion.div>

        </div>
      </div>
      {/* IMAGE PREVIEW MODAL */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setPreviewOpen(false)}
        >
          <div className="grid grid-cols-2 gap-1 max-w-[600px]">
            <img src={image_part_002} className="w-full" />
            <img src={image_part_003} className="w-full" />
            <img src={image_part_005} className="w-full" />
            <img src={image_part_008} className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
