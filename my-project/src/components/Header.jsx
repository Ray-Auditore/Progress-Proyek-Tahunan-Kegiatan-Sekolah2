// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Beranda", to: "hero" },
    { label: "Proyek", to: "projects" },
    { label: "Dashboard", to: "dashboard" },
    { label: "Testimoni", to: "testimonials" },
    { label: "Kontak", to: "footer" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-indigo-600">
          Rayyan<span className="text-gray-800">Dev</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              className="hover:text-indigo-600 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="hover:text-indigo-600 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
