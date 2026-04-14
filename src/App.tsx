// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import ContactPage from './Components/Contact'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <section id="home">
              <Hero />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="about">
              <About />
            </section>
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App