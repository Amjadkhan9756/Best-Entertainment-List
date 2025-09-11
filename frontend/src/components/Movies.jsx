// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Movies() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true); // Fixed: correct variable name, syntax, and initial value
//   const [error, setError] = useState(null); // Fixed: better initial value for error

//   const navigate = useNavigate();
  
//   useEffect(() => {
//     setLoading(true); // Optional: explicitly set loading to true at start
//     axios
//       .get("http://localhost:8080/addMovieData")
//       .then((res) => {
//         setMovies(res.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message || "Something went wrong");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <div
//           style={{
//             background: "#f57c00",
//             color: "#fff",
//             padding: "20px 40px",
//             borderRadius: "12px",
//             fontWeight: "700",
//             fontSize: "20px",
//             animation: "pulse 1.5s infinite",
//           }}
//         >
//           Loading...
//         </div>

//         <style>
//           {`
//             @keyframes pulse {
//               0% { transform: scale(1); opacity: 1; }
//               50% { transform: scale(1.1); opacity: 0.7; }
//               100% { transform: scale(1); opacity: 1; }
//             }
//           `}
//         </style>
//       </div>
//     );
//   }

//   if (error) return <div>Error: {error}</div>;

//   return (
//     <>
//       <h1
//         style={{
//           backgroundColor: "brown",
//           color: "#fff",
//         }}
//       >
//         Movies
//       </h1>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(5, 1fr)",
//           gap: "20px",
//           padding: "20px",
//           listStyle: "none",
//         }}
//       >
//         {movies.map((movie) => (
//           <div 
//             key={movie._id}
//             onClick={()=>navigate(`/movie/${movie_id}`)}
//             style={{
//               backgroundColor: "#fff",
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               overflow: "hidden",
//               transition: "transform 0.3s ease",
//               cursor: "pointer",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//             }}
//           >
//             <img 
//               src={movie.imageUrl} 
//               alt={movie.title}
//               style={{
//                 width: "100%",
//                 height: "300px",
//                 objectFit: "cover",
//               }}
//             />
//             <h3
//               style={{
//                 backgroundColor: "brown",
//                 color: "#fff",
//                 margin: "0",
//                 padding: "15px",
//                 fontSize: "16px",
//                 fontWeight: "600",
//                 textAlign: "center",
//               }}
//             >
//               {movie.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Movies;



import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/addMovieData")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

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

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1
        style={{
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          margin: "0",
          padding: "20px",
        }}
      >
        Movies
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {movies.map((movie) => (
          <div 
            key={movie._id}
            onClick={() => navigate(`/movie/${movie._id}`)} // Fixed: movie._id instead of movie_id
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img 
              src={movie.imageUrl} 
              alt={movie.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />
            <h3
              style={{
                backgroundColor: "brown",
                color: "#fff",
                margin: "0",
                padding: "15px",
                fontSize: "16px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Movies;