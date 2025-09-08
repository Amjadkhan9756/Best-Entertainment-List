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

  if (loading) return <div>Loading...</div>;
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
          width: "70%",
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
              }}
              src={movie.imageUrl}
              alt={movie.title}
            />
          </div>
          <div className="col">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "800",
                marginBottom: "20px",
                letterSpacing: "-1px",
                lineHeight: "1.2",
                textShadow: "0 0 80px rgba(102, 126, 234, 0.5)", // ✅ added comma
              }}
            >
              {movie.title}
            </h1>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Duration: {movie.duration}</p>
            <p>Rating:  ⭐ {movie.rating}</p>
            <p>IMDb: {movie.imdbRating}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Writers: {movie.writers?.join(", ")}</p>
          </div>
          <div className="col">
            <p>Director: {movie.director}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Actors: {movie.actors?.join(", ")}</p>
          </div>
          <div className="col">
            <p>Actresses: {movie.actresses?.join(", ")}</p>
          </div>
        </div>
        <div className="row">
          <p>Story: {movie.story}</p>
        </div>
      </div>
    </div>
  );
}

export default HmovieDetal;



// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function HmovieDetal() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/addMovies")
//       .then((res) => {
//         const foundMovie = res.data.find((m) => m._id === id);
//         setMovie(foundMovie);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       color: '#fff',
//       fontSize: '24px',
//       fontWeight: '600',
//       letterSpacing: '2px'
//     }}>
//       <div style={{
//         animation: 'pulse 1.5s ease-in-out infinite'
//       }}>
//         Loading...
//       </div>
//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }
//       `}</style>
//     </div>
//   );

//   if (!movie) return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       color: '#fff',
//       fontSize: '24px',
//       fontWeight: '500'
//     }}>
//       Movie not found
//     </div>
//   );

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
//       padding: '40px 20px',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         background: 'rgba(255, 255, 255, 0.05)',
//         backdropFilter: 'blur(10px)',
//         borderRadius: '30px',
//         padding: '50px',
//         boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
//         border: '1px solid rgba(255, 255, 255, 0.1)'
//       }}>
//         {/* Hero Section */}
//         <div style={{
//           display: 'flex',
//           gap: '60px',
//           marginBottom: '50px',
//           flexWrap: 'wrap',
//           justifyContent: 'center'
//         }}>
//           {/* Movie Poster */}
//           <div style={{
//             position: 'relative',
//             transform: 'perspective(1000px) rotateY(-5deg)',
//             transition: 'all 0.5s ease',
//             cursor: 'pointer'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
//           }}>
//             <img
//               src={movie.imageUrl}
//               alt={movie.title}
//               style={{
//                 width: '350px',
//                 height: '500px',
//                 objectFit: 'cover',
//                 borderRadius: '20px',
//                 boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 100px rgba(102, 126, 234, 0.3)',
//                 border: '3px solid rgba(255, 255, 255, 0.1)'
//               }}
//             />
//             <div style={{
//               position: 'absolute',
//               inset: '0',
//               background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 30%)',
//               borderRadius: '20px',
//               pointerEvents: 'none'
//             }}></div>
//           </div>

//           {/* Movie Info */}
//           <div style={{
//             flex: '1',
//             minWidth: '300px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center'
//           }}>
//             <h1 style={{
//               fontSize: '48px',
//               fontWeight: '800',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               marginBottom: '20px',
//               letterSpacing: '-1px',
//               lineHeight: '1.2',
//               textShadow: '0 0 80px rgba(102, 126, 234, 0.5)'
//             }}>
//               {movie.title}
//             </h1>

//             {/* Rating Badges */}
//             <div style={{
//               display: 'flex',
//               gap: '20px',
//               marginBottom: '30px',
//               flexWrap: 'wrap'
//             }}>
//               <div style={{
//                 background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
//                 padding: '10px 20px',
//                 borderRadius: '50px',
//                 fontWeight: '700',
//                 color: '#000',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 boxShadow: '0 10px 30px rgba(255, 215, 0, 0.4)'
//               }}>
//                 ⭐ {movie.rating}
//               </div>
//               <div style={{
//                 background: 'linear-gradient(135deg, #f57c00, #ffb74d)',
//                 padding: '10px 20px',
//                 borderRadius: '50px',
//                 fontWeight: '700',
//                 color: '#fff',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 boxShadow: '0 10px 30px rgba(245, 124, 0, 0.4)'
//               }}>
//                 IMDb {movie.imdbRating}
//               </div>
//             </div>

//             {/* Quick Info */}
//             <div style={{
//               display: 'flex',
//               gap: '30px',
//               marginBottom: '30px',
//               flexWrap: 'wrap'
//             }}>
//               <div style={{
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 fontSize: '16px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px'
//               }}>
//                 📅 <span style={{ fontWeight: '600' }}>{movie.releaseDate}</span>
//               </div>
//               <div style={{
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 fontSize: '16px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px'
//               }}>
//                 ⏱️ <span style={{ fontWeight: '600' }}>{movie.duration}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Details Section */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '30px',
//           marginBottom: '40px'
//         }}>
//           {/* Director */}
//           <div style={{
//             background: 'rgba(255, 255, 255, 0.03)',
//             padding: '25px',
//             borderRadius: '20px',
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//             backdropFilter: 'blur(5px)',
//             transition: 'all 0.3s ease',
//             cursor: 'default'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
//             e.currentTarget.style.transform = 'translateY(-5px)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
//             e.currentTarget.style.transform = 'translateY(0)';
//           }}>
//             <h3 style={{
//               color: '#667eea',
//               fontSize: '14px',
//               fontWeight: '600',
//               letterSpacing: '2px',
//               textTransform: 'uppercase',
//               marginBottom: '10px'
//             }}>
//               Director
//             </h3>
//             <p style={{
//               color: '#fff',
//               fontSize: '18px',
//               fontWeight: '500'
//             }}>
//               {movie.director}
//             </p>
//           </div>

//           {/* Writers */}
//           <div style={{
//             background: 'rgba(255, 255, 255, 0.03)',
//             padding: '25px',
//             borderRadius: '20px',
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//             backdropFilter: 'blur(5px)',
//             transition: 'all 0.3s ease',
//             cursor: 'default'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
//             e.currentTarget.style.transform = 'translateY(-5px)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
//             e.currentTarget.style.transform = 'translateY(0)';
//           }}>
//             <h3 style={{
//               color: '#764ba2',
//               fontSize: '14px',
//               fontWeight: '600',
//               letterSpacing: '2px',
//               textTransform: 'uppercase',
//               marginBottom: '10px'
//             }}>
//               Writers
//             </h3>
//             <p style={{
//               color: '#fff',
//               fontSize: '18px',
//               fontWeight: '500'
//             }}>
//               {movie.writers?.join(", ")}
//             </p>
//           </div>
//         </div>

//         {/* Cast Section */}
//         <div style={{
//           marginBottom: '40px'
//         }}>
//           <h2 style={{
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#fff',
//             marginBottom: '25px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px'
//           }}>
//             🎭 Cast
//           </h2>
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '20px'
//           }}>
//             {/* Actors */}
//             <div style={{
//               background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
//               padding: '20px',
//               borderRadius: '15px',
//               border: '1px solid rgba(102, 126, 234, 0.3)'
//             }}>
//               <h4 style={{
//                 color: '#667eea',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 letterSpacing: '1px',
//                 marginBottom: '10px',
//                 textTransform: 'uppercase'
//               }}>
//                 Actors
//               </h4>
//               <p style={{
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 fontSize: '16px',
//                 lineHeight: '1.6'
//               }}>
//                 {movie.actors?.join(", ")}
//               </p>
//             </div>

//             {/* Actresses */}
//             <div style={{
//               background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))',
//               padding: '20px',
//               borderRadius: '15px',
//               border: '1px solid rgba(240, 147, 251, 0.3)'
//             }}>
//               <h4 style={{
//                 color: '#f093fb',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 letterSpacing: '1px',
//                 marginBottom: '10px',
//                 textTransform: 'uppercase'
//               }}>
//                 Actresses
//               </h4>
//               <p style={{
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 fontSize: '16px',
//                 lineHeight: '1.6'
//               }}>
//                 {movie.actresses?.join(", ")}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Story Section */}
//         <div style={{
//           background: 'rgba(255, 255, 255, 0.02)',
//           padding: '35px',
//           borderRadius: '25px',
//           border: '1px solid rgba(255, 255, 255, 0.1)',
//           backdropFilter: 'blur(5px)'
//         }}>
//           <h2 style={{
//             fontSize: '28px',
//             fontWeight: '700',
//             color: '#fff',
//             marginBottom: '20px',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px'
//           }}>
//             📖 Story
//           </h2>
//           <p style={{
//             color: 'rgba(255, 255, 255, 0.85)',
//             fontSize: '18px',
//             lineHeight: '1.8',
//             letterSpacing: '0.3px'
//           }}>
//             {movie.story}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HmovieDetal;
