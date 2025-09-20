import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HDetal() {
  const { id } = useParams();
  const [data, setData] = useState(null); // can be movie, webseries, animee, kdrama
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoints = [
      { url: "http://localhost:8080/addMovies", type: "Movie" },
      { url: "http://localhost:8080/addWebseries", type: "Webseries" },
      { url: "http://localhost:8080/addAnimee", type: "Animee" },
      { url: "http://localhost:8080/addKdrama", type: "Kdrama" },
    ];

    Promise.all(endpoints.map((ep) => axios.get(ep.url)))
      .then((responses) => {
        for (let i = 0; i < responses.length; i++) {
          const found = responses[i].data.find((m) => m._id === id);
          if (found) {
            setData({ ...found, type: endpoints[i].type });
            break;
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

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

  if (!data) return <div>❌ Not found in Movies, Webseries, Animee, or Kdrama</div>;

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
          width: "75%",
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
                objectFit: "cover",
                paddingLeft: "16px",
                paddingBottom: "3px",
                borderRadius: "30px",
                boxShadow: "6px 6px 8px black",
                transition: "transform 0.3s ease-in-out",
              }}
              src={data.imageUrl}
              alt={data.title}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          <div className="col">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "800",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "20px",
              }}
            >
              {data.title}{" "}
              <span style={{ fontSize: "22px", color: "#ffa726" }}>
                ({data.type})
              </span>
            </h1>

            <div
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              IMDb: {data.imdbRating}
            </div>

            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                padding: "12px",
                borderRadius: "50px",
                fontWeight: "700",
              }}
            >
              Rating: ⭐ {data.rating}
            </p>

            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
              }}
            >
              Release Date: {data.releaseDate}
            </p>

            <p
              style={{
                background: "linear-gradient(135deg, #f57c00, #ffb74d)",
                padding: "10px 20px",
                borderRadius: "50px",
                fontWeight: "700",
              }}
            >
              Duration: {data.duration}
            </p>
          </div>
        </div>

        {/* Writers & Director */}
        <div className="row" style={{ marginTop: "20px", padding: "15px" }}>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #00c6ff, #0072ff)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Writers: {data.writers?.join(", ")}</p>
          </div>
          <div className="col-2"></div>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Director: {data.director}</p>
          </div>
        </div>

        {/* Actors & Actresses */}
        <div className="row" style={{ marginTop: "20px", padding: "15px" }}>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg,#00c6ff,#0072ff)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Actors: {data.actors?.join(", ")}</p>
          </div>
          <div className="col-2"></div>
          <div
            className="col"
            style={{
              padding: "10px",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              borderRadius: "50px",
              boxShadow: "8px 8px 10px black",
            }}
          >
            <p>Actresses: {data.actresses?.join(", ")}</p>
          </div>
        </div>

        {/* Story */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            padding: "35px",
            borderRadius: "25px",
            marginTop: "20px",
          }}
        >
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#fff" }}>
            📖 Story
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "18px" }}>
            {data.story}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HDetal;
