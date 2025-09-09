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

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0c2629d5, #302b63, #24243e)",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #66baeaff 0%, #744ba2d7 100%)",
          color: "#fff",
          width: "70%",
          height: "100%",
          margin: "0 auto",
          marginTop: "15px",
          paddingTop: "15px",
          borderRadius: "30px",
          boxShadow: "12px 12px 10px black",
        }}
      >
        <div className="row">
          <div className="col">
            <img
              style={{
                paddingLeft: "16px",
                paddingBottom: "3px",
                borderRadius: "30px",
                boxShadow: "6px 6px 8px black",
              }}
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
          <div className="col">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "800",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "20px",
                letterSpacing: "-1px",
                lineHeight: "1.2",
                textShadow: "0 0 80px rgba(102, 126, 234, 0.5)",
              }}
            >
              {movie.title}
            </h1>
            <div
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                display: "flex", // keep only one
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
                color: "#fff",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 30px rgba(254,124,0,0.4)",
              }}
            >
              IMDb: {movie.imdbRating}
            </div>
<br></br>
            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                display: "flex",
                padding: "12px",
                borderRadius: "50px",
                fontWeight: "700",
                color: "#fff",
                gap: "10px",
                boxShadow: "0 10px 30px rgba(254,124,0,0.4)",
                alignItems: "center", // ensures ⭐ aligns nicely with text
              }}
            >
              Rating: ⭐ {movie.rating}
            </p>

            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                display: "flex", // keep only one
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
                color: "#fff",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 30px rgba(254,124,0,0.4)",
              }}
            >
              Release Date: {movie.releaseDate}
            </p>
            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                display: "flex", // keep only one
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
                color: "#fff",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 10px 30px rgba(254,124,0,0.4)",
              }}
            >
              Duration: {movie.duration}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Writers: {movie.writers?.join(", ")}</p>
          </div>
          <div className="col">
            <p>Director: {movie.director}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Actors: {movie.actors?.join(", ")}</p>
          </div>
          <div className="col">
            <p>Actresses: {movie.actresses?.join(", ")}</p>
          </div>
        </div>
        <div className="row">
          <p>Story: {movie.story}</p>
        </div>
      </div>
    </div>
  );
}

export default HmovieDetal;
