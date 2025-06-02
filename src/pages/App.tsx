import React from 'react';
import MovieCarrusel from '@/components/organismos/MovieCarrusel';

const App: React.FC = () => {
  return (
    <div className="container py-5 text-white min-vh-100">
        <img src="./images/ImagenTop10.png" alt="Top 10 Peliculas Del Dia" />
      <MovieCarrusel />
    </div>
  );
};

export default App;
