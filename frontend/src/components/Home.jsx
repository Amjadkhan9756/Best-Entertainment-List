import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/addMovies")
      .then((res) => {
        console.log(res.data); 
        setMovies(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        <h1>Top Movies to Watch</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie._id}>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Duration: {movie.duration}</p>
              <p>Rating: {movie.rating}</p>
              <p>IMDB Rating: {movie.imdbRating}</p>
              <p>Metascore: {movie.metascore}</p>
              <p>Votes: {movie.votes}</p>
              <p>Director: {movie.director}</p>
              <p>Writers: {movie.writers.join(", ")}</p>
              <p>Actors: {movie.actors.join(", ")}</p>
              <p>Actresses: {movie.actresses.join(", ")}</p>
              <p>Story: {movie.story}</p>
              <img src={movie.imageUrl} alt={movie.title} width="150" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
