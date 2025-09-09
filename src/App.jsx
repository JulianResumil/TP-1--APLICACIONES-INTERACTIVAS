
import './App.css';
import bgImage from './assets/Imagen-Inicio.png';
import { useState } from 'react';

import Registro from './Registro';
import Footer from './Footer';

function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <div className="main-container">
      <header className="header">
        <h1>Nombre del Proyecto</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#" onClick={() => setPagina('inicio')}>Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contactanos</a></li>
          </ul>
        </nav>
      </header>
      {pagina === 'inicio' ? (
        <main className="main-content">
          <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', textShadow: '0 2px 8px #0008'}}>Bienvenido</h2>
          <p style={{maxWidth: 600, fontSize: '1.2rem', marginBottom: '2rem', textShadow: '0 2px 8px #0008'}}>
            Este proyecto es una plataforma interactiva desarrollada para la materia Aplicaciones Interactivas. Aquí podrás explorar funcionalidades, registrarte y conocer más sobre nuestro equipo y objetivos.
          </p>
          <button className="register-btn" onClick={() => setPagina('registro')}>Registrarse</button>
        </main>
      ) : (
        <Registro />
      )}
  <Footer />
    </div>
  );
}

export default App;
