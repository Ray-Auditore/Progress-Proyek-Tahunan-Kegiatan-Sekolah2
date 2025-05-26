
import React from "react";

const projects = [
  {
    title: "Aplikasi To-Do List",
    description: "Aplikasi simpel untuk mencatat tugas harian. Dibuat dengan React dan Tailwind.",
    link: "#",
  },
  {
    title: "Website Portfolio",
    description: "Website pribadi yang menampilkan profil dan proyek. Clean UI dan responsif.",
    link: "#",
  },
  {
    title: "Game Tebak Angka",
    description: "Game sederhana menggunakan JavaScript untuk latihan logika dasar.",
    link: "#",
  },
];

const ProjectSection = () => {
  return (
    <section className="py-12 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Proyek Saya</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-indigo-600 hover:underline"
            >
              Lihat Proyek →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
