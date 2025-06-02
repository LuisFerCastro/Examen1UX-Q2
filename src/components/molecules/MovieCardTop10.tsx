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
       className="hbo-number"
  style={{
    fontSize: '6rem',
    fontWeight: 900,
    color: '#555', // gris oscuro
    marginRight: '15px',
    opacity: 1,
    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.9)', // sombra negra fuerte
    lineHeight: 1,
    userSelect: 'none',
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

