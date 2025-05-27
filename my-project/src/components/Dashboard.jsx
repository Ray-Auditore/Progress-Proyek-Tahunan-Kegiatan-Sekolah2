import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Taekwondo",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 75,
    deadline: "2025-06-30",
    ket:'bisa memanah 2M, bisa main 2jam'
  },
  {
    name: "Memanah",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 60,
    deadline: "2025-07-15",
        ket:'bisa memanah 2M, bisa main 2jam'

  },
  {
    name: "Renang",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 60,
    deadline: "2025-06-20",
  },
  {
    name: "Tajwid",
    category: "Mapel",
    type: "Presentasi",
    progress: 80,
    deadline: "2025-06-10",
  },
  {
    name: "IT",
    category: "Mapel",
    type: "Proyek IT",
    progress: 90,
    deadline: "2025-06-25",
  },
  {
    name: "Ilmu alat",
    category: "Balaghoh",
    type: "Kajian Kitab",
    progress: 65,
    deadline: "2025-06-28",
  },
  {
    name: "Ilmu Syari'",
    category: "Ilmu Waris",
    type: "Diskusi Kelompok",
    progress: 70,
    deadline: "2025-06-22",
  },
];

// Variants Framer Motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Dashboard = () => {
  return (
    <motion.section
      id="dashboard" // <- SECTION ID DITAMBAHKAN DI SINI
      className="p-4 md:p-6 bg-gray-100 min-h-screen"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center"
        variants={item}
      >
        Dashboard Proyek Tahunan
      </motion.h1>

      <motion.p
        className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto"
        variants={item}
      >
        Berikut adalah beberapa proyek yang telah saya kerjakan selama tahun ajaran ini.
        Saya telah mempelajari berbagai hal dari kegiatan ekstrakurikuler seperti Taekwondo,
        Memanah, dan Renang, hingga mata pelajaran seperti IT, Tajwid, Ilmu Alat seperti Nahwu
        & Shorof, serta Ilmu Syari' seperti Fiqih. Semua ini membantu saya berkembang secara
        fisik, intelektual, dan spiritual.
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        variants={container}
      >
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between"
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="mb-3 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">{proj.name}</h2>
              <p className="text-sm text-gray-600">
                {proj.category} &bull; {proj.type}
              </p>
              <p>
                {proj.ket}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Estimasi selesai: {proj.deadline}
              </p>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-5 rounded-full transition-all duration-500"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
                <span className="w-12 text-right font-medium text-gray-700">
                  {proj.progress}%
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Dashboard;
