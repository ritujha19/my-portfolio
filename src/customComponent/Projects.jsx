import React from "react";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <>
      <div id="Projects" className="w-full h-full text-center p-4">
        <h1 className="w-full text-9xl">WORKS</h1>
      </div>
      <ProjectCard
        title="StayYatra- Travel Booking Website"
        description={<>StayYatra is a full stack travel booking application that allows users to register, login and book hotels. <br /> <strong className="semi-bold">note:</strong> It is a backend-focused demo project inspired by Airbnb, created while learning backend development.</>}
        techStack={["Node.js", "Express", "MongoDB", "Bootstrap", "EJS", "Joi", "REST API", "Passport.js"]}
        features={[
          "User authentication",
          "Session management",
          "Hotel booking system",
          "Booking history",
          "Responsive design",
          "Database storage"
        ]}
        demoLink ="https://stayyatra.onrender.com/"
        githubLink="https://github.com/ritujha19/StayYatra.git"
        thumbnail1 = "/Screenshot 1.png"
        thumbnail2 = "/Screenshot 2.png"

      />
      <ProjectCard
        title="Morgenlicht Café – Landing Page"
        description="A responsive single-page website for a fictional German café, featuring a hero section, story-driven About section, curated menu highlights, testimonials, gallery, and table booking form."
        techStack={["HTML", "CSS", "JavaScript", "swiper.js", " Font Awesome"]}
        features={[
          "Built a single-page café website with Hero, About, Menu and etc.",
          "Implemented responsive navbar with smooth scrolling anchor links.",
          "Created marketing content and CTAs for Hero and About sections.",
          "Developed testimonial section to display customer reviews for social proof.",
        ]}
        githubLink="https://github.com/ritujha19/coffee-cafe.git"
        demoLink="https://ritujha19.github.io/coffee-cafe/"
        thumbnail1="/Screenshot 4.png"
        thumbnail2="/Screenshot 3.png"
      />
    </>
  );
};

export default Projects;
