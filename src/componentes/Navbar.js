// Navigation.js
import React from 'react';
import './Navbar.module.css'; // Asegúrate de que la ruta sea correcta

function Navbar() {
  return (
    <nav className="navbar"> {/* Agregamos la clase de estilo */}
      <ul>
        <li>
          <a href="../screens/LibreriaPersonal.js" className="nav-link">Biblioteca</a> {/* Agregamos la clase de estilo */}
        </li>
        <li>
          <a href="/about" className="nav-link">Libro de la semana</a> {/* Agregamos la clase de estilo */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
