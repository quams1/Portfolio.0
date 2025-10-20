import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Sidebar from './Sidebar.jsx'
import Infos from './Infos.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Facts from './Facts.jsx'
import Contact from './Contact.jsx'


function App() {
  return (
    <>
      <div className="pattern-overlay" />
      <Sidebar />
      <Header />
      {/* Anchor for top/home */}
      <div id="home" className="section" />

      <section id="about" className="section">
        <Infos />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="facts" className="section">
        <Facts />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
      <p style={{color:'white'}}>All rights reserved © 2025 Yasser Yamnaine</p>
    </>
  )
}

export default App;
