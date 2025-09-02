import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Home.css";

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
    <div
      style={{
        width: "100%",
        padding: "20px",
        color: "#fff",
      }}
    >
      <h1
        style={{
          margin: "10px",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // centers horizontally
          fontWeight: "bold",
          fontSize: "2rem",
          background: "linear-gradient(to right, #ff7eb3, #5f62ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        🎬 Top Movies to Watch
      </h1>

      {/* ✅ SCROLL CONTAINER */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          paddingBottom: "10px",

          /* 👇 Invisible scrollbar tricks */
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: 0,
            margin: 0,
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
                boxShadow: "2px 2px 6px gray",
                transition: "all 0.3s ease-in-out",
                borderRadius: "12px",
                padding: "10px",
                backgroundColor: " #d47bfe59",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.8)";
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.backgroundColor = "#f5f7fa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 6px gray";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = " #d47bfe59";
              }}
            >
              <img
                src={movie.imageUrl}
                alt={movie.title}
                style={{
                  width: "160px",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
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
                  color: "black",
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

      {/* 👇 Extra inline CSS to hide scrollbars in WebKit (Chrome, Safari, Edge) */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
