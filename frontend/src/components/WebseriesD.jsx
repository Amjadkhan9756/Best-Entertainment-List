import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function WebseriesD() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/addWebSeriesData")
      .then((response) => {
        const found = response.data.find((item) => item._id === id);
        if (found) {
          setData({ ...found, type: "Webseries" });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

  const getTypeGradient = (type) => {
    const gradients = {
      Webseries: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    };
    return gradients[type] || gradients.Webseries;
  };

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
          <div style={{ fontSize: "16px", marginTop: "10px", opacity: "0.7" }}>
            Please wait while we fetch your content
          </div>
        </div>
        <style>
          {`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}
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
          <div style={{ fontSize: "100px", marginBottom: "30px", filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))" }}>🎬</div>
          <div style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "15px",
            background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Content Not Found
          </div>
          <div style={{ fontSize: "18px", opacity: "0.8", maxWidth: "400px", margin: "0 auto" }}>
            This Web Series doesn't exist in our database
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
        <div style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          borderRadius: "30px",
          padding: "50px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
          marginBottom: "30px"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1.2fr" : "1fr",
            gap: "50px",
            alignItems: "center",
            marginBottom: "50px"
          }}>
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
                  alt={data.title || "Web Series"}
                  style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  onError={(e) => e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Found"}
                />
              </div>
            </div>

            <div>
              <h1 style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: "900",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 40%, #f093fb 80%, #ffd89b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "25px",
                lineHeight: "1.1",
                textShadow: "0 4px 8px rgba(0,0,0,0.3)"
              }}>
                {data.title || "Untitled"}
              </h1>

              <div style={{
                display: "inline-block",
                background: getTypeGradient(data.type),
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "35px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}>
                {data.type}
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
              background: "linear-gradient(45deg, rgba(245, 124, 0, 0.05), rgba(102, 126, 234, 0.05))",
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
                background: "linear-gradient(135deg, #f57c00, #ff9800, #ffb74d)",
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
                borderLeft: "6px solid #f57c00",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}>
                <p style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.95)",
                  lineHeight: "1.8",
                  margin: "0",
                  fontWeight: "400",
                  letterSpacing: "0.5px"
                }}>
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

export default WebseriesD;
