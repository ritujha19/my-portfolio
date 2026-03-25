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
        description="a backend-focused demo project inspired by Airbnb, created while learning backend development."
        techStack={["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"]}
        features={[
          "Designed database schemas & relationships",
          "Implemented listing and booking logic",
          " Managed session-based user flow",
          "Added validations and error handling",
        ]}
        githubLink="https://github.com/ritujha19/StayYatra"
        liveLink="https://stayyatra.onrender.com/"
      />
    </>
  );
};

export default Projects;
