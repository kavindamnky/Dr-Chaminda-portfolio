import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Simulate component loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div id="head" className="head">
      <div className={`maintext flex items-center justify-between gap-8 ${isLoaded ? 'loaded' : ''}`}>
        
        {/* Left side - Text content */}
        <div className="flex-1 min-w-0">
          
          {/* Status Section with Loading Animation */}
          <div className="avwork typewriter-container">
            <span className="neon-dot"></span>
            <span className="typewriter-text">Available for Work.</span>
          </div>

          {/* Hero Title Section */}
          <div className="hero-title">
            <span className="block">Building Smart</span>
            <span className="block">Solutions for a</span>
            <span className="block">Digital World.</span>
          </div>
          
          {/* CTA Button */}
          <button className='cvbtn group'>
            <div className="btntext relative z-10">
              Download my CV
            </div>
            {/* Hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Right side - Profile Image Section */}
        <div className="profile-section flex-shrink-0 hidden lg:block">
          <div className="relative group">
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse"></div>
            )}
            
            {/* Background glow effect */}
            <div className="profile-glow absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
            
            {/* Main image container */}
            <div className="relative">
              <div className="profile-image-container w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img 
                  src="./pic.png" 
                  alt="Henry - Professional Web Developer" 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    imageLoaded 
                      ? 'grayscale hover:grayscale-0 opacity-100' 
                      : 'opacity-0'
                  }`}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </div>
              
              {/* Decorative cursor icon */}
              <div className="absolute top-4 right-4 text-white text-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse">
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                </svg>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -left-6 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Mobile Profile Image */}
        <div className="profile-section lg:hidden w-full flex justify-center mb-8">
          <div className="relative group">
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse"></div>
            )}
            
            {/* Background glow effect */}
            <div className="profile-glow absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-50"></div>
            
            {/* Main image container */}
            <div className="relative">
              <div className="profile-image-container w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img 
                  src="./pic.png" 
                  alt="Henry - Professional Web Developer" 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    imageLoaded 
                      ? 'grayscale hover:grayscale-0 opacity-100' 
                      : 'opacity-0'
                  }`}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
      </div>           
    </div>
  );
};

export default Header;
