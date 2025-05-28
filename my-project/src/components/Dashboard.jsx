import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Taekwondo",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 75,
    deadline: "2025-06-30",
    ket: "Bisa geebon 1 dan 2",
  },
  {
    name: "Memanah",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 60,
    deadline: "2025-07-15",
    ket: "Bisa memanah 2M, bisa main 2 jam",
  },
  {
    name: "Renang",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 60,
    deadline: "2025-06-20",
    ket: "Bisa gaya katak dan bebas",
  },
  {
    name: "Tajwid",
    category: "Mapel",
    type: "Presentasi",
    progress: 80,
    deadline: "2025-06-10",
    ket: "Menyampaikan tajwid, mempelajari sifat dan makhraj huruf",
  },
  {
    name: "IT",
    category: "Mapel",
    type: "Proyek IT",
    progress: 90,
    deadline: "2025-06-25",
    ket: "Menguasai HTML, CSS (vanilla/tailwind), JS, React, UI/UX, Responsive Design",
  },
  {
    name: "Ilmu alat",
    category: "Balaghoh",
    type: "Kajian Kitab",
    progress: 65,
    deadline: "2025-06-28",
    ket: "Mempelajari ilmu nahwu dan shorof",
  },
  {
    name: "Ilmu Syari'",
    category: "Ilmu Waris",
    type: "Diskusi Kelompok",
    progress: 70,
    deadline: "2025-06-22",
    ket: "Menguasai fiqih dan aqidah dasar, mempelajari warisan",
  },
];

// Motion Variants
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
      id="dashboard"
      className="p-4 md:p-8 bg-gray-100 min-h-screen"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-gray-800 mb-4"
        variants={item}
      >
        Dashboard Proyek Tahunan
      </motion.h1>

      <motion.p
        className="text-center text-sm text-gray-600 mb-10 max-w-3xl mx-auto"
        variants={item}
      >
        Proyek ini mencerminkan perjalanan pembelajaran saya sepanjang tahun,
        dari kegiatan fisik seperti Taekwondo & Memanah hingga proyek IT dan
        kajian ilmu keislaman. Setiap aktivitas membantu membentuk karakter dan
        keahlian saya.
      </motion.p>

      <motion.div className="max-w-5xl mx-auto space-y-6" variants={container}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            variants={item}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Info */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{proj.name}</h2>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
                    {proj.category}
                  </span>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {proj.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    Estimasi: {proj.deadline}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{proj.ket}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${proj.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {proj.progress}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Dashboard;
