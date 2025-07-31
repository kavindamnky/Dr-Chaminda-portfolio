import React from "react";
import "./service.css"; // Import the CSS file
import { FaCompass } from "react-icons/fa";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { SiFivem } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdHtml } from "react-icons/md";

const Service = () => {
  return (
    <div id="servicesid" className="services-container bg-gray-950">
      <div className="heding"></div>
      <section className="bg-white dark:bg-gray-950">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 animate-fade-in">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white animate-slide-down">
              PowerBoard
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 animate-slide-up">
              Explore the full range of what i do — from digital design and game
              development to custom web solutions and media editing. Whether
              you're building an immersive FiveM world, launching a brand, or
              leveling up your online presence, we've got the tools, talent, and
              creativity to make it happen..
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <FaCompass className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                Web design
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Design and develop modern, responsive websites that reflect your
                brand's identity and drive engagement. From planning to
                deployment, we ensure seamless collaboration and delivery. 
              </p>
            </div>
            
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <MdOutlineMobileScreenShare className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                Mobile App Development
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                We build secure, user-friendly mobile applications tailored to
                your business needs. Our streamlined workflow ensures compliance
                and efficient permission management across devices.
              </p>
            </div>
            
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <RiSuitcaseFill className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                Branding
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Establish a strong brand identity with custom visuals,
                messaging, and digital assets. We help you connect emotionally
                with your audience through strategic and impactful branding.
              </p>
            </div>
            
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <MdDesignServices className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                Ui/Ux
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Deliver intuitive and visually compelling interfaces that
                enhance user satisfaction. We focus on usability and aesthetic
                harmony to create exceptional user experiences across all
                platforms.
              </p>
            </div>
            
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <FaDiscord className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                Discord Bot & server dev
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Automate and enhance your Discord server with custom bots and
                integrations. Ideal for communities and businesses needing
                structured moderation, communication, and interactivity.
              </p>
            </div>
            
            <div className="service-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-transparent hover:bg-gray-900/50 p-6 rounded-xl border border-transparent hover:border-blue-500/30">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 group-hover:bg-blue-600 transition-colors duration-300 group-hover:scale-110">
                <SiFivem className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-blue-300 group-hover:text-blue-400 transition-colors duration-300">
                FiveM Server Developments
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Build and maintain immersive FiveM RP servers with optimized
                performance and custom features. From roleplay scripts to UI
                enhancements, we provide everything you need to stand out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
