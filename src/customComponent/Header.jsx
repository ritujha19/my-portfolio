import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import {IconMoon , IconSun} from "@tabler/icons-react";

const Header = ({ darkMode, toggleDarkMode }) => {
  // Define a helper function to keep the JSX clean
  const navLinkStyles = ({ isActive }) => 
    `py-2 px-4 cursor-pointer transition-all duration-150 rounded-2xl ${
      isActive 
        ? (darkMode ? "bg-white text-black" : "bg-black text-white") // Active styles
        : (darkMode ? "hover:bg-white/40" : "hover:bg-black/40")      // Inactive/Hover styles
    }`;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 m-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
      <img src="/RJ.png" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
      
      <nav className={`flex gap-6 items-center text-lg rounded-full border backdrop-blur-md shadow-lg ${
        darkMode ? "border-gray-700 bg-black/30 text-white" : "border-gray-300 bg-white/30 text-gray-800"
      }`}>
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/About" className={navLinkStyles}>About</NavLink>
        <NavLink to="/Projects" className={navLinkStyles}>Projects</NavLink>
        <NavLink to="/Contact" className={navLinkStyles}>Contact</NavLink>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={`px-3 py-2 mr-10 rounded-full transition-all duration-250 ${
          darkMode ? "bg-white hover:bg-gray-300" : "bg-black hover:bg-gray-500 text-white"
        }`}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Header;