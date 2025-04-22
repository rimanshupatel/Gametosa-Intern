"use client";
import { navLinks } from "@/constants/data";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black sticky top-0 backdrop-blur-lg border-b border-cyan-500/20 z-50 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center group">
              {/* <img
                className="h-12 w-auto rounded-full transition-transform duration-300 group-hover:scale-110"
                src="https://gametosa.com/img/header.png"
                alt="Demo Logo"
              /> */}
              <h1 className="text-3xl text-white">MATRIX</h1>
            </a>
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() =>
                    link.subLinks && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`flex items-center text-white hover:text-cyan-400 px-4 py-2 text-md font-medium transition-all duration-300 rounded-lg ${
                      activeDropdown === link.name ? " text-cyan-400" : ""
                    }`}
                    onClick={(e) => link.subLinks && e.preventDefault()}
                  >
                    {link.name}
                    {link.subLinks && (
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div
                      className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-gray-900/95 backdrop-blur-lg border border-cyan-500/20 overflow-hidden transition-all duration-300 origin-top ${
                        activeDropdown === link.name
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="py-1">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-3 text-white hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-200"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 focus:outline-none transition-all duration-300 hover:bg-white/10"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (hidden on desktop) */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg border-t border-cyan-500/20">
          <ul className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.subLinks ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex justify-between items-center w-full text-left text-white hover:text-cyan-400 hover:bg-white/10 px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300 ${
                        activeDropdown === link.name
                          ? "bg-white/10 text-cyan-400"
                          : ""
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-6 py-1 space-y-1">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            className="block px-4 py-3 text-white hover:text-cyan-400 hover:bg-white/10 rounded-md transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-white hover:text-cyan-400 hover:bg-white/10 block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
