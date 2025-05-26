import React from "react";

const projects = [
  {
    name: "Taekwondo",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 75,
    deadline: "2025-06-30",
  },
  {
    name: "Memanah",
    category: "Ekstrakurikuler",
    type: "Eskul",
    progress: 60,
    deadline: "2025-07-15",
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
];

const Dashboard = () => {
  return (
    <section className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Dashboard Proyek Tahunan
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="mb-3 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">{proj.name}</h2>
              <p className="text-sm text-gray-600">
                {proj.category} &bull; {proj.type}
              </p>
              <p className="text-sm text-gray-500 mt-1">Estimasi selesai: {proj.deadline}</p>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-5 rounded-full transition-all duration-500"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
                <span className="w-12 text-right font-medium text-gray-700">{proj.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
