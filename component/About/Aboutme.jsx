import React, { useState, useEffect } from "react";

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showFullProfile, setShowFullProfile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.getElementById("aboutid");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div id="aboutid" className="bg-white py-16 lg:py-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Profile Image */}
          <div
            className={`flex-1 flex justify-center lg:justify-start transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-[30rem] lg:h-[30rem]">
                <img
                  src="https://res.cloudinary.com/dzummwk1a/image/upload/v1757094379/Screenshot_2025-09-05_230120_copy_kplyz1.png"
                  alt="Dr. Chaminda Kumara"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`flex-1 max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Header */}
            <div className="flex items-center mb-6">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mr-4">
                Dr. Chaminda Kumara
              </h1>
              <div className="w-10 h-10 bg-[#00436D] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Professional Description */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg lg:text-xl">
                <strong className="text-[#00436D]">
                  Dr. B.G. Chaminda Kumara
                </strong>{" "}
                is an accomplished healthcare professional with over a decade of
                experience in surgery, hospital administration, and healthcare
                education.
              </p>

              <p className="text-base lg:text-lg">
                He has served in leadership positions at{" "}
                <span className="font-semibold text-[#00436D]">
                  Lanka Hospitals, Asiri Surgical Hospital, and Durdans Hospital
                </span>
                , specializing in general and laparoscopic surgery, emergency
                care, and international patient services.
              </p>

              <p className="text-base lg:text-lg">
                With a proven track record in both clinical excellence and
                healthcare management, Dr. Chaminda is committed to advancing
                patient care, medical education, and Sri Lanka's health tourism
                sector.
              </p>

              {/* Expandable Profile Summary */}
              {showFullProfile && (
                <div className="space-y-6">
                  <p>
                    I am an accomplished and versatile medical professional with
                    over a decade of comprehensive experience across clinical
                    medicine, hospital administration, and healthcare education.
                    My career journey reflects a progressive evolution from
                    frontline patient care to high-level strategic leadership
                    within some of the most reputable healthcare institutions in
                    Sri Lanka and abroad.
                  </p>
                  <p>
                    I began my professional path with a strong clinical
                    foundation in surgery and emergency medicine, developing
                    hands-on expertise in acute care, surgical interventions,
                    and multidisciplinary patient management. As I advanced in
                    my career, I transitioned into administrative and managerial
                    roles, where I have successfully led large healthcare teams,
                    driven process improvements, and implemented operational
                    strategies that have enhanced efficiency, safety, and
                    patient satisfaction.
                  </p>
                  <p>
                    My tenure in leadership positions, including Deputy Director
                    of Medical Services and Head of Operations, has allowed me
                    to oversee hospital-wide operations, optimize resource
                    allocation, and ensure adherence to healthcare regulations
                    and standards of excellence.
                  </p>
                  <p>
                    In addition to clinical and administrative duties, I have
                    played a pivotal role in international patient coordination
                    and health tourism initiatives. As the Head of International
                    Patient Care and Business Development at Asiri Surgical
                    Hospital, and later as Deputy Director of Medical Services
                    and Head of International Patient Services at Lanka
                    Hospitals, I led efforts to expand cross-border healthcare
                    partnerships and enhance the patient experience for medical
                    travelers.
                  </p>
                  <p>
                    My tenure at Durdans Hospital also included managing
                    international surgical patient coordination, streamlining
                    communication between referring embassies, patients, and
                    clinical teams. I have contributed strategically to national
                    health tourism initiatives, providing leadership to the
                    Health Tourism Project under the Ministry of Health, and
                    serving as a Strategic Committee Member of the
                    Health-Tourism Promotion Committee, a joint collaboration
                    between the Ministries of Health and Foreign Affairs.
                  </p>
                  <p>
                    These roles have strengthened my diplomatic ties with
                    foreign missions, including active collaborations with the
                    embassies of the Maldives, India, Pakistan, the USA, and
                    Japan.
                  </p>
                  <p>
                    In parallel with my administrative responsibilities, I have
                    consistently contributed to the academic sphere by serving
                    as a lecturer and clinical mentor. I am deeply committed to
                    the development of future healthcare professionals and
                    actively engage in curriculum development, clinical
                    instruction, and capacity building in nursing and medical
                    education.
                  </p>
                  <p>
                    My leadership style is collaborative, data-driven, and
                    patient-centered. I am adept at aligning institutional goals
                    with broader healthcare trends and policies, enabling
                    healthcare organizations to adapt, grow, and thrive in
                    dynamic environments. Whether navigating the complexities of
                    pandemic response or pioneering service enhancements in
                    surgical departments, I bring a blend of clinical insight,
                    operational acumen, and educational passion to every role I
                    undertake.
                  </p>
                </div>
              )}
            </div>

            {/* Call-to-Action Button */}
            {!showFullProfile && (
              <div className="mt-10">
                <button
                  onClick={() => setShowFullProfile(true)}
                  className="group relative inline-flex items-center px-8 py-4 bg-[#00436D] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 overflow-hidden transform hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    View Full Profile
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
