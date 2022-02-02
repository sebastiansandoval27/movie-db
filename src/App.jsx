import { useEffect, useState } from "react";
import "./styles/app.css";
import Header from "./components/Header";
import MoviesGrid from "./components/MoviesGrid";
import Modal from "./components/Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieById, setMovieById] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loadingImages, setLoadingImages] = useState(true);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    setLoadingImages(true);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=28c7247875b6ef21936f077470fecb16&page=${page}`;
    let resultMovies = await fetch(url);
    resultMovies = await resultMovies.json();
    resultMovies = resultMovies.results;

    resultMovies.map((movie) => {
      if (movie.poster_path) {
        movie.poster_path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
      }
      if (movie.backdrop_path) {
        movie.backdrop_path = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
      }
    });

    if (resultMovies && resultMovies.length > 0) {
      let currentMovies = [...movies];
      currentMovies = [...currentMovies, ...resultMovies];
      setMovies(currentMovies);
    }
    setTimeout(() => {
      setLoadingImages(false);
      setPage(page + 1);
    }, 1000);
  };

  const getMovieById = async (id) => {
    setLoadingImage(true);
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=28c7247875b6ef21936f077470fecb16`;
    let resultMovie = await fetch(url);
    resultMovie = await resultMovie.json();
    if (resultMovie.poster_path) {
      resultMovie.poster_path = `https://image.tmdb.org/t/p/original${resultMovie.poster_path}`;
    }
    if (resultMovie.backdrop_path) {
      resultMovie.backdrop_path = `https://image.tmdb.org/t/p/original${resultMovie.backdrop_path}`;
    }
    setMovieById(resultMovie);
    setLoadingImage(false);
  };

  useEffect(() => {
    getMovies(1);
  }, []);

  return (
    <main className="main">
      <Header />
      <section className="section-movies">
        <MoviesGrid
          movies={movies}
          actionmodal={(id) => {
            setShowModal(true);
            getMovieById(id);
          }}
        />
        {!loadingImage && (
          <div className="more">
            <button onClick={() => getMovies(page)}>Cargar más</button>
          </div>
        )}
      </section>
      <div
        className={`loading-images ${
          loadingImages ? "show-loading" : "hidden-loading"
        }`}
      >
        <img src="/images/logo.png" alt="Loader" />
      </div>
      {!loadingImage && (
        <Modal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          movie={movieById}
          loadingImage={loadingImage}
        />
      )}
    </main>
  );
}

export default App;
