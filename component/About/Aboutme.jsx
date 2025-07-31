import React from "react";
import "./Aboutme.css";
import profileimg2 from "../../assets/Profile2.png";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFivem } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { IoAtCircleSharp } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div id="aboutid" className="about">
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 py-8 lg:py-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Main container - switches from horizontal to vertical on mobile */}
          <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 lg:gap-8">
            
            {/* Content Box */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 bg-gray-900 border border-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg relative w-full lg:max-w-4xl">
              
              {/* Welcome Text */}
              <div className="space-y-4 lg:space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Welcome! I'm{" "}
                  <span className="text-blue-300 font-semibold">Vikum</span>, a
                  versatile developer skilled in crafting everything from sleek
                  websites to robust applications. Combining creativity and
                  technical expertise, I bring your ideas to life with solutions
                  that excel in both design and performance.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex justify-center sm:justify-left gap-8 sm:gap-12 lg:gap-16 mt-8 lg:mt-12">
                
                {/* Projects Done */}
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    7<span className="text-blue-300">+</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase">
                    Projects done
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    1.5<span className="text-blue-300">+</span>
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm tracking-wider uppercase">
                    Years of experience
                  </div>
                </div>
              </div>

              {/* Logo - hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block absolute bottom-4 right-4">
                <img
                  src="./logo.png"
                  alt="Logo"
                  className="w-8 h-8 lg:w-12 lg:h-12 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Marquee Section */}
            <div className="order-1 lg:order-2 w-full lg:w-auto lg:min-w-[300px] xl:min-w-[400px]">
              <div className="marquee">
                <div className="marquee_header">Technologies I Use</div>
                <div className="marquee__inner">
                  
                  <div className="marquee__group">
                    <span>
                      <FaHtml5 />
                      HTML
                    </span>
                    <span>
                      <IoLogoCss3 />
                      CSS
                    </span>
                    <span>
                      <IoLogoJavascript />
                      JavaScript
                    </span>
                    <span>
                      <FaReact /> 
                      React
                    </span>
                    <span>
                      <FaNode /> 
                      Node JS
                    </span>
                  </div>

                  <div className="marquee__group">
                    <span>
                      <SiMysql />
                      MySQL
                    </span>
                    <span>
                      <SiFivem /> 
                      .lua
                    </span>
                    <span>
                      <IoLogoAndroid /> 
                      Android
                    </span>
                    <span>
                      <IoAtCircleSharp />
                      C#
                    </span>
                    <span>
                      <FaJava />
                      Java
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
