import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <p>{movie.Year}</p>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
        alt={movie.Title}
      />
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
      <Link to={`/movie/${movie.imdbID}`}>
      <p><strong>IMDb ID:</strong> {movie.imdbID}</p>
        <button>View Details</button>
      </Link>
    </div>
  );
};
export default MovieCard;
