import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Professional Experience");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Professional Experience", id: "experiences" },
    { name: "Core Competencies", id: "competencies" },
    { name: "Leadership & Management Practice", id: "Leadership" },
    { name: "Achievements", id: "highlights" },
    { name: "Contacts", id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (name, id) => {
    setActiveItem(name);
    setIsMobileMenuOpen(false);
    // Smooth scroll to element
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    setActiveItem("");
    setIsMobileMenuOpen(false);
    // Smooth scroll to head element
    const element = document.getElementById("head");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryColor = "#00436D";
  const primaryColorLight = "#005580";
  const primaryColorDark = "#003355";

  return (
    <nav className="fixed w-full z-20 top-4 left-0 right-0 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Curved container with custom blue gradient */}
        <div 
          className="rounded-full shadow-lg border"
          style={{ 
            background: `linear-gradient(to right, ${primaryColorDark}, ${primaryColor}, ${primaryColorDark})`,
            borderColor: `${primaryColor}50`
          }}
        >
          <div className="flex flex-wrap items-center justify-between px-8 py-4">
            
            {/* Logo/Home icon with hyperlink */}
            <div className="flex items-center">
              <button
                onClick={handleHomeClick}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                style={{ focusRingOffsetColor: primaryColor }}
                aria-label="Go to top"
              >
                <svg 
                  className="w-6 h-6" 
                  style={{ color: primaryColor }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-opacity-80 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ 
                backgroundColor: isMobileMenuOpen ? primaryColorLight : 'transparent',
                focusRingColor: `${primaryColor}80`
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = primaryColorLight}
              onMouseLeave={(e) => e.target.style.backgroundColor = isMobileMenuOpen ? primaryColorLight : 'transparent'}
              aria-controls="navbar-curved"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* Nav Links */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } absolute top-full left-0 right-0 mt-2 xl:relative xl:top-auto xl:left-auto xl:right-auto xl:mt-0 xl:block xl:flex-1 xl:flex xl:justify-center`}
              id="navbar-curved"
            >
              <div 
                className="rounded-2xl shadow-lg mx-2 xl:bg-transparent xl:shadow-none xl:mx-0 xl:rounded-none"
                style={{ 
                  background: isMobileMenuOpen 
                    ? `linear-gradient(to right, ${primaryColorDark}, ${primaryColor}, ${primaryColorDark})`
                    : 'transparent'
                }}
              >
                <ul className="flex flex-col xl:flex-row xl:items-center p-3 xl:p-0 space-y-1 xl:space-y-0 xl:space-x-1">
                  {navItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <li>
                        <button
                          onClick={() => handleItemClick(item.name, item.id)}
                          className={`block w-full py-2 px-3 xl:py-1.5 xl:px-2.5 rounded-lg transition-all duration-200 text-center text-xs xl:text-sm font-medium whitespace-nowrap ${
                            activeItem === item.name
                              ? "text-white"
                              : "text-white/90 hover:text-white"
                          }`}
                          style={{
                            backgroundColor: activeItem === item.name 
                              ? primaryColorLight 
                              : 'transparent'
                          }}
                          onMouseEnter={(e) => {
                            if (activeItem !== item.name) {
                              e.target.style.backgroundColor = `${primaryColor}99`;
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeItem !== item.name) {
                              e.target.style.backgroundColor = 'transparent';
                            } else {
                              e.target.style.backgroundColor = primaryColorLight;
                            }
                          }}
                          aria-current={activeItem === item.name ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      </li>
                      {/* Separator dot for desktop */}
                      {index < navItems.length - 1 && (
                        <li className="hidden xl:block">
                          <span className="text-white/40 px-1 text-sm">•</span>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;