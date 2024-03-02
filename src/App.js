// App.js
import React from 'react';
import Header from './componentes/Header';
import Carousel from './screens/Carousel';
import './App.css'
//import Navbar from './componentes/Navbar';
import LibreriaPersonal from './screens/LibreriaPersonal';
import Footer from './componentes/Footer';
import Autores from './screens/Autores';
import AgregarLibro  from './screens/AgregarLibro';

const App = () => {
  const slides = [
    'https://et7hygnd3ye.exactdn.com/storage/alas-de-hierro-libro.jpg',
    'https://coolhuntermx.com/wp-content/uploads/2021/04/alfons-morales-YLSwjSy7stw-unsplash.jpg',
    'https://www.fmdos.cl/wp-content/uploads/2022/05/los-siete-maridos-de-evelyn-hugo.jpg',
    'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/02/herder-mexico-libreria.jpg',
    'https://i.ytimg.com/vi/fe3QU-3o1TI/maxresdefault.jpg'
  ];
  return (
    <div>
      <Header />
      

      <Carousel slides={slides} />

      <Autores/>

      <LibreriaPersonal /> 
      <AgregarLibro/>

      <Footer />
     
    
    </div>
  );
};

export default App;
