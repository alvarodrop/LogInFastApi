import React, { useEffect } from 'react';
import './Portfolio.css';

export default function Portfolio({ user, onLogout }) {
  useEffect(() => {
    // Lógica de resaltado original optimizada para React
    const skills = document.querySelectorAll('.portfolio-container .skills-list li');
    
    const handleMouseEnter = (e) => {
      const tech = e.target.getAttribute('data-tech');
      document.querySelectorAll(`.portfolio-container .tech-text[data-tech="${tech}"]`)
        .forEach(el => el.classList.add('highlight'));
    };

    const handleMouseLeave = (e) => {
      const tech = e.target.getAttribute('data-tech');
      document.querySelectorAll(`.portfolio-container .tech-text[data-tech="${tech}"]`)
        .forEach(el => el.classList.remove('highlight'));
    };

    skills.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      skills.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <nav className="navbar">
          <div className="logo">SYSTEM::ALVAR0</div>
          <ul className="nav-links">
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#sobre-mi">SOBRE_MÍ</a></li>
            <li><a href="#proyectos">PROYECTOS</a></li>
            <li className="user-tag">USER: {user?.username || 'ADMIN'}</li>
            <li><button onClick={onLogout} className="logout-btn">ACCESS_EXIT</button></li>
          </ul>
        </nav>
      </header>

      <div className="content-wrapper">
        <section id="inicio" className="hero">
          <div className="hero-content">
            <h1>¡Hola! Soy <span>Álvaro Bermúdez</span></h1>
            <p className="typing">
              Programador junior especializado en <strong>aplicaciones multiplataforma</strong> y <strong>desarrollo web</strong>.
            </p>
            {/* El cursor se añade mediante CSS en la clase terminal-status */}
            <div className="terminal-status">STATUS: ACCESS_GRANTED</div>
            <a href="cv_alvaro_bermudez-romero.pdf" className="btn-neon" target="_blank" rel="noreferrer">DESCARGAR_CV</a>
          </div>
        </section>

        <section id="sobre-mi" className="about">
          <h2>SOBRE_MÍ</h2>
          <div className="about-container">
            <p className="about-text">
              Soy graduado de 2º de DAM. Experto en <span className="tech-text" data-tech="Java">Java</span>, 
              <span className="tech-text" data-tech="Python">Python</span> y <span className="tech-text" data-tech="MySQL">MySQL</span>.
            </p>
            <div className="skills">
              <h3>TECNOLOGÍAS_DETECTADAS</h3>
              <ul className="skills-list">
                <li data-tech="Java">Java</li>
                <li data-tech="Python">Python</li>
                <li data-tech="MySQL">MySQL</li>
                <li data-tech="JavaScript">JavaScript</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="proyectos" className="projects">
          <h2>RECIENTES_PROYECTOS</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Fantasy Sports</h3>
              <p>Backend en Java con Hibernate y MySQL.</p>
              <div className="card-actions">
                <span className="tag">JAVA</span>
                <span className="tag">MYSQL</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Simulador Pokémon</h3>
              <p>RPG con JavaFX y Hibernate.</p>
              <div className="card-actions">
                <span className="tag">JAVAFX</span>
                <span className="tag">HIBERNATE</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="portfolio-footer">
        <p>© 2026 ALVARO BERMUDEZ ROMERO // PORT_GATE: 8080</p>
      </footer>
    </div>
  );
}