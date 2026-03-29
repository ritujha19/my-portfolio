import React from "react";
import Contact from "./cards/ContactCards";
import DownloadCv from "./cards/DownloadCv";
import Projects from "./Projects";
import { HoverEffect } from "../components/card-hover-effect";
import { TextHoverEffect } from "../components/text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className=" flex items-center justify-center">
      <TextHoverEffect />
    </div>
  );
}

const items = [
  {
    content: <Contact darkMode={true} />,
    link: "#contact",
  },
  {
    content: <DownloadCv darkMode={true} />,
    link: "#download-cv",
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="flex flex-row">
      <HoverEffect items={items} />
    </div>
  );
}

const Hero = () => {
  return (
    <>
      <div className="w-full h-full text-center p-4" id="Home">
        <p className="text-2xl mt-20">Hi, I'm</p>
        <TextHoverEffect text="RITU JHA" className="bold " />
        <p className="text-3xl text-gray-300 pb-5">
          Exploring Full-Stack Development |
        </p>
        <p className="text-5xl pb-3 font-mono text-gray-500">
          building web applications and
        </p>
        <p className="text-3xl italic pt-3 font-mono">
          expanding into full stack development.
        </p>
      </div>
      <CardHoverEffectDemo />
      <div>
        <Projects />
      </div>
    </>
  );
};

export default Hero;
