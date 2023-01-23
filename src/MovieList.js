import React, { useState, useContext } from "react";

import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies, value] = useContext(MovieContext);
  return (
    <>
      {value}
      {movies.map((movie, index) => (
        <>
          <Movie key={movie.id} name={movie.name} price={movie.price} />
        </>
      ))}
    </>
  );
};

export default MovieList;
