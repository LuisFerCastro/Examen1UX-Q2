import React from 'react';

interface MovieTitleProps {
  title: string;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ title }) => (
  <h5 className="text-white text-center mt-2">{title}</h5>
);

export default MovieTitle;
