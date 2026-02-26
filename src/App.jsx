import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footor from './components/Footor'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
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
