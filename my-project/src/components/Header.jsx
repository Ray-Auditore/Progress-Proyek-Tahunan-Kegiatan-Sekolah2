// src/components/Header.jsx
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo atau Nama */}
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600">
          Rayyan<span className="text-gray-800">Dev</span>
        </h1>

        {/* Navigasi */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Beranda
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Proyek
          </Link>
          <Link
            to="dashboard"
            smooth={true}
            duration={500}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Dashboard
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Testimoni
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="hover:text-indigo-600 cursor-pointer"
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
