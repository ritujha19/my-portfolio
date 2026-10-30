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
  IconLoader,
  IconCircleCheck,
  IconProgressAlert,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function MessageForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // dialog states for send message status
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanedData = {
      name: formData.name.trimStart().toUpperCase(),
      email: formData.email.trim().toLowerCase(),
      subject: formData.subject,
      message: formData.message,
    };
    console.log("Form submitted", cleanedData);
    try {
      setOpen(true);
      setLoading(true);
      setConfirmed(false);
      setError(false);

      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });
      await response.json();

      setLoading(false);
      setConfirmed(true);
      setformData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      setConfirmed(false);
      setError(true);
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
          type="submit"
          disabled={loading}
          className="group/btn relative h-10 w-full rounded-md bg-gray-200 px-3 py-2 font-medium text-black dark:bg-zinc-900 dark:text-white"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        <BottomGradient />

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
      <Dialog open={open} onClose={() => {}} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-zinc-900 p-6 text-white shadow-xl">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <IconLoader className="h-10 w-10 animate-spin" />
                <h3 className="text-xl font-semibold">Sending Message...</h3>
                <p className="text-sm text-gray-400">
                  Please wait while I deliver your message.
                </p>
              </div>
            ) : confirmed ? (
              <div className="flex flex-col items-center gap-4">
                <IconCircleCheck className="h-10 w-10 text-green-500" />

                <h3 className="text-xl font-semibold">Message Sent!</h3>

                <p className="text-sm text-gray-400 text-center">
                  Thank you for reaching out. I'll get back to you soon.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-green-600 px-4 py-2"
                >
                  Close
                </button>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center gap-4">
                <IconProgressAlert className="h-10 w-10 text-red-500" />

                <DialogTitle className="text-xl font-semibold text-red-400">
                  Failed to Send
                </DialogTitle>

                <p className="text-center text-gray-400">
                  Something went wrong while sending your message. Please try
                  again later.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-red-600 px-4 py-2"
                >
                  Close
                </button>
              </div>
            ) : null}
          </DialogPanel>
        </div>
      </Dialog>
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
