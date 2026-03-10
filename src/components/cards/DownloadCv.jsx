import React from "react";
import Ritu_Jha_CV from "../../assets/Ritu_Jha_CV.pdf";

const DownloadCv = ({ darkMode = true }) => {
  return (
    <>
      <div
        className={`card border rounded-xl p-6 m-10  w-fit h-full flex flex-row gap-10 ${darkMode ? "border-gray-700  bg-dark bg-opacity-50" : "border-gray-300 bg-gray-400 bg-opacity-50"}`}
      >
        <div className="flex flex-col gap-10 m-10 ">
          <h4 className="card-title text-3xl font-bold mb-4 font-mono">
            Download My CV
          </h4>
          <hr className="text-gray-700 " />
          <p className="card-description text-xl text-gray-500 font-semibold font-mono italic">
            A quick overview of my skills,
            <br /> projects, and technical background.
          </p>
          <p className="text-gray-600 font-sans">PDF • Updated 2026</p>
          <a href={Ritu_Jha_CV} download={Ritu_Jha_CV} className="card-link ">
            <button
              className={`btn px-6 py-3 w-fit rounded-full transition duration-300 flex items-center gap-2 text-center font-sans ${darkMode ? "bg-gray-500 text-white hover:bg-gray-300 hover:text-black hover:border-black border-2" : " text-white hover:bg-gray-500 hover:text-white"}`}
            >
              Download CV{" "}
              <lord-icon
                src="https://cdn.lordicon.com/gqfozvrp.json"
                trigger="hover"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </button>
          </a>
        </div>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/ddumgjyf.json"
            trigger="loop"
            delay="2000"
            colors="primary:#545454"
            style={{ width: "250px", height: "250px" }}
          ></lord-icon>
        </div>
      </div>
    </>
  );
};

export default DownloadCv;
