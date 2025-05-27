import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ustd Fulan",
    rating: 5,
    comment:
      "Mantap Gokil Santri satu ini beda dari yang lain! Hafalan lancar, tapi jokes-nya lebih lancar lagi. Bisa ngajarin teman sambil ngelawak, suasana jadi adem dan seru.Allhamdullilah",
  },
  {
    name: "King Enong",
    rating: 5,
    comment:
      "Dia tuh tipe santri yang abis ngaji langsung nyapu masjid, terus ngajak teman main voli sambil bahas tafsir. Antara pencerah dan penghibur! Tergokilll Allhamdullilah",
  },
  {
    name: "Somay Racing",
    rating: 5,
    comment:
      "Gokil, tapi gak pernah telat tahajud. Selalu punya ide kreatif buat acara pondok, dari drama Islami sampai stand-up yang syar’i. Teladan banget! Allhamdullilah",
  },
];

const Rating = ({ value }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < value ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.037 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
      </svg>
    ))}
  </div>
);

// Framer Motion Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-800 mb-8"
        variants={item}
      >
        Apa Kata Mereka?
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition-all"
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <Rating value={item.rating} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.comment}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
