import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimeD() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/animeData")
      .then((response) => {
        const found = response.data.find((item) => item._id === id);
        setData(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Anime API Error:", err);
        setLoading(false);
      });
  }, [id]);

  const getTypeGradient = () => {
    return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"; // Anime gradient
  };

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div>Loading Anime...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div>
          <h2>Anime Not Found</h2>
          <p>This anime does not exist in the database.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
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
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
        }}>
          {/* Hero Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1.2fr" : "1fr",
            gap: "50px",
            alignItems: "center",
            marginBottom: "50px"
          }}>
            {/* Image Section */}
            <div>
              <div style={{
                position: "relative",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "all 0.4s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
              }}>
                <img
                  src={data.imageUrl || data.image || "https://via.placeholder.com/400x600?text=No+Image"}
                  alt={data.title || "Anime"}
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Found"}
                />
              </div>
            </div>

            {/* Info Section */}
            <div>
              <h1 style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: "900",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "25px",
                lineHeight: "1.1",
                textShadow: "0 4px 8px rgba(0,0,0,0.3)"
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
                marginBottom: "35px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}>
                Anime
              </div>

              {/* Stats Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: window.innerWidth > 480 ? "1fr 1fr" : "1fr",
                gap: "20px"
              }}>
                {[
                  { label: "IMDb Rating", value: `⭐ ${data.imdbRating || "N/A"}` },
                  { label: "Rating", value: `🌟 ${data.rating || "N/A"}` },
                  { label: "Release Date", value: `📅 ${data.releaseDate || "N/A"}` },
                  { label: "Duration", value: `⏰ ${data.duration || "N/A"}` }
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: "linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.1))",
                    padding: "25px",
                    borderRadius: "20px",
                    border: "1px solid rgba(79, 172, 254, 0.4)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(79, 172, 254, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", marginBottom: "8px", fontWeight: "500" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "800", color: "#fff" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            padding: "50px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "linear-gradient(45deg, rgba(79, 172, 254, 0.05), rgba(0, 242, 254, 0.05))",
              zIndex: "1"
            }}></div>
            <div style={{ position: "relative", zIndex: "2" }}>
              <h2 style={{
                fontSize: "36px",
                fontWeight: "800",
                color: "#fff",
                marginBottom: "30px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                📖 Story
              </h2>
              <div style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))",
                padding: "40px",
                borderRadius: "25px",
                borderLeft: "6px solid #4facfe",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}>
                <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.95)", lineHeight: "1.8", margin: 0 }}>
                  {data.story || data.description || data.plot || "Story not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeD;
