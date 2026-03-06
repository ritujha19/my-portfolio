import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between items-center p-4 m-2   ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        <img
          src="/RJ.png"
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <nav
          className={`flex gap-6  items-center text-lg rounded-full border backdrop-blur-md shadow-lg ${
            darkMode
              ? "border-gray-700 bg-black/30 text-white"
              : "border-gray-300 bg-white/30 text-gray-800"
          }`}
        >
          <a
            className={`py-2 px-4 cursor-pointer transition-all duration-150 ${darkMode ? "hover:bg-white hover:text-black hover:rounded-2xl" : "hover:bg-black hover:text-white hover:rounded-2xl"}`}
          >
            Home
          </a>
          <a
            className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? "hover:bg-white hover:text-black hover:rounded-2xl" : "hover:bg-black hover:text-white hover:rounded-2xl"}`}
          >
            About
          </a>
          <a
            className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? "hover:bg-white hover:text-black hover:rounded-2xl" : "hover:bg-black hover:text-white hover:rounded-2xl"}`}
          >
            Skills
          </a>
          <a
            className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? "hover:bg-white hover:text-black hover:rounded-2xl" : "hover:bg-black hover:text-white hover:rounded-2xl"}`}
          >
            Projects
          </a>
          <a
            className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? "hover:bg-white hover:text-black hover:rounded-2xl" : "hover:bg-black hover:text-white hover:rounded-2xl"}`}
          >
            Contact
          </a>
        </nav>

        <button
          onClick={toggleDarkMode}
          className={`px-3 py-2 mr-10 rounded-full  transition-all duration-250 ${darkMode ? "bg-white hover:bg-gray-300" : "bg-black hover:bg-gray-500 text-white"}`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </>
  );
};

export default Header;
