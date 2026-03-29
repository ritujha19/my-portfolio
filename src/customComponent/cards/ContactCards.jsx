import React from "react";

const contact = () => {
  return (
    <>
      <div
  className={` p-5  flex flex-col gap-10
    `}
>
        <div
          className={`flex items-center  gap-1 border rounded-2xl w-fit px-2 border-gray-500 font-sans`}
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
            className={`card-link btn px-3 py-2 w-fit rounded-full transition duration-300 flex items-center gap-2 text-center font-sans bg-gray-400 text-white hover:bg-gray-300 hover:text-black `}
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
