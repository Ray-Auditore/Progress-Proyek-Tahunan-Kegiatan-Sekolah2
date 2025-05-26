// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center bg-white p-6 rounded-2xl shadow-lg">
        <img
          src="/profile.JPG"
          alt="Foto Profil"
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
        />
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">
            Rayyan Ghibran Ananta
          </h1>
          <p className="mt-2 text-gray-600">
            "Halo, saya Rayyan frontend developer yang lebih suka ngebug di
            console daripada ngebug di hati. Pencinta desain bersih, kode rapi,
            dan kopi hitam. Saat tidak ngoding, saya biasanya mikirin layout...
            atau mikirin kenapa margin nggak mau nurut. Lets build something
            awesome (dan responsive) bareng!" "
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
