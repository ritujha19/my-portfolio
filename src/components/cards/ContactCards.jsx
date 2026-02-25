import React from "react";

const contact = () => {
  return (
    <>
      <div className="card border rounded-xl p-6 m-10 backdrop-blur-sm bg-transparent w-100 h-100 flex flex-col gap-10">
        <div>
          <p className="text-xs border p-2 rounded-2xl w-fit mb-4 font-sans text-gray-300">
            available for job opportunities
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="card-title text-4xl font-bold mb-4">
          Let’s Create Digital <hr className="text-gray-700 mt-2"/><span className="text-gray-500 font-mono text-2xl">Experiences Together.</span>
        </h2>
        <a href="mailto:ritu05491@gmail.com" className="card-link btn bg-gray-700 text-white px-6 py-3 w-fit rounded-full hover:bg-gray-600 transition duration-300">
          Mail Me
        </a>
        </div>
        <div id="socials">
          <a href="https://www.linkedin.com/in/ritu-rani-b18992322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8"></img></a>
        </div>
      </div>
    </>
  );
};

export default contact;
