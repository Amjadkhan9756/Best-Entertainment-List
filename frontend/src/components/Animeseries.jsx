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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Top Anime to watch</h1>
      <div>
        {anime.map((allAnime) => (
          <div
            key={allAnime._id}
            onClick={() => navigate(`/Anime/${allAnime._id}`)}
            style={{ cursor: "pointer", margin: "10px" }}
          >
            <img
              src={allAnime.imgUrl}
              alt={allAnime.title}
              width="200"
              height="300"
            />
            <h3>{allAnime.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Animeseries;
