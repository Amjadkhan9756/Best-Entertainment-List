import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Animeseries() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/animeData")
      .then((res) => {
        setAnime(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  // 🌀 Loading State
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
            @keyframes pulse {
              0% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.1); opacity: 0.7; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <div
        style={{
          color: "red",
          textAlign: "center",
          marginTop: "50px",
          fontWeight: "bold",
        }}
      >
        Error: {error}
      </div>
    );
  }

  // ✅ Main UI
  return (
    <>
      <h1
        style={{
          padding: "10px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "28px",
        }}
      >
        Top Anime to Watch
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {anime.map((allAnime) => (
          <div
            key={allAnime._id}
            onClick={() => navigate(`/anime/${allAnime._id}`)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "2px 2px 6px gray",
              transition: "all 0.3s ease-in-out",
              borderRadius: "12px",
              padding: "10px",
              backgroundColor: "#d47bfe59",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.8)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#f5f7fa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "2px 2px 6px gray";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#d47bfe59";
            }}
          >
            <img
              src={
                allAnime.imageUrl ||
                allAnime.image ||
                allAnime.imgUrl ||
                "https://via.placeholder.com/400x600?text=No+Image"
              }
              alt={allAnime.title}
              style={{
                display: "block",
                margin: "0 auto",
                width: "200px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "12px 12px 20px black",
              }}
            />
            <h3
              style={{
                fontSize: "18px",
                color: "white",
                marginTop: "15px",
                wordWrap: "break-word",
              }}
            >
              {allAnime.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Animeseries;
