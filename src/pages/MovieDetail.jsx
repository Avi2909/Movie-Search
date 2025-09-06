import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "http://www.omdbapi.com/?apikey=f44bcaf8";

function MovieDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`${API_URL}&i=${id}&plot=full`);
      const data = await res.json();
      setDetails(data);
    };
    fetchDetails();
  }, [id]);

  if (!details) return <h2>Loading...</h2>;

  return (
    <div className="description-box">
      <h2>{details.Title}</h2>
      <p><strong>Released:</strong> {details.Released}</p>
      <p><strong>IMDb:</strong> ⭐ {details.imdbRating}</p>
      <p>{details.Plot}</p>
      <Link to="/"><button className="back-button">Back to Search</button></Link>
    </div>
  );
}
export default MovieDetail;
