// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function KdramaD() {
//   const [kdramas, setKdramas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchKdramas = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/addKdramaData");
//         setKdramas(response.data);
//       } catch (err) {
//         console.error("❌ Kdrama Fetch Error:", err);
//         setError("Failed to load Kdramas. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchKdramas();
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/kdrama/${id}`);
//   };

//   if (loading) {
//     return (
//       <div style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         color: "#fff"
//       }}>
//         <div style={{ textAlign: "center" }}>
//           <div style={{
//             width: "80px",
//             height: "80px",
//             border: "6px solid rgba(67, 233, 123, 0.3)",
//             borderTop: "6px solid #43e97b",
//             borderRadius: "50%",
//             animation: "spin 1s linear infinite",
//             margin: "0 auto 30px"
//           }}></div>
//           <div style={{
//             fontSize: "28px",
//             fontWeight: "700",
//             background: "linear-gradient(135deg, #43e97b, #38f9d7)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text"
//           }}>
//             Loading Korean Dramas...
//           </div>
//           <div style={{
//             fontSize: "16px",
//             marginTop: "10px",
//             opacity: "0.7"
//           }}>
//             Preparing your K-Drama collection
//           </div>
//         </div>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "#fff",
//         textAlign: "center",
//         fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//       }}>
//         <div>
//           <div style={{ 
//             fontSize: "100px", 
//             marginBottom: "30px",
//             filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
//           }}>⚠️</div>
//           <div style={{
//             fontSize: "36px",
//             fontWeight: "800",
//             marginBottom: "15px",
//             background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text"
//           }}>
//             {error}
//           </div>
//           <div style={{ 
//             fontSize: "18px", 
//             opacity: "0.8",
//             maxWidth: "400px",
//             margin: "0 auto"
//           }}>
//             Please check your connection and try again
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
//       fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       padding: "60px 30px"
//     }}>
//       <div style={{
//         maxWidth: "1600px",
//         margin: "0 auto"
//       }}>
//         {/* Header Section */}
//         <div style={{
//           textAlign: "center",
//           marginBottom: "70px",
//           position: "relative"
//         }}>
//           <h1 style={{
//             fontSize: "clamp(40px, 6vw, 72px)",
//             fontWeight: "900",
//             background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #66eacd 100%)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             marginBottom: "20px",
//             letterSpacing: "2px",
//             textTransform: "uppercase",
//             textShadow: "0 10px 30px rgba(67, 233, 123, 0.3)"
//           }}>
//             Korean Drama Collection
//           </h1>
//           <p style={{
//             color: "rgba(255, 255, 255, 0.7)",
//             fontSize: "clamp(18px, 2vw, 24px)",
//             marginTop: "15px",
//             letterSpacing: "1px",
//             fontWeight: "300"
//           }}>
//             Explore the most captivating K-Dramas loved worldwide 🎭✨
//           </p>
          
//           {/* Decorative line */}
//           <div style={{
//             width: "120px",
//             height: "4px",
//             background: "linear-gradient(90deg, transparent, #43e97b, transparent)",
//             margin: "30px auto 0",
//             borderRadius: "2px"
//           }}></div>
//         </div>

//         {/* K-Drama Grid */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//           gap: "40px",
//           justifyContent: "center"
//         }}>
//           {kdramas.map((data) => (
//             <div
//               key={data._id}
//               onClick={() => handleCardClick(data._id)}
//               style={{
//                 background: "rgba(255, 255, 255, 0.08)",
//                 backdropFilter: "blur(20px)",
//                 borderRadius: "25px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 transform: "translateY(0)",
//                 transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//                 boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
//                 position: "relative"
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
//                 e.currentTarget.style.boxShadow = "0 25px 50px rgba(67, 233, 123, 0.3)";
//                 e.currentTarget.style.borderColor = "rgba(67, 233, 123, 0.5)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0) scale(1)";
//                 e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.3)";
//                 e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
//               }}
//             >
//               {/* Image Container */}
//               <div style={{
//                 position: "relative",
//                 overflow: "hidden",
//                 height: "400px"
//               }}>
//                 <img
//                   src={
//                     data.imageUrl ||
//                     data.image ||
//                     "https://placehold.co/400x600?text=No+Image"
//                   }
//                   alt={data.title}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     transition: "transform 0.5s ease"
//                   }}
//                   onError={(e) =>
//                     (e.target.src = "https://placehold.co/400x600?text=No+Image")
//                   }
//                   onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
//                   onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   right: "0",
//                   height: "50%",
//                   background: "linear-gradient(to top, rgba(26, 26, 46, 0.95), transparent)",
//                   pointerEvents: "none"
//                 }}></div>

//                 {/* IMDb Badge */}
//                 <div style={{
//                   position: "absolute",
//                   top: "15px",
//                   right: "15px",
//                   background: "linear-gradient(135deg, rgba(245, 124, 0, 0.95), rgba(255, 152, 0, 0.95))",
//                   padding: "8px 16px",
//                   borderRadius: "20px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "6px",
//                   fontWeight: "700",
//                   fontSize: "14px",
//                   color: "#fff",
//                   boxShadow: "0 4px 15px rgba(245, 124, 0, 0.4)",
//                   border: "1px solid rgba(255, 255, 255, 0.2)"
//                 }}>
//                   ⭐ {data.imdbRating || "N/A"}
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div style={{
//                 padding: "25px",
//                 background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))"
//               }}>
//                 <h3 style={{
//                   fontSize: "22px",
//                   fontWeight: "800",
//                   color: "#fff",
//                   marginBottom: "12px",
//                   lineHeight: "1.3",
//                   display: "-webkit-box",
//                   WebkitLineClamp: "2",
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   minHeight: "56px"
//                 }}>
//                   {data.title}
//                 </h3>

//                 <div style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "15px",
//                   paddingBottom: "15px",
//                   borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
//                 }}>
//                   <span style={{
//                     color: "rgba(255, 255, 255, 0.6)",
//                     fontSize: "15px",
//                     fontWeight: "600"
//                   }}>
//                     📅 {data.year || "Unknown"}
//                   </span>
//                 </div>

//                 <p style={{
//                   color: "rgba(255, 255, 255, 0.7)",
//                   fontSize: "15px",
//                   lineHeight: "1.6",
//                   marginBottom: "20px",
//                   display: "-webkit-box",
//                   WebkitLineClamp: "3",
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   minHeight: "72px"
//                 }}>
//                   {data.plot || "Click to view full details and discover more about this amazing K-Drama."}
//                 </p>

//                 <button
//                   style={{
//                     width: "100%",
//                     background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//                     color: "#1a1a2e",
//                     border: "none",
//                     padding: "14px 0",
//                     borderRadius: "15px",
//                     cursor: "pointer",
//                     fontWeight: "800",
//                     fontSize: "16px",
//                     transition: "all 0.3s ease",
//                     textTransform: "uppercase",
//                     letterSpacing: "1px",
//                     boxShadow: "0 8px 20px rgba(67, 233, 123, 0.3)"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "linear-gradient(135deg, #38f9d7 0%, #43e97b 100%)";
//                     e.currentTarget.style.transform = "translateY(-3px)";
//                     e.currentTarget.style.boxShadow = "0 12px 25px rgba(67, 233, 123, 0.5)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
//                     e.currentTarget.style.transform = "translateY(0)";
//                     e.currentTarget.style.boxShadow = "0 8px 20px rgba(67, 233, 123, 0.3)";
//                   }}
//                 >
//                   View Details →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div style={{
//           textAlign: "center",
//           marginTop: "100px",
//           paddingTop: "40px",
//           borderTop: "1px solid rgba(255, 255, 255, 0.1)"
//         }}>
//           <p style={{
//             color: "rgba(255, 255, 255, 0.5)",
//             fontSize: "16px",
//             fontWeight: "300",
//             letterSpacing: "0.5px"
//           }}>
//             © {new Date().getFullYear()} K-Drama World — Bringing Korean Stories to Life ✨
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default KdramaD;



import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function KdramaD() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only fetch Kdrama data
    axios.get("http://localhost:8080/addKdramaData")
      .then((response) => {
        console.log("API Response:", response); // Debug line
        const found = response.data.find((m) => m._id === id);
        if (found) {
          console.log("Found data:", found); // Debug line
          setData({ ...found, type: "Kdrama" });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

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
            border: "6px solid rgba(67, 233, 123, 0.3)",
            borderTop: "6px solid #43e97b",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 30px"
          }}></div>
          <div style={{
            fontSize: "28px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #43e97b, #38f9d7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Loading Korean Drama...
          </div>
          <div style={{
            fontSize: "16px",
            marginTop: "10px",
            opacity: "0.7"
          }}>
            Please wait while we fetch your Kdrama
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
          <div style={{ 
            fontSize: "100px", 
            marginBottom: "30px",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
          }}>🎭</div>
          <div style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "15px",
            background: "linear-gradient(135deg, #43e97b, #38f9d7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Kdrama Not Found
          </div>
          <div style={{ 
            fontSize: "18px", 
            opacity: "0.8",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            This Korean drama doesn't exist in our database
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
                  alt={data.title || "Kdrama"}
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
                  background: "linear-gradient(45deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.05))",
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
                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
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
                background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "35px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}>
                🎭 Korean Drama
              </div>

              {/* Stats Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: window.innerWidth > 480 ? "1fr 1fr" : "1fr",
                gap: "20px"
              }}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(67, 233, 123, 0.25), rgba(56, 249, 215, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67, 233, 123, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(67, 233, 123, 0.3)";
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
                  background: "linear-gradient(135deg, rgba(67, 233, 123, 0.25), rgba(56, 249, 215, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67, 233, 123, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(67, 233, 123, 0.3)";
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
                  background: "linear-gradient(135deg, rgba(67, 233, 123, 0.25), rgba(56, 249, 215, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67, 233, 123, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(67, 233, 123, 0.3)";
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
                  background: "linear-gradient(135deg, rgba(67, 233, 123, 0.25), rgba(56, 249, 215, 0.15))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(67, 233, 123, 0.4)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(67, 233, 123, 0.3)";
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
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "40px",
            marginBottom: "40px"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(67, 233, 123, 0.2), rgba(56, 249, 215, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(67, 233, 123, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(67, 233, 123, 0.2)";
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
              background: "linear-gradient(135deg, rgba(67, 233, 123, 0.2), rgba(56, 249, 215, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(67, 233, 123, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(67, 233, 123, 0.2)";
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
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "40px",
            marginBottom: "50px"
          }}>
            <div style={{
              background: "linear-gradient(135deg, rgba(67, 233, 123, 0.2), rgba(56, 249, 215, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(67, 233, 123, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(67, 233, 123, 0.2)";
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
              background: "linear-gradient(135deg, rgba(67, 233, 123, 0.2), rgba(56, 249, 215, 0.1))",
              padding: "30px",
              borderRadius: "25px",
              border: "1px solid rgba(67, 233, 123, 0.3)",
              backdropFilter: "blur(15px)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(67, 233, 123, 0.2)";
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
              background: "linear-gradient(45deg, rgba(67, 233, 123, 0.05), rgba(56, 249, 215, 0.05))",
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
                background: "linear-gradient(135deg, #43e97b, #38f9d7)",
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
                borderLeft: "6px solid #43e97b",
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

export default KdramaD;