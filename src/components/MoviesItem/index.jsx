import React from "react";
import "../../styles/components/MoviesItem/styles.css";
import { MdImageNotSupported } from "react-icons/md";
import { RiZoomInFill } from "react-icons/ri";

const MoviesItem = ({ movie, actionmodal }) => {
  const { poster_path, original_title, release_date, id } = movie;
  return (
    <article onClick={() => actionmodal(id)} className="movies-item">
      <div className="hover">
        <RiZoomInFill />
      </div>
      <div className="movies-item-image">
        {poster_path ? (
          <img
            src={poster_path ? poster_path : "/images/not-found.jpg"}
            alt="Movie Poster"
          />
        ) : (
          <div className="not-found-div">
            <MdImageNotSupported />
          </div>
        )}
      </div>
      <h3 className="movies-item-title">{original_title}</h3>
      <h4 className="movies-item-date">{release_date}</h4>
    </article>
  );
};

export default MoviesItem;
