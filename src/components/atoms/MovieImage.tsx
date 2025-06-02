import React from 'react';

interface MovieImageProps {
  src: string;
  alt: string;
}

const MovieImage: React.FC<MovieImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="img-fluid rounded shadow" />
);

export default MovieImage;
