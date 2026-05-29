// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../components/aurora-background";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { MessageForm } from "./cards/MessaageForm";
 
const words = `I’m currently learning full stack development and open to internships, collaborations, and project opportunities. Feel free to reach out anytime.
`;
 
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words}/>;
}

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
          Contact Me
        </div>
        <div className="font-extralight text-base md:text-4xl font-mono dark:text-neutral-200 py-4 text-center">
          let's connect <br/><span className="text-gray-400 text-xl">and get in touch with me</span>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const Contact = () => {
  return (
    <>
    <AuroraBackgroundDemo/>
    <div className="flex flex-row gap-4 items-center justify-around py-40 dark:bg-neutral-900 dark:text-white bg-neutral-50 text-black" >
        <div className="w-150 h-full text-left pl-20 text-3xl font-serif grid grid-cols-1 gap-4" data-aos="fade-right" data-aos-delay="100" >
            <TextGenerateEffectDemo/>
            <img src="/public/ChatGPT Image May 29, 2026, 08_18_12 PM.png" alt="developer" className="w-120 h-100 object-contain" data-aos="fade-right" data-aos-delay="150"/>
        </div>
        <div className="pr-30" data-aos="fade-left" data-aos-delay="100">
            <MessageForm />
        </div>
    </div>
    </>
  )
}

export default Contact
