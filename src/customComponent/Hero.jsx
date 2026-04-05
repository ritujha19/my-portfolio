import React from "react";
import Contact from "./cards/ContactCards";
import DownloadCv from "./cards/DownloadCv";
import ProjectCard from "./cards/ProjectCard";
import { HoverEffect } from "../components/card-hover-effect";
import { TextHoverEffect } from "../components/text-hover-effect";
import { BackgroundBeams } from "../components/background-beams";
import Skills from "./Skills";

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
    <div className="flex flex-row" data-aos="fade-up-right" data-aos-delay="1000">
      <HoverEffect items={items} />
    </div>
  );
}

export function BackgroundBeamsDemo() {
  return (
    <div className="h-full w-full  bg-neutral-900 relative  antialiased">
      <div className="w-full h-full text-center p-4 relative z-10" id="Home" data-aos="fade-up">
        <p className="text-2xl mt-20">Hi, I'm</p>
        <TextHoverEffect text="RITU JHA" className="bold" />
        <p className="text-3xl text-gray-300 pb-5" data-aos="fade-up">
          Exploring Full-Stack Development |
        </p>
        <p className="text-5xl pb-3 font-mono text-gray-500" data-aos="fade-up" >
          building web applications and
        </p>
        <p className="text-3xl italic pt-3 font-mono" data-aos="fade-up" >
          expanding into full stack development.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

const Hero = () => {
  return (
    <>
      <BackgroundBeamsDemo />
      <CardHoverEffectDemo  />
        <ProjectCard className="pb-6"
        title="StayYatra- Travel Booking Website"
        description={
          <>
            StayYatra is a full stack travel booking application that allows
            users to register, login and book hotels.
          </>
        }
        techStack={[
          "Node.js",
          "Express",
          "MongoDB",
          "EJS",
        ]}
        features={[
          "User authentication",
          "Session management",
          "Hotel booking system",
          "Booking history",
          "Responsive design",
          "Database storage",
        ]}
        demoLink="https://stayyatra.onrender.com/"
        githubLink="https://github.com/ritujha19/StayYatra.git"
        images={["/Screenshot 1.png", "/Screenshot 2.png"]}
      />
      <div className="flex justify-center m-4">
  <a 
    href="/projects"
    className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-white hover:text-black transition"
  >
    View More Projects →
  </a>
</div>
<Skills />
    </>
  );
};

export default Hero;
