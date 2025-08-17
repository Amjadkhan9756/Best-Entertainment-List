import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/addMovies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>🎬 Top Movies to Watch</h1>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie._id}
            onClick={() => navigate(`/movie/${movie._id}`)}
          >
            <img src={movie.imageUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
