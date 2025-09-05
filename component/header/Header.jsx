import React, { useState, useEffect } from "react";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [textLoaded, setTextLoaded] = useState(false);
  const [illustrationLoaded, setIllustrationLoaded] = useState(false);

  useEffect(() => {
    // Staggered loading animation sequence
    const loadingSequence = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoaded(true);

      // Text animation
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTextLoaded(true);

      // Illustration
      await new Promise((resolve) => setTimeout(resolve, 700));
      setIllustrationLoaded(true);
    };

    loadingSequence();
  }, []);

  return (
    <div
      id="head"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-[#00436D] rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-[#00436D] rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`w-full max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 relative z-10 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-left space-y-4 max-w-2xl">
            {/* Welcome text */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                textLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
                Welcome to
              </h2>
            </div>

            {/* Name in rounded rectangle */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                textLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-block border-3 border-[#00436D] rounded-2xl px-6 py-3 mb-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00436D]">
                  Dr Chaminda Kumara
                </h1>
              </div>
            </div>

            {/* Tagline */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                textLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed">
                Bridging Clinical Excellence with Strategic
                <br />
                Healthcare Leadership.
              </p>
            </div>
          </div>

          {/* Right side - Custom Image */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div
              className={`transition-all duration-1000 delay-900 ${
                illustrationLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-180 lg:h-180 mt-30">
                <img
                  src="https://res.cloudinary.com/dzummwk1a/image/upload/v1757092045/Screenshot_2025-09-05_221838_p8mobf.png"
                  alt="Dr Chaminda Kumara"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Header;
