import React from "react";
import Ritu_Jha_CV from "../../assets/Ritu_Jha_CV.pdf";

const DownloadCv = ({ darkMode = true }) => {
  return (
    <>
      <div className="p-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-18 items-center">
            <h4 className="card-title text-3xl font-bold mb-4 font-mono">
              Download My CV
            </h4>
            <div>
              <lord-icon
                src="https://cdn.lordicon.com/ddumgjyf.json"
                trigger="loop"
                delay="1500"
                colors="primary:#545454"
                style={{ width: "150px", height: "150px" }}
              ></lord-icon>
            </div>
          </div>

          <hr className="text-gray-700 " />
          <p className="card-description text-xl text-gray-500 font-semibold font-mono italic">
            A quick overview of my skills,
            <br /> projects, and technical background.
          </p>
          <p className="text-gray-600 font-sans">PDF • Updated 2026</p>
          <a href={Ritu_Jha_CV} download={Ritu_Jha_CV} className="card-link ">
            <button
              className={`btn px-6 py-3 w-50 rounded-full transition duration-300 flex items-center gap-2 text-center font-sans bg-blue-700 text-white ${darkMode ? "hover:bg-neutral-200 hover:text-black " : "hover:bg-black hover:text-white"}`}
            >
              Download CV{" "}
              <lord-icon
                src="https://cdn.lordicon.com/gqfozvrp.json"
                trigger="hover"
                colors="primary:#a39cf4"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default DownloadCv;
