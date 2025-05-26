import React from "react";

const testimonials = [
  {
    name: "Andi",
    rating: 5,
    comment: "Pelayanan sangat memuaskan, profesional dan cepat!",
  },
  {
    name: "Sari",
    rating: 4,
    comment: "Hasil kerja bagus, tapi sedikit lama dalam prosesnya.",
  },
  {
    name: "Budi",
    rating: 5,
    comment: "Rekomendasi banget! Saya pasti pakai lagi.",
  },
];

// Komponen bintang
const Rating = ({ value }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < value ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.037 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Apa Kata Mereka?
      </h2>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <Rating value={item.rating} />
            </div>
            <p className="text-gray-600 text-sm">{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
