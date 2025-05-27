import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Website BMI Calculator",
    description:
      "Selamat datang di BMI Calculator, tempat di mana angka-angka menentukan nasib perutmu!",
    link: "https://quiet-hummingbird-e0eda8.netlify.app/",
  },
  {
    title: "Website Wisata Pantai Drini",
    description:
      "Website wisata pantai Drini yang menampilkan informasi wisata dan fasilitas. Clean UI dan responsif.",
    link: "https://candid-chaja-fd3cf8.netlify.app/",
  },
  {
    title: "Ecommerce Website",
    description:
      "",
    link: "https://project-rayyan.vercel.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectSection = () => {
  return (
    <motion.section
      id="projects" // 👈 Tambahkan ID untuk navigasi
      className="py-12 bg-white px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        variants={item}
      >
        Proyek Saya
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        variants={container}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-600 hover:underline font-medium"
            >
              Lihat Proyek →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectSection;
