import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import SearchIcon from "../search.svg";

const API_URL = `${import.meta.env.VITE_OMDB_BASE_URL}/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`;
function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
    setLoading(false);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div>
      <h1>MovieSpace</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="content-area">
        {loading ? (
          <div className="empty"><h2>Loading...</h2></div>
        ) : movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty"><h2>No Movies Found</h2></div>
        )}
      </div>
    </div>
  );
}
export default Home;