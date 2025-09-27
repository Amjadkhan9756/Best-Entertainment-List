import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TopData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/TopContent")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  // Auto scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        scrollAmount += 1;

        // Reset scroll when reaching the end (infinite loop)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20); // Adjust speed here

    return () => clearInterval(scrollInterval);
  }, [data]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        }}
      >
        <div
          style={{
            background: "#ff6f61",
            color: "#fff",
            padding: "20px 40px",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "22px",
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
    <div
      ref={scrollRef}
      style={{
        display: "flex",
        overflowX: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        padding: "30px 10px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }

          .card {
            flex: 0 0 auto;
            margin: 0 25px;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            cursor: pointer;
            position: relative;
          }

          .card img {
            width: 260px;
            height: 380px;
            object-fit: cover;
            border-radius: 18px;
            box-shadow: 0 12px 25px rgba(0,0,0,0.5);
            transition: transform 0.4s ease;
          }

          .card h3 {
            margin-top: 15px;
            color: #fff;
            font-size: 20px;
            text-align: center;
            font-weight: bold;
          }

          /* Scale when card is near center */
          .card.in-view img {
            transform: scale(1.2);
            box-shadow: 0 18px 40px rgba(0,0,0,0.9);
          }
        `}
      </style>

      {data.concat(data).map((alldata, index) => (
        <div
          key={index}
          className="card"
          onClick={() => navigate(`/movies/${alldata._id}`)}
        >
          <img src={alldata.imageUrl} alt={alldata.title} />
          <h3>{alldata.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default TopData;
