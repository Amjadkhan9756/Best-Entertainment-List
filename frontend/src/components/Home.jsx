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

  if (loading)
    return (
      <div style={{ alignItems: "center", color: "black" }}>Loading...</div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "black",
        color: "#fff",
      }}
    >
      <h1 style={{ margin: "10px", padding: "15px" }}>
        🎬 Top Movies to Watch
      </h1>

      {/* ✅ SCROLL CONTAINER */}
      <div
        style={{
          overflowX: "hidden",
          paddingBottom: "8px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.overflowX = "auto")}
        onMouseLeave={(e) => (e.currentTarget.style.overflowX = "hidden")}
      >
        <ul
          style={{
            display: "flex",
            flex: "0 0 auto",
            listStyle: "none",
            gap: "10px",
            padding: "10px",
            margin: "5px",
          }}
        >
          {movies.map((movie) => (
            <li
              key={movie._id}
              onClick={() => navigate(`/movie/${movie._id}`)}
              style={{
                minWidth: "160px",
                cursor: "pointer",
                flexShrink: 0,
                textAlign: "center",
                transition: "transform 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                style={{
                  width: "160px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
                  display: "block",
                  margin: "0 auto",
                }}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/160x240?text=No+Image")
                }
              />
              <h3
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {movie.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
