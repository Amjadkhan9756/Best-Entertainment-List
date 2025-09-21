import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NDetal() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoints = [
      { url: "http://localhost:8080/addMovieData", type: "Movie" },
      { url: "http://localhost:8080/addWebSeriesData", type: "Webseries" },
      { url: "http://localhost:8080/animeData", type: "Anime" },
      { url: "http://localhost:8080/addKdramaData", type: "Kdrama" },
    ];

    Promise.all(endpoints.map((ep) => axios.get(ep.url)))
      .then((responses) => {
        console.log("API Responses:", responses); // Debug line
        for (let i = 0; i < responses.length; i++) {
          console.log(`Checking response ${i}:`, responses[i].data); // Debug line
          const found = responses[i].data.find((m) => m._id === id);
          if (found) {
            console.log("Found data:", found); // Debug line
            setData({ ...found, type: endpoints[i].type });
            break;
          }
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
      Movie: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      Webseries: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      Anime: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Fixed: Changed from "Animee" to "Anime"
      Kdrama: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    };
    return gradients[type] || gradients.Movie;
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
          <div style={{
            fontSize: "16px",
            marginTop: "10px",
            opacity: "0.7"
          }}>
            Please wait while we fetch your content
          </div>
        </div>
        
        {/* Fixed: Added missing CSS keyframes */}
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
          <div style={{ 
            fontSize: "100px", 
            marginBottom: "30px",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
          }}>🎬</div>
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
          <div style={{ 
            fontSize: "18px", 
            opacity: "0.8",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            This item doesn't exist in Movies, Webseries, Anime, or Kdrama databases
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
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
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
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1.2fr" : "1fr", // Fixed: Added responsive grid
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
                  src={data.imageUrl || data.image || "https://via.placeholder.com/400x600?text=No+Image"} // Fixed: Added fallback for missing image
                  alt={data.title || "Content"}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.4s ease"
                  }}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
                  }}
                />
                <div style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                  background: "linear-gradient(45deg, rgba(245, 124, 0, 0.1), rgba(255, 152, 0, 0.05))",
                  opacity: "0",
                  transition: "opacity 0.3s ease"
                }}></div>
              </div>
            </div>

            {/* Info Section */}
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
                {data.type || "Unknown"}
              </div>

              {/* Stats Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: window.innerWidth > 480 ? "1fr 1fr" : "1fr", // Fixed: Added responsive grid
                gap: "20px"
              }}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(245, 124, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "8px",
                    fontWeight: "500"
                  }}>IMDb Rating</div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#fff"
                  }}>⭐ {data.imdbRating || data.imdb || "N/A"}</div>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(245, 124, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "8px",
                    fontWeight: "500"
                  }}>Rating</div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#fff"
                  }}>🌟 {data.rating || "N/A"}</div>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(245, 124, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "8px",
                    fontWeight: "500"
                  }}>Release Date</div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#fff"
                  }}>📅 {data.releaseDate || data.release || "N/A"}</div>
                </div>

                <div style={{
                  background: "linear-gradient(135deg, rgba(245, 124, 0, 0.25), rgba(255, 152, 0, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(245, 124, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(245, 124, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "8px",
                    fontWeight: "500"
                  }}>Duration</div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#fff"
                  }}>⏰ {data.duration || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Team Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr", // Fixed: Added responsive grid
            gap: "40px",
            marginBottom: "40px"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0, 114, 255, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(0, 198, 255, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 198, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                ✍️ Writers
              </h3>
              <p style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                margin: "0"
              }}>
                {(data.writers && Array.isArray(data.writers) ? data.writers.join(", ") : data.writers) || "Not specified"}
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(30, 60, 114, 0.3), rgba(42, 82, 152, 0.2))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(30, 60, 114, 0.4)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(30, 60, 114, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                🎬 Director
              </h3>
              <p style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                margin: "0"
              }}>
                {data.director || "Not specified"}
              </p>
            </div>
          </div>

          {/* Cast Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr", // Fixed: Added responsive grid
            gap: "40px",
            marginBottom: "50px"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(102, 126, 234, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                👨‍🎭 Actors
              </h3>
              <p style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                margin: "0"
              }}>
                {(data.actors && Array.isArray(data.actors) ? data.actors.join(", ") : data.actors) || "Not specified"}
              </p>
            </div>

            <div style={{
              background: "linear-gradient(135deg, rgba(240, 147, 251, 0.2), rgba(245, 87, 108, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(240, 147, 251, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(240, 147, 251, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "15px"
              }}>
                👩‍🎭 Actresses
              </h3>
              <p style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                margin: "0"
              }}>
                {(data.actresses && Array.isArray(data.actresses) ? data.actresses.join(", ") : data.actresses) || "Not specified"}
              </p>
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

export default NDetal;