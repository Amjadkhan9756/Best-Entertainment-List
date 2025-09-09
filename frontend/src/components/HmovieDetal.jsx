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

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // fixed
        }}
      >
        <div
          style={{
            background: "#f57c00",
            color: "#fff",
            padding: "20px 40px",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "20px",
            animation: "pulse 1.5s infinite",
          }}
        >
          Loading...
        </div>

        <style>
          {`
          @keyframes pulse {  /* fixed */
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
        </style>
      </div>
    );
  }

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
          width: "75%",
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
      transition: "transform 0.3s ease-in-out", // smooth animation
    }}
    src={movie.imageUrl}
    alt={movie.title}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
        <div
          className="row"
          style={{
            marginTop: "20px",
            display: "flex",
            paddingLeft: "12px",
            padding: "15px",
          }}
        >
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Writers: {movie.writers?.join(", ")}</p>
          </div>
          <div className="col-2"></div>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Director: {movie.director}</p>
          </div>
        </div>
        <br></br>
        <div
          className="row"
          style={{
            marginTop: "20px",
            display: "flex",
            paddingLeft: "12px",
            padding: "15px",
          }}
        >
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Actors: {movie.actors?.join(", ")}</p>
          </div>
          <div className="col-2"></div>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Actresses: {movie.actresses?.join(", ")}</p>
          </div>
        </div>
             
       {/* Story Section */}
      <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '35px',
          borderRadius: '25px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            📖 Story
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '18px',
            lineHeight: '1.8',
            letterSpacing: '0.3px'
          }}>
            {movie.story}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HmovieDetal;















