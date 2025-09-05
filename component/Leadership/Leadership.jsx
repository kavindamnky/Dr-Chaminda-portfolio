import React from "react";

const LeadershipManagement = () => {
  const practices = [
    {
      text: "Supervised and evaluated clinical teams, ensuring professional development and performance improvement.",
      highlighted: false,
    },
    {
      text: "Coordinated patient services, enhancing care delivery through interdisciplinary collaboration.",
      highlighted: false,
    },
    {
      text: "Implemented HR strategies including recruitment, training, and performance appraisals.",
      highlighted: false,
    },
    {
      text: "Initiated policy formulation, institutional credentialing, and compliance auditing.",
      highlighted: false, // highlighted by default
    },
    {
      text: "Facilitated regular operational and clinical meetings to strengthen decision-making and accountability.",
      highlighted: false,
    },
    {
      text: "Led system-level interventions focused on patient safety, infection control, and service excellence.",
      highlighted: false,
    },
    {
      text: "Built strategic partnerships with government bodies and international institutions to enhance healthcare delivery.",
      highlighted: false,
    },
  ];

  return (
    <div
      id="Leadership"
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#00436D] mb-12">
          Leadership &{" "}
          <span className="text-gray-900">Management Practice</span>
        </h1>

        <div className="space-y-4">
          {practices.map((practice, index) => (
            <div
              key={index}
              className={`
                p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
                ${
                  practice.highlighted
                    ? "bg-[#00436D] text-white"
                    : "bg-white text-gray-800 hover:bg-[#00436D] hover:text-white hover:scale-[1.02] hover:shadow-xl"
                }
              `}
            >
              <p className="text-base md:text-lg leading-relaxed font-medium">
                {practice.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipManagement;
