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
        <div className="text-3xl md:text-9xl dark:text-white text-center">
          About Me
        </div>
        <div className="font-extralight text-base md:text-3xl font-mono dark:text-neutral-200 py-4">
          let's get to know about me a little more
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const About = () => {
  return (
    <>
      <AuroraBackgroundDemo />
      <div className="flex justify-between items-center gap-10 dark:bg-neutral-900 dark:text-white bg-neutral-50 text-black py-10">
        <div
          className="w-200 h-full text-left pl-20"
          id="About"
          data-aos="fade-up"
        >
          <div className="200">
            <h1 className="text-4xl pb-10 font-mono dark:text-white text-black">
              Hey! Nice to meet you,I am{" "}
              <span className="font-serif italic gradient-text-animated">
                Ritu
              </span>
            </h1>
          </div>
          <div className="w-150 text-lg font-sans text-gray-500">
            <p className="pb-5">
              My name is Ritu Jha, and I am a BA English Honours student who
              chose to step into the world of web development out of pure
              curiosity and passion. Coming from a humanities background, my
              journey into tech has been unconventional — full of challenges,
              restarts, and small wins that kept me going.
            </p>
            <p className="pb-5 ">
              I have built knowledge in HTML, CSS, JavaScript, Bootstrap, and
              Tailwind CSS for front-end development, along with Node.js,
              Express, EJS, and MongoDB on the back-end. I am currently learning
              React and also exploring 3D design with Blender to discover where
              my creative and technical interests meet.
            </p>
            <p>
              I won't claim to be perfect — I am still learning, still figuring
              things out, and growing one step at a time. What I do bring is an
              open mind, a willingness to keep trying, and a genuine interest in
              building things that work and look good.
            </p>
          </div>
        </div>
        <div>
          <p>showing my only one creation from blender </p>
        </div>
      </div>
    </>
  );
};

export default About;
