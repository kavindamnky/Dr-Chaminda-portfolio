import React from "react";

const CoreCompetencies = () => {
  const competencies = [
    {
      title: "Leadership & Strategic Alignment",
      description:
        "Drive vision-centric leadership, aligning institutional strategies with national healthcare goals and patient-centered care. Foster a culture of excellence and accountability across departments.",
    },
    {
      title: "International Patient Services & Health Tourism",
      description:
        "Proven success in managing global patient care coordination. Strategic leadership in Sri Lanka's health tourism sector, working with embassies and ministries.",
    },
    {
      title: "Operational Efficiency & Resource Optimization",
      description:
        "Lead initiatives for cost-efficiency, workflow automation, and productivity improvements while ensuring optimal use of human and material resources.",
    },
    {
      title: "Regulatory Compliance & Risk Mitigation",
      description:
        "Ensure adherence to SLMC, Ministry of Health, and International healthcare standards. Lead institutional readiness for audits and accreditations.",
    },
    {
      title: "Effective Communication & Stakeholder Engagement",
      description:
        "Serve as liaison between internal teams, external stakeholders, and the wider community. Promote transparency and cooperation through structured communication.",
    },
    {
      title: "Growth, Business Development & Market Awareness",
      description:
        "Conduct competitive and market analyses to shape hospital service offerings. Build strategic partnerships to drive growth and enhance service portfolios.",
    },
  ];

  return (
    <div
      id="competencies"
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Core <span className="text-[#00436D]">Competencies</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#00436D] cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4 leading-tight text-[#00436D] group-hover:text-white transition-colors duration-300">
                {competency.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white transition-colors duration-300">
                {competency.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
