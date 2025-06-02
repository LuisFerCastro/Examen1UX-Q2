import React from 'react';
import MovieImage from '../atoms/MovieImage';
import MovieTitle from '../atoms/MovieTitle';
import { Movie } from './Top10Movies';

interface MovieCardTop10Props {
  movie: Movie;
  index: number;
}

const MovieCardTop10: React.FC<MovieCardTop10Props> = ({ movie, index }) => (
  <div className="d-flex align-items-end position-relative px-2" style={{ minHeight: '180px' }}>
    <h1
      className="fw-bold text-white"
      style={{
        fontSize: '4.5rem',
        opacity: 0.15,
        marginRight: '15px',
        userSelect: 'none',
        textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
        minWidth: '60px',
        lineHeight: 1,
      }}
    >
      {index + 1}
    </h1>

    <div className="text-center">
      <MovieImage src={movie.image} alt={movie.title} />
      <MovieTitle title={movie.title} />
    </div>
  </div>
);

export default MovieCardTop10;

