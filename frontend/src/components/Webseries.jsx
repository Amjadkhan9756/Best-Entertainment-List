import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Webseries() {
  const [webseries, setWebseries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/addWebSeriesData")
      .then((res) => {
        setWebseries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message || "Something went wrong");
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>Top Web-Series to Watch</h1>
      <div
      style={{
        display:'grid',
          gridTemplateColumns: "repeat(5, 1fr)",
          gap:'20px',
          padding:"20px",
          listStyle:'none',
      }}
      >
        {webseries.map((allSeries) => (
          <div
            key={allSeries._id}
            onClick={() => navigate(`/movies/${allSeries._id}`)}
          >
            <img src={allSeries.imgUrl} alt={allSeries.title} />
            <h3>{allSeries.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Webseries;
