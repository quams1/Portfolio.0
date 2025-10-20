import React from 'react';
function Projects() {
    return (<>
        <h1 className="skills-title">My Projects</h1>
        <div className="skills-list">
            <div className="infos" style={{width:'45%', minWidth:'240px', maxWidth:'340px', padding:'14px', fontSize:'0.95em', margin:'0', marginBottom:'20px'}}>
                
                <h3 style={{margin:'8px 0', fontSize:'0.95em'}}>
                    Simple To do list App 
                </h3>
                {/* You can add project details here */}
            </div>
            <div className="infos" style={{width:'45%', minWidth:'240px', maxWidth:'340px', padding:'14px', fontSize:'0.95em', margin:'0', marginBottom:'20px'}}>
                
                <h3 style={{margin:'8px 0', fontSize:'0.95em'}}>
                    Simple Qr code generator 
                </h3>
                {/* You can add project details here */}
            </div>
            <div className="infos" style={{width:'45%', minWidth:'240px', maxWidth:'340px', padding:'14px', fontSize:'0.95em', margin:'0', marginBottom:'20px'}}>
                <h3 style={{margin:'8px 0', fontSize:'0.95em'}}>Words Search in words Binary search trees algorithm (TPZ)</h3>
            </div>
        </div>
        </>
    );
}
export default Projects;