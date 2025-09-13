import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NmovieDetal() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/addMovieData")
      .then((res) => {
        const foundMovie = res.data.find((m) => m._id === id);
        setMovie(foundMovie);
        setLoading(false);
      })
      .catch((error) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) return <div>Movies not found</div>;
  return (
    <div>
      <div>
        <div className="row">
          <div className="col">
            <img src={movie.imageUrl} alt={movie.title} />
          </div>
          <div className="col">
            <h1> {movie.title}</h1>
            <div>IMDB:{movie.imdbRating}</div>
            <br></br>
            <p> Rating: ⭐ {movie.rating}</p>
            <p> Release Date: {movie.releaseDate}</p>
            <p> Duration: {movie.duration}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <p>Writers: {movie.writers?.join(", ")}</p>
          </div>
          <div className="col-2"></div>
          <div className="col">
            {" "}
            <p>Director: {movie.director}</p>
          </div>
        </div>
        <div className="row">
            <div className="col">     <p>Actors: {movie.actors?.join(", ")}</p></div>
            <div className="col-2"></div>
            <div className="col">  <p>Actresses: {movie.actresses?.join(", ")}</p></div>

        </div>
          <div
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            padding: "35px",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#fff",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            📖 Story
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "18px",
              lineHeight: "1.8",
              letterSpacing: "0.3px",
            }}
          >
            {movie.story}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NmovieDetal;
