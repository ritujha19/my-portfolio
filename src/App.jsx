import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Route, Routes } from "react-router";
import About from "./customComponent/About";
import Contact from "./customComponent/Contact";
import Footor from "./customComponent/Footor";
import Header from "./customComponent/Header";
import Hero from "./customComponent/Hero";
import Projects from "./customComponent/Projects";
import Skills from "./customComponent/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={
        darkMode
          ? "bg-dark min-h-screen text-white"
          : "bg-white min-h-screen text-gray-900"
      }
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footor />
    </div>
  );
}

export default App;
