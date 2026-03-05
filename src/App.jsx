import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import About from './components/About'
import Contact from './components/Contact'
import Footor from './components/Footor'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, [])
  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }
  return (
    <div className={darkMode ? 'bg-dark min-h-screen text-white' : 'bg-linear-to-br from-gray-50 to-gray-100 min-h-screen text-gray-900'}>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      < Hero />
      < About />
      <Skills/>
      < Projects />
      {/* <Contact /> */}
      <Footor/>
    </div>
  )
}

export default App
