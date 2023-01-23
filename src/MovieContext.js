import React from "react";
import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Lord of the rings 1",
      price: 10,
      id: 1,
    },
    {
      name: "Lord of the rings 2",
      price: 20,
      id: 2,
    },
    {
      name: "Lord of the rings 3",
      price: 30,
      id: 3,
    },
  ]);
  const value = "hello";

  return (
    <MovieContext.Provider value={[movies, setMovies, value]}>
      {props.children}
    </MovieContext.Provider>
  );
};
