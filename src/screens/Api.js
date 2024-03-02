// api.js
import axios from 'axios';

const API_URL = 'https://vasga-floze.github.io/docs-api-book/index.html';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const fetchLibros = async () => {
  try {
    const response = await axiosInstance.get('/libros');
    return response.data;
  } catch (error) {
    console.error('Error al obtener libros:', error);
    throw error;
  }
};

export const agregarLibro = async (nuevoLibro) => {
  try {
    const response = await axiosInstance.post('/libros', nuevoLibro);
    return response.data;
  } catch (error) {
    console.error('Error al agregar libro:', error);
    throw error;
  }
};

export const eliminarLibro = async (id) => {
  try {
    const response = await axiosInstance.delete(`/libros/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    throw error;
  }
};

// Y así sucesivamente para las funciones de modificación y otras operaciones
