import React from "react";

const contact = ({ darkMode = true }) => {
  return (
    <>
      <div
        className={`card border rounded-xl p-6 m-10  w-100 h-full flex flex-col gap-10 ${darkMode ? "border-gray-700  bg-dark bg-opacity-50" : "border-gray-300 bg-gray-400 bg-opacity-50"}`}
      >
        <div
          className={`flex items-center px-2 gap-1 border rounded-2xl w-fit mb-4 font-sans ${darkMode ? "border-gray-600 text-gray-500 bg-transparent" : "border-gray-400 text-gray-300 "}`}
        >
          <strong className="text-green-700 text-2xl pb-1">&bull;</strong>
          <p className="text-xs ">available for job opportunities</p>
        </div>
        <div className="flex flex-col gap-10 items-center text-center">
          <h2 className="card-title text-4xl font-bold mb-4">
            Let’s Create Digital <hr className="text-gray-700 mt-2" />
            <span className="text-gray-500 font-mono text-2xl">
              Experiences Together.
            </span>
          </h2>
          <a
            href="mailto:ritu05491@gmail.com"
            className={`card-link btn px-6 py-3 w-fit rounded-full transition duration-300 flex items-center gap-2 text-center font-sans ${darkMode ? "bg-gray-500 text-white hover:bg-gray-300 hover:text-black hover:border-black border-2" : " text-white hover:bg-gray-500 hover:text-white"}`}
          >
            {" "}
            Mail Me
            <lord-icon
              src="https://cdn.lordicon.com/vpbspaec.json"
              trigger="hover"
              state="in-assembly"
              colors="primary:#121331,secondary:#848484"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </a>
        </div>
        <div id="socials" className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/ritu-rani-b18992322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="card-link p-4"
          >
            <lord-icon
              src="https://cdn.lordicon.com/euybrknk.json"
              trigger="hover"
              state="hover-roll"
              colors="primary:#ffffff,secondary:#30c9e8"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
          <a href=" https://github.com/ritujha19" className="card-link p-4">
            <lord-icon
              src="https://cdn.lordicon.com/jjxzcivr.json"
              trigger="hover"
              state="hover-roll"
              colors="primary:#ffffff,secondary:#30c9e8"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </a>
        </div>
      </div>
    </>
  );
};

export default contact;
