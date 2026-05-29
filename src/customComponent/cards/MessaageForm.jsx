"use client";
import React from "react";
import { useState } from "react";
import { Label } from "../../components/label";
import { Input } from "../../components/input";
import { cn } from "../../lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMailgun,
} from "@tabler/icons-react";

export function MessageForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Response from backend:", data);
      alert("Message sent successfully!");
      setformData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Let's get in touch
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Have questions or want to collaborate? Fill out the form below and I'll
        get back to you as soon as possible.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Name:</Label>
            <Input
              id="name"
              name="name"
              placeholder="Tyler"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="user@gmail.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject:</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="subject- internship,collaboration,project discussion"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Message:</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Submit
          <BottomGradient />
        </button>

        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-row gap-4 items-center justify-center">
          <a
            className="group/btn shadow-input relative  h-10 w-fit text-center py-2 rounded-md bg-gray-200 text-black px-3 font-medium dark:text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            href="https://github.com/ritujha19"
            target="_blank"
          >
            <IconBrandGithub />
            <BottomGradient />
          </a>
          <a
            className="group/btn shadow-input relative  h-10 w-fit text-center py-2  space-x-2 rounded-md bg-gray-200 text-black px-3 font-medium dark:text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            href=" https://www.linkedin.com/in/ritu-rani-b18992322"
            target="_blank"
          >
            <IconBrandLinkedin />

            <BottomGradient />
          </a>
          <a
            className="group/btn shadow-input relative h-10 w-fit text-center py-2 rounded-md bg-gray-200 text-black px-3 font-medium dark:text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            href="mailto:ritu05491@gmail.com"
            target="_blank"
          >
            <IconBrandMailgun />

            <BottomGradient />
          </a>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
