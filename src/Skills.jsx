import React from 'react';

function Skills() {
  return (
    <>
      <h1 className="skills-title" style={{borderTop:'white 2px solid'}}>Skills</h1>
      <div className="skills-list" >
        {/* First row: HTML, CSS, JS, React */}
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>HTML</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>CSS</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>JavaScript</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>React</p>
        </div>
        {/* Second row: Python, Java */}
        <div className="infos" style={{clear: 'both'}}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>Python</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>Java</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>C language</p>
        </div>
        < br  />
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="GIT" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>GIT</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>Canva</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>Figma</p>
        </div>
        <div className="infos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" style={{width:'36px',height:'36px',marginBottom:'6px'}} />
          <p>Linux(Ubuntu , currently using mint)</p>
        </div>
      </div>
    </>
  );
}

export default Skills;