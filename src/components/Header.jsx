import React from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
  
  return (
    <>
      <nav className={`flex justify-between items-center p-4 m-2 bg-transparent ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        <img src="/RJ.png" alt="Logo" className="w-15 h-15 rounded-full object-cover" />
        <ul className={`flex gap-4 border rounded-xl items-center text-xl ${darkMode ? 'border-gray-700 bg-gray-800 bg-opacity-50' : 'border-gray-300 bg-gray-100 bg-opacity-50'}`}>
          <li className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'}`}>Home</li>
          <li className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'}`}>About</li>
          <li className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'}`}>Skills</li>
          <li className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'}`}>Projects</li>
          <li className={`py-2 px-4 cursor-pointer transition-all duration-250 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'}`}>Contact</li>
        </ul>
        
        <button 
          onClick={toggleDarkMode}
          className={`py-2 px-4 rounded-lg font-semibold transition-all duration-250 ${darkMode ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </>
  );
};

export default Header;
