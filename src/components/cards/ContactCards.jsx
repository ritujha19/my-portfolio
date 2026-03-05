import React from "react";

const contact = () => {
  return (
    <>
      <div className="card border rounded-xl p-6 m-10 backdrop-blur-3xl w-100 h-full flex flex-col gap-10">
        <div>
          <p className="text-xs border p-2 rounded-2xl w-fit mb-4 font-sans text-gray-300 ">
            available for job opportunities
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="card-title text-4xl font-bold mb-4">
            Let’s Create Digital <hr className="text-gray-700 mt-2" />
            <span className="text-gray-500 font-mono text-2xl">
              Experiences Together.
            </span>
          </h2>
          <a
            href="mailto:ritu05491@gmail.com"
            className="card-link btn bg-gray-700 text-white px-6 py-3 w-fit rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center gap-2 text-center font-sans"
          >
            {" "}
            Mail Me
            <lord-icon
              src="https://cdn.lordicon.com/dpggoewm.json"
              trigger="hover"
              state="in-assembly"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </a>
        </div>
        <div id="socials">
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
