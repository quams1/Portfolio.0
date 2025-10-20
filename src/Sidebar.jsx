import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#facts" onClick={toggleSidebar}>About</a>
          <a href="#skills" onClick={toggleSidebar}>Skills</a>
          <a href="#projects" onClick={toggleSidebar}>Projects</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
