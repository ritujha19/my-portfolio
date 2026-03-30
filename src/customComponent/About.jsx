// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React from "react";
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
        <div className="text-3xl md:text-9xl font-bold dark:text-white text-center">
          About Me
        </div>
        <div className="font-extralight text-base md:text-4xl font-mono dark:text-neutral-200 py-4">
         let's get started to know me better!
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const About = () => {
  return (
    <>
    <AuroraBackgroundDemo/>
      <div className="flex justify-between items-center gap-10 px-30 bg-neutral-900">
        <div className="w-150 text-2xl">
          I am a passionate Full-Stack Developer learner with a strong interest
          in building interactive and user-friendly web applications. <br/><br/>
          I have worked with HTML, CSS, JavaScript, Bootstrap, and database
          technologies, and I am currently learning React and Node.js to develop
          complete full-stack applications.
          <br/> <br/>I focus on improving my development
          skills by building practical projects and learning modern web
          technologies. I am looking for an opportunity where I can start my
          professional journey as a developer and continue growing my technical
          expertise.
        </div>
      </div>
    </>
  );
};

export default About;
