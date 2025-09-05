import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full text-white py-8 px-4"
      style={{ backgroundColor: "#00436D" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base font-medium">
              Copyright © 2024. All rights reserved.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href="#privacy"
              className="text-sm md:text-base font-medium hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm md:text-base font-medium hover:text-gray-300 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
