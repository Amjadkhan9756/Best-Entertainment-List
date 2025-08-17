import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HmovieDetal() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/addMovies") // fetch all movies
      .then((res) => {
        const foundMovie = res.data.find((m) => m._id === id);
        setMovie(foundMovie);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!movie) return <div className="text-center p-10">Movie not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="w-60 h-80 object-cover rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold text-center mb-4">{movie.title}</h1>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Duration: {movie.duration}</p>
      <p>Rating: {movie.rating}</p>
      <p>IMDb: {movie.imdbRating}</p>
      <p>Director: {movie.director}</p>
      <p>Writers: {movie.writers?.join(", ")}</p>
      <p>Actors: {movie.actors?.join(", ")}</p>
      <p>Actresses: {movie.actresses?.join(", ")}</p>
      <p>Story: {movie.story}</p>
    </div>
  );
}

export default HmovieDetal;
