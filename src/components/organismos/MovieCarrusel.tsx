import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MovieCardTop10 from '../molecules/MovieCardTop10';
import { top10Movies,Movie } from '../molecules/Top10Movies';

const MovieCarrusel: React.FC = () => {
  const slides: Movie[][] = [];

  for (let i = 0; i < top10Movies.length; i += 5) {
    const group = top10Movies.slice(i, i + 5);
    slides.push(group);
  }

  return (
    <Carousel indicators={false} controls={true} interval={null}>
      {slides.map((group, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div className="d-flex justify-content-center flex-wrap">
            {group.map((movie, i) => (
              <div className="col-6 col-sm-4 col-md-2" key={movie.id}>
                <MovieCardTop10 movie={movie} index={slideIndex * 5 + i} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieCarrusel;
