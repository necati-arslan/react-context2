import React from "react";
import { useContext } from "react";

import { MovieContext } from "./MovieContext";

const Movie = ({ name, price }) => {
  const [movies, setMovies, value] = useContext(MovieContext);
  console.log(value);

  return (
    <>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </>
  );
};

export default Movie;
