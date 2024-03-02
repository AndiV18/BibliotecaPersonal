import React from 'react';
import './Header.model.css'; // Importar el archivo de estilos CSS
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className="header">
      <h1>Biblioteca Digital </h1>
      <Navbar/>
    </header>
  );
}

export default Header;
