import React from "react";

import "../../styles/components/Modal/styles.css";
import { MdFavoriteBorder, MdImageNotSupported } from "react-icons/md";
import { HiOutlineEyeOff } from "react-icons/hi";
import { RiEye2Line } from "react-icons/ri";
import { BiUpArrow } from "react-icons/bi";

const Modal = ({ showModal, closeModal, movie, loadingImage }) => {
  const { backdrop_path, poster_path } = movie;

  return (
    <div className={`modal ${showModal && movie ? "show" : "hidden"}`}>
      <img className="backdrop" src={backdrop_path} alt="Backdrop" />
      <div className="modal-content">
        <div className="content">
          <span className="close-icon" onClick={() => closeModal()}>
            X
          </span>
          <div className="image-text">
            {poster_path && !poster_path.includes("null") ? (
              <img src={poster_path} alt="Movie" />
            ) : (
              <div className="not-found-div">
                <MdImageNotSupported />
              </div>
            )}
            <div className="image-text-content">
              <div className="general">
                <h2 className="movie-title">{movie.title}</h2>
                <div className="stats">
                  <span className="date">{movie.release_date}</span>
                  <span className="divider">•</span>
                  <span className="duration">{movie.runtime}</span>
                  <span className="divider">•</span>
                  <span className="genres">
                    {movie.genres &&
                      movie.genres.map((genre, index) => {
                        if (index === movie.genres.length - 1) {
                          return <span key={genre.id}>{genre.name}</span>;
                        } else {
                          return (
                            <span key={genre.id}>{`${genre.name} /`}</span>
                          );
                        }
                      })}
                  </span>
                  <span className="divider">•</span>
                  <span className="calification">{movie.vote_average}/10</span>
                  <div className="extra">
                    U<span className="extra-circle"></span>
                  </div>
                </div>
                <div className="overview">
                  <p>{movie.overview}</p>
                </div>
              </div>
              <div className="buttons">
                <div className="buttons-content">
                  <div className="icons">
                    <span>
                      <MdFavoriteBorder />
                      <h4>Añadir a favoritos</h4>
                    </span>
                    <span>
                      <HiOutlineEyeOff />
                      <h4>No visto</h4>
                    </span>
                  </div>
                  <div className="btns">
                    <div className="btn-watch">
                      <button>Ver ahora</button>
                      <span className="icon">
                        <RiEye2Line />
                      </span>
                    </div>
                    <button className="btn-blue">Ver trailer</button>
                    <button className="btn-blue">Descarga</button>
                    <button className="btn-white active">720p</button>
                    <button className="btn-white">1080p</button>
                    <button className="btn-white">2160p</button>
                  </div>
                </div>
                <div className="languages">
                  <div className="subtitle">
                    <h3>Subtitle</h3>
                    <span>
                      <div className="not-found">X</div>
                      <BiUpArrow />
                    </span>
                  </div>
                  <div className="audio">
                    <h3>Audio Language</h3>
                    <span>
                      <img src="/icons/flag.png" alt="icono" className="flag" />
                      <BiUpArrow />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
