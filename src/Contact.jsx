import React from "react";

function Contact() {
    return (
        <>
        <div style={{borderTop:'white solid 1px', paddingTop:'20px', textAlign:'center'}}>
            <h3 style={{color:'white', fontSize:'1.5em'}}>Don't hesitate to contact me :)</h3>
            
            <div className="social-icons" style={{display:'flex', justifyContent:'center', gap:'30px', marginTop:'20px', paddingBottom:'30px'}}>
                {/* GitHub */}
                <a href="https://github.com/quams1" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                         alt="GitHub" 
                         style={{width:'50px', height:'50px', transition:'transform 0.3s ease', cursor:'pointer'}}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/yamnaine-yasser-b44643329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                         alt="LinkedIn" 
                         style={{width:'50px', height:'50px', transition:'transform 0.3s ease', cursor:'pointer'}}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </a>
                
                {/* Email (using a mail icon) */}
                <a href="mailto:oy_yamnaine@esi.dz" style={{textDecoration:'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"
                         style={{transition:'transform 0.3s ease', cursor:'pointer'}}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/notquamswastaken?igsh=NTE5N21jbmhycnJi" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"
                         style={{transition:'transform 0.3s ease', cursor:'pointer'}}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                </a>
                
                {/* Discord */}
                <a href="https://discord.com/users/1271676041139720305" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="white"
                         style={{transition:'transform 0.3s ease', cursor:'pointer'}}
                         onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                </a>
                
            </div>
        </div>
        </>
    );
}

export default Contact;
