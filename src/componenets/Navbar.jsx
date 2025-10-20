import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a
            href="#"
            className="flex items-center space-x-2 text-2xl font-bold text-white"
          >
            <span className="text-purple-500">Ghilas</span>
            <span className="text-white">Ameur</span>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
          </a>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-10">
          {["Accueil", "À propos", "Projets", "Skills", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer text-white"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer text-white"
            />
          )}
        </div>
      </div>

      {/* Menu mobile */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-gray-800/95 rounded-lg p-4 flex flex-col space-y-6 text-center shadow-lg">
          {["Accueil", "À propos", "Projets", "Skills", "Contact"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative text-white/80 transition duration-300 hover:text-purple-500 group"
                onClick={() => setShowMenu(false)}
              >
                <span>{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
