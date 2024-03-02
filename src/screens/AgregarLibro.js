import React, { useState } from 'react';
import { agregarLibro } from './Api.js';

const BuscarAgregarLibro = () => {
  const [busqueda, setBusqueda] = useState('');
  const [libroEncontrado, setLibroEncontrado] = useState(null);

  const buscarLibro = async () => {
    try {
      // Aquí realizarías la búsqueda utilizando tu API
      // Supongamos que la búsqueda devuelve un objeto libro encontrado
      const libroEncontrado = {
        id: 1,
        titulo: 'Ejemplo de Libro',
        autor: 'Autor Ejemplo',
        // Otros detalles del libro
      };
      setLibroEncontrado(libroEncontrado);
    } catch (error) {
      console.error('Error al buscar libro:', error);
    }
  };

  const handleAgregarLibro = async () => {
    try {
      if (libroEncontrado) {
        // Agregar el libro a la biblioteca
        await agregarLibro(libroEncontrado);
        // Limpiar el estado después de agregar el libro
        setLibroEncontrado(null);
        setBusqueda('');
        alert('Libro agregado a la biblioteca exitosamente');
      } else {
        alert('No se ha encontrado un libro para agregar');
      }
    } catch (error) {
      console.error('Error al agregar libro:', error);
    }
  };

  return (
    <div>
      {/* Formulario de búsqueda */}
      <input
        type="text"
        placeholder="Buscar libro por título o autor"
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />
      <button onClick={buscarLibro}>Buscar</button>

      {/* Mostrar el libro encontrado */}
      {libroEncontrado && (
        <div>
          <h2>{libroEncontrado.titulo}</h2>
          <p>Autor: {libroEncontrado.autor}</p>
          {/* Otros detalles del libro */}
          <button onClick={handleAgregarLibro}>Agregar a mi biblioteca</button>
        </div>
      )}
    </div>
  );
};

export default BuscarAgregarLibro;
