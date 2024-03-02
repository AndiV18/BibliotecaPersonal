import React, { useState, useEffect } from 'react';
import './Carrusel.model.css'; // Archivo de estilos CSS

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const slideStyle = {
    transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
  };

  return (
    <div className="carousel">
      <div className="slides" style={slideStyle}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {typeof slide === 'string' ? (
              <img src={slide} alt={`Slide ${index + 1}`} />
            ) : (
              slide
            )}
          </div>
        ))}
      </div>
      <button onClick={goToPrevSlide} className="prev">
        Prev
      </button>
      <button onClick={goToNextSlide} className="next">
        Next
      </button>
    </div>
  );
};

export default Carousel;
