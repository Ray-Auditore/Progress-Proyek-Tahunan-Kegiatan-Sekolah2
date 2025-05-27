// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gray-100 text-center py-6 mt-12 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Rayyan Ghibran Ananta. Dibuat dengan React, Tailwind, dan banyak debugging 🐞
        </p>

        {/* Navigasi internal tambahan */}
        <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#hero" className="text-indigo-600 hover:underline">
            Beranda
          </a>
          <a href="#projects" className="text-indigo-600 hover:underline">
            Proyek
          </a>
          <a href="#testimonials" className="text-indigo-600 hover:underline">
            Testimoni
          </a>
          <a href="#dashboard" className="text-indigo-600 hover:underline">
            Dashboard
          </a>
        </div>

        {/* Link eksternal */}
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="https://github.com/Ray-Auditore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:gibranrayyan214@gmail.com"
            className="text-indigo-600 hover:underline text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
