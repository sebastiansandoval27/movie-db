import React from "react";
import MoviesItem from "../MoviesItem";
import "../../styles/components/MoviesGrid/styles.css";

const MoviesGrid = ({ movies, actionmodal }) => {
  return (
    <div className="movies-grid">
      {movies &&
        movies.map((movie) => {
          return (
            <MoviesItem
              actionmodal={actionmodal}
              key={movie.id}
              movie={movie}
            />
          );
        })}
    </div>
  );
};

export default MoviesGrid;
