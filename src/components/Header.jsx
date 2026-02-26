import React from "react";

const Header = () => {
  
  return (
    <>
      <nav className="flex justify-between items-center p-4 m-2 bg-transparent ">
        <img src="/RJ.png" alt="Logo" className="w-15 h-15 rounded-full object-cover" />
        <ul className="flex gap-4 border rounded-xl items-center text-xl ">
          <li className="py-2 px-4">Home</li>
          <li className="py-2 px-4">About</li>
          <li className="py-2 px-4">Skills</li>
          <li className="py-2 px-4">Projects</li>
          <li className="py-2 px-4">Contact</li>
        </ul>
        
      </nav>
    </>
  );
};

export default Header;
