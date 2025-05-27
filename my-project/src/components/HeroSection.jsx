import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <motion.section
      id="hero" // 👈 Tambahkan ID untuk navigasi
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div
        className="max-w-4xl w-full flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-lg"
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.img
          src="/profile.JPG"
          alt="Foto Profil"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.div
          className="mt-4 md:mt-0 md:ml-6 text-center md:text-left"
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-bold text-gray-800">
            Rayyan Ghibran Ananta
          </h1>
          <p className="mt-2 text-gray-600">
            "Halo, saya Rayyan frontend developer yang lebih suka ngebug di
            console daripada ngebug di hati. Pencinta desain bersih, kode rapi,
            dan kopi hitam. Saat tidak ngoding, saya biasanya mikirin layout...
            atau mikirin kenapa margin nggak mau nurut. Let's build something
            awesome (dan responsive) bareng!"
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
