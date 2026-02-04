import React from 'react';
import './Welcome.css';

export default function Welcome({ onStart }) {
  return (
    <div className="terminal-window">
      {/* Barra superior estilo ventana de sistema */}
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">bash — alvaro@portfolio — 80x24</div>
      </div>

      <div className="terminal-body">
        <div className="scanline"></div>
        
        <div className="output-section">
          <p className="line"><span className="prompt">guest@alvaro-portfolio:~$</span> sudo systemctl status access-gate</p>
          <p className="line response">[SUCCESS] Service "access-gate" is running...</p>
          
          <p className="line"><span className="prompt">guest@alvaro-portfolio:~$</span> cat info_alvaro.txt</p>
          <div className="ascii-art">
             _   _   _   _   _   _  
            / \ / \ / \ / \ / \ / \ 
           ( A | L | V | A | R | O )
            \_/ \_/ \_/ \_/ \_/ \_/ 
          </div>
          
          <p className="description">
            IDENTIFICACIÓN REQUERIDA. Este terminal contiene acceso directo al 
            Kernel de proyectos de Álvaro Bermúdez Romero.
            Login necesario para continuar.
            Puedes crear una cuenta nueva o iniciar sesión si ya tienes una.
          </p>
        </div>

        <div className="login-trigger">
          <p className="line">
            <span className="prompt">guest@alvaro-portfolio:~$</span> ./init_auth_process.sh
          </p>
          <button className="terminal-button" onClick={onStart}>
            EXECUTING LOGIN_SYSTEM... [ CLICK TO PROCEED ]
          </button>
        </div>
      </div>
    </div>
  );
}