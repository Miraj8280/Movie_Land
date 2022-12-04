import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=18989aff";

// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title, year) => {
    // call our API
    const response = await fetch(`${API_URL}&s=${title}`);

    // data about the movie
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Dilwale");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>


      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

        <h3> Made with <span className="heart"> ❤ </span> by Miraj Asraf </h3>
    </div>
  );
};

export default App;
