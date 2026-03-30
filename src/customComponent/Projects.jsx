/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "./cards/ProjectCard";
import { motion } from "motion/react";
import { AuroraBackground } from "../components/aurora-background";

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
         <div id="Projects" >
        <h1 className="font-[Space Grotesk]"> MY WORKS</h1>
      </div>
        </div>
       
      </motion.div>
    </AuroraBackground>
  );
}


const Projects = () => {
  return (
    <>
    <AuroraBackgroundDemo/>
      
      <div className="flex flex-col gap-5  justify-center bg-neutral-900 ">
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
          techStack={[
            "HTML",
            "CSS",
            "JavaScript",
            "swiper.js",
            " Font Awesome",
          ]}
          features={[
            "Built a single-page café website with Hero, About, Menu and etc.",
            "Implemented responsive navbar with smooth scrolling anchor links.",
            "Created marketing content and CTAs for Hero and About sections.",
            "Developed testimonial section to display customer reviews for social proof.",
          ]}
          githubLink="https://github.com/ritujha19/coffee-cafe.git"
          demoLink="https://ritujha19.github.io/coffee-cafe/"
          images={["/Screenshot 3.png", "/Screenshot 4.png"]}
        />
        <ProjectCard
          title="password generator"
          description="A simple and customizable password generator built with React.js.
It allows users to generate secure passwords with options for length, numbers, symbols, uppercase, and lowercase letters."
          features={[
            "Generate random secure passwords",
            "Adjustable password length",
            "Include/exclude: numbers, symbols, uppercase, and lowercase letters",
            "One-click copy to clipboard functionality",
            "Responsive and user-friendly UI",
          ]}
          techStack={["React.js", "JavaScript (ES6+)", "CSS3", "Clipboard API"]}
          githubLink="https://github.com/ritujha19/password-generator.git"
          demoLink="https://ritujha19.github.io/password-generator/"
          images={["/Screenshot 5.png"]}        />
      </div>
    </>
  );
};

export default Projects;
