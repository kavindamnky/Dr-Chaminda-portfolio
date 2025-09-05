import React, { useState, useEffect } from "react";
const Timeline = () => {
  const [loadedItems, setLoadedItems] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadItems = () => {
      const interval = setInterval(() => {
        setLoadedItems((prev) => {
          if (prev >= experiences.length) {
            clearInterval(interval);
            setIsLoading(false);
            return prev;
          }
          return prev + 1;
        });
      }, 300); // Each item loads after 300ms

      return () => clearInterval(interval);
    };

    // Start loading after a brief delay
    const timeout = setTimeout(loadItems, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="experiences" className="bg-white text-gray-800 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Professional <span className="text-[#00436D]">Experience</span>
      </h1>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line with animated height */}
        <div
          className="absolute left-1/2 top-0 border-l-2 transform -translate-x-1/2 transition-all duration-1000 ease-out"
          style={{
            borderColor: "#00436D",
            height:
              loadedItems > 0
                ? `${(loadedItems / experiences.length) * 100}%`
                : "0%",
            minHeight: loadedItems > 0 ? "100%" : "0%",
          }}
        ></div>

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex w-full ${
              exp.align === "left" ? "justify-start pr-10" : "justify-end pl-10"
            } relative transition-all duration-700 ease-out ${
              index < loadedItems
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Animated Dot */}
            <div
              className={`absolute left-1/2 top-3 w-8 h-8 rounded-full border-4 border-white transform -translate-x-1/2 transition-all duration-500 ${
                index < loadedItems
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
              style={{
                backgroundColor: "#00436D",
                transitionDelay: `${index * 100 + 200}ms`,
              }}
            >
              {/* Inner pulse effect */}
              <div
                className="absolute inset-1 rounded-full animate-pulse"
                style={{ backgroundColor: "#00324E" }}
              ></div>
            </div>

            {/* Card with slide-in animation */}
            <div
              className={`bg-gray-100 p-6 rounded-lg shadow w-full max-w-md transition-all duration-600 ease-out ${
                index < loadedItems
                  ? `opacity-100 ${
                      exp.align === "left" ? "translate-x-0" : "translate-x-0"
                    }`
                  : `opacity-0 ${
                      exp.align === "left" ? "-translate-x-8" : "translate-x-8"
                    }`
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
              <h3 className="font-bold text-lg">{exp.role}</h3>
              <p className="text-sm font-semibold mb-2">{exp.company}</p>

              {/* Bullet points */}
              <ul className="list-disc ml-5 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className={`transition-all duration-400 ease-out ${
                      index < loadedItems
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${index * 100 + 400 + i * 50}ms`,
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {/* Sub Role */}
              {exp.subRole && (
                <div
                  className={`mt-4 transition-all duration-500 ease-out ${
                    index < loadedItems
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  <h4 className="font-semibold text-sm">{exp.subRole}</h4>
                  {exp.company2 && (
                    <p className="text-xs font-medium">{exp.company2}</p>
                  )}
                  <ul className="list-disc ml-5 text-sm space-y-1">
                    {exp.subPoints.map((sub, j) => (
                      <li
                        key={j}
                        className={`transition-all duration-400 ease-out ${
                          index < loadedItems
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${index * 100 + 700 + j * 50}ms`,
                        }}
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const experiences = [
  {
    date: "March 2025 – Present",
    role: "Deputy Director Medical Services",
    company: "Lanka Hospitals PLC",
    points: [
      "Provide strategic leadership to clinical departments, aligning services with national healthcare standards and hospital goals.",
      "Oversee international patient services, fostering relationships with foreign missions and healthcare partners.",
      "Lead initiatives to improve patient care quality, optimize resource allocation, and enforce regulatory compliance.",
      "Collaborate with multidisciplinary teams to drive continuous improvement in service delivery.",
      "Represent Lanka Hospitals on health tourism promotion committees in collaboration with the Ministry of Health and Ministry of Foreign Affairs.",
    ],
    align: "left",
  },
  {
    date: "October 2024 – March 2025",
    role: "Head of Operations",
    company: "Asiri Surgical Hospital",
    points: [
      "Oversaw daily hospital operations, ensuring seamless coordination across departments.",
      "Developed and implemented operational policies to enhance efficiency and patient satisfaction.",
      "Ensured compliance with healthcare regulations and accreditation standards.",
      "Led process improvements that contributed to increased patient flow and reduced service delays.",
      "Oversaw international patient care services, handling medical travelers from multiple countries.",
    ],
    align: "right",
  },
  {
    date: "June 2024 – October 2024",
    role: "Manager – Business Development & Surgical Department",
    company: "Asiri Surgical Hospital",
    points: [
      "Directed business development strategies for the surgical department, focusing on service expansion and revenue generation.",
      "Managed human resources, budgeting, and compliance for surgical services.",
      "Conducted market analysis to identify growth opportunities and patient needs.",
      "Led international patient coordination efforts, working with overseas embassies and healthcare providers.",
    ],
    align: "left",
  },
  {
    date: "September 2022 – June 2024",
    role: "Manager – Surgical Department",
    company: "Durdans Hospital",
    points: [
      "Oversaw the operational and administrative aspects of surgical units.",
      "Supervised clinical and support staff, maintaining high standards in patient care.",
      "Monitored quality control and regulatory adherence within surgical services.",
      "Coordinated care for international patients by liaising with foreign embassies and global healthcare providers.",
    ],
    subRole: "Lecturer – Durdans Nurses Training School",
    subPoints: [
      "Delivered lectures in Clinical Pharmacology, Anatomy, and Physiology.",
      "Developed learning modules and assessment tools for nursing education.",
    ],
    align: "right",
  },
  {
    date: "October 2020 – December 2021",
    role: "Ministry of Health Coordinator",
    company: "Neville Fernando Teaching Hospital",
    points: [
      "Coordinated the COVID-19 treatment center during the pandemic crisis.",
      "Provided leadership in logistics, staff deployment, and infection control protocols.",
    ],
    subRole: "Clinical Coordinator – KDU Hospital",
    subPoints: [
      "Played a key role in training and mentoring junior doctors and surgical trainees.",
      "Facilitated medical education initiatives and academic collaborations.",
    ],
    align: "left",
  },
  {
    date: "September 2018 – September 2022",
    role: "Chief Medical Officer",
    company: "Neville Fernando Teaching Hospital",
    points: [
      "Managed inpatient care and operational management of wards and units.",
      "Led multidisciplinary teams to maintain high standards in patient outcomes.",
    ],
    subRole: "Medical Officer – Emergency Treatment Unit",
    company2: "Changi General Hospital, Singapore (Feb 2017 – Aug 2018)",
    subPoints: [
      "Delivered acute care in a high-paced emergency unit in a globally renowned healthcare system.",
      "Gained international exposure to advanced emergency protocols and teamwork.",
    ],
    align: "right",
  },
  {
    date: "October 2013 – February 2017",
    role: "Medical Officer – Surgical Unit",
    company: "Base Hospital Tissamaharama",
    points: [
      "Provided comprehensive care to surgical patients.",
      "Developed clinical expertise in surgical assessment, preoperative care, and postoperative management.",
    ],
    align: "left",
  },
];

export default Timeline;
