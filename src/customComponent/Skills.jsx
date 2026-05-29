"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const Skills1 = [
    {
      title: "HTML5",
      iconName: "IconHtml5",
    },
    {
      title: "CSS3",
      iconName: "IconCss3",
    },
    {
      title: "JavaScript",
      iconName: "IconJavascript",
    },
    {
      title: "ReactJs",
      iconName: "IconReact",
    },
    {
      title: "Tailwind CSS",
      iconName: "IconTailwind",
    },
    {
      title: "Bootstrap",
      iconName: "IconBootstrap",
    },
    {
      title: "Responsive Design",
      iconName: "IconDesktop",
    },
  ];

  const Skills2 = [
    {
      title: "Git",
      iconName: "IconGit",
    },
    {
      title: "GitHub",
      iconName: "IconGithub",
    },
    {
      title: "Node.js",
      iconName: "IconNodejs",
    },
    {
      title: "Express.js",
      iconName: "IconServer",
    },
    {
      title: "EJS",
      iconName: "IconCode",
    },
    {
      title: "MongoDB",
      iconName: "IconMongodb",
    },
    {
      title: "User Authentication",
      iconName: "IconLock",
    },
    {
      title: "Session Management",
      iconName: "IconSession",
    },
  ];

  return (
    <>
      <h2 className="text-6xl font-bold text-center mt-30 mb-10 font-mono" data-aos="zoom-in">Skills & Technologies</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-400 font-sans" data-aos="zoom-in" data-aos-delay="200">
        Tools and technologies I work with.
      </p>
      <div className="h-80 rounded-md flex flex-col antialiased bg-neutral-200 dark:bg-neutral-900 dark:bg-grid-white/[0.05] items-center justify-center cursor-pointer">
        <InfiniteMovingCards items={[...Skills1, ...Skills1]} direction="left" speed="normal" />
        <InfiniteMovingCards items={[...Skills2, ...Skills2]} direction="right" speed="normal" />
      </div>
    </>
  );
}


export default InfiniteMovingCardsDemo;
