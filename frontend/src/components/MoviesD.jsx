import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MoviesD() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/addMovieData")
      .then((response) => {
        const found = response.data.find((m) => m._id === id);
        if (found) {
          setData({ ...found, type: "Movie" });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

  const getTypeGradient = () => "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: "80px",
            height: "80px",
            border: "6px solid rgba(245, 124, 0, 0.3)",
            borderTop: "6px solid #f57c00",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 30px"
          }}></div>
          <div style={{
            fontSize: "28px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #f57c00, #ff9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Loading Amazing Content...
          </div>
          <div style={{
            fontSize: "16px",
            marginTop: "10px",
            opacity: "0.7"
          }}>
            Please wait while we fetch your content
          </div>
        </div>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div>
          <div style={{ fontSize: "100px", marginBottom: "30px" }}>🎬</div>
          <div style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "15px",
            background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Movie Not Found
          </div>
          <div style={{ fontSize: "18px", opacity: "0.8", maxWidth: "400px", margin: "0 auto" }}>
            This movie doesn't exist in our database
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "40px 20px"
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Main Content Card */}
        <div style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          padding: "50px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          marginBottom: "30px"
        }}>
          {/* Hero Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1.2fr" : "1fr",
            gap: "50px",
            alignItems: "center",
            marginBottom: "50px"
          }}>
            <div>
              <img
                src={data.imageUrl || data.image || "https://via.placeholder.com/400x600?text=No+Image"}
                alt={data.title || "Movie"}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "20px" }}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Found"; }}
              />
            </div>

            <div>
              <h1 style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: "900",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "25px",
              }}>
                {data.title || "Untitled"}
              </h1>

              <div style={{
                display: "inline-block",
                background: getTypeGradient(),
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "35px"
              }}>
                Movie
              </div>

              {/* Stats Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: window.innerWidth > 480 ? "1fr 1fr" : "1fr",
                gap: "20px"
              }}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)"
                }}>
                  <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}>IMDb Rating</div>
                  <div style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>⭐ {data.imdbRating || data.imdb || "N/A"}</div>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)"
                }}>
                  <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}>Release Date</div>
                  <div style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>📅 {data.releaseDate || data.release || "N/A"}</div>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)"
                }}>
                  <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px" }}>Duration</div>
                  <div style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>⏰ {data.duration || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "50px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <h2 style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "30px",
              background: "linear-gradient(135deg, #f57c00, #ff9800, #ffb74d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>📖 Story</h2>
            <p style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.95)",
              lineHeight: "1.8",
            }}>
              {data.story || data.description || data.plot || "Story not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesD;
