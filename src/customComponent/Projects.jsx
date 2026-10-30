/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { motion } from "motion/react";
import { AuroraBackground } from "../components/aurora-background";
import { div } from "framer-motion/client";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="w-full h-full text-3xl md:text-9xl mt-20 pb-6 dark:text-white text-center">
          <div id="Projects">
            <h1 className="font-[Space Grotesk]"> MY WORKS</h1>
            <p className="font-mono text-2xl pt-10">What I’ve done so far</p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const Projects = () => {
  return (
    <>
      <AuroraBackgroundDemo />

      <div className="flex flex-col gap-5  justify-center bg-neutral-50 dark:bg-neutral-900 ">
        <ProjectCard
          title="SAFE-W | Women's Safety App"
          description={
            <>
            <strong className="semi-bold">Your safety shouldn't start with an emergency.</strong> <br /> 
              SAFE-W is a women's safety mobile application designed to make emergency assistance, trusted-contact communication, and safety information more accessible. 
            </>
          }
          features={[
            "Quick access to India's emergency helpline (112)",
            "An AI-powered conversational assistant designed to provide contextual guidance and help users explore appropriate next steps",
            "Access information about women's rights and relevant safety resources",
            "Emergency Siren: Activate a siren sound to attract attention when needed",
            "Explore safety-related educational information and preparedness resources",
          ]}
          techStack={["React Native", "Expo SDK 54", "Expo Router", "NativeWind", "Firebase", "Node.js + Express", "Google Gemini API", "Expo Location", "Expo Audio"]}
          githubLink="https://github.com/ritujha19/SafeW.git"
          demoVideo="https://vimeo.com/1231766502?fl=ip&fe=ec"
          demoLink="https://safew.expo.app/download"
          images={["/Screenshot 5.png", "/Screenshot 6.png"]}
        />
        <ProjectCard
          title="StayYatra- Travel Booking Website"
          description={
            <>
              StayYatra is a full stack travel booking application that allows
              users to register, login and book hotels. <br />{" "}
              <strong className="semi-bold">note:</strong> It is a
              backend-focused demo project inspired by Airbnb, created while
              learning backend development.
            </>
          }
          techStack={[
            "Node.js",
            "Express",
            "MongoDB",
            "Bootstrap",
            "EJS",
            "Joi",
            "REST API",
            "Passport.js",
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
        <ProjectCard
          title="Morgenlicht Café – Landing Page"
          description="A responsive single-page website for a fictional German café, featuring a hero section, story-driven About section, curated menu highlights, testimonials, gallery, and table booking form."
          techStack={["HTML", "CSS", "JavaScript", "swiper.js", "Font Awesome"]}
          features={[
            "Built a single-page café website with Hero, About, Menu and etc.",
            "Implemented responsive navbar with smooth scrolling anchor links.",
            "Created marketing content and CTAs for Hero and About sections.",
            "Developed testimonial section to display customer reviews for social proof.",
          ]}
          githubLink="https://github.com/ritujha19/coffee-cafe.git"
          demoLink="https://ritujha19.github.io/coffee-cafe/"
          images={["/Screenshot 4.png", "/Screenshot 3.png"]}
        />
        
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center gap-6 p-4">
        <p> view more of my practice works by checking my github profile</p>
        <button className="px-2 py-2 rounded-xl bg-black text-white font-bold hover:bg-gray-600 dark:bg-white dark:text-black dark:hover:bg-gray-300 ">
          <a href="https://github.com/ritujha19">github profile</a>
        </button>
      </div>
    </>
  );
};

export default Projects;
