"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";

const Skills1= [
  {
    title: "HTML5",
  },
  {
    title: "CSS3",
  },
  {
    title: "JavaScript",
  },
  {
    title: "ReactJs",
  },
  {
    title: "Tailwind CSS",
  },
  {
    title: "Bootstrap",
  },
  
  { title: "Responsive Design" },
];
const Skills2 = [
  {
    title: "Git",
  },
  {
    title: "GitHub",
  },
  {
    title: "Node.js",
  },
  {
    title: "Express.js",
  },
  {
    title: "EJS",
  },
  {
    title: "MongoDB",
  },
  {
    title: "User Authentication",
  },
  {
    title: "Session Management",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <>
    <h2 className="text-6xl font-bold text-center mt-30 mb-10 font-mono" data-aos="zoom-in">Skills & Technologies</h2>
    <p className="text-lg text-center text-gray-600 dark:text-gray-400 font-sans" data-aos="zoom-in" data-aos-delay="200">
      Tools and technologies I work with.
    </p>
    <div className="h-100 rounded-md flex flex-col antialiased bg-neutral-200 dark:bg-neutral-900 dark:bg-grid-white/[0.05] items-center justify-center">
      <InfiniteMovingCards items={[...Skills1, ...Skills1]} direction="left" speed="medium" />
      <InfiniteMovingCards items={[...Skills2, ...Skills2]} direction="right" speed="medium" />
    </div>
    </>
     
  );
}


export default InfiniteMovingCardsDemo;
