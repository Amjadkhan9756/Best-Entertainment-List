const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    display: "block",
    marginBottom: "12px",
    transition: "all 0.3s ease",
    fontSize: "15px",
    fontWeight: "500",
  };

  const linkHoverStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    transform: "translateX(5px)",
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#ffffff",
        padding: "60px 0 40px",
        marginTop: "50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        }}
      ></div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          {/* Profile Section */}
          <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src="/image/-vzaul7.jpg"
                alt="Amjad Khan"
                style={{
                  height: "150px",
                  width: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #ffffff",
                  boxShadow:
                    "0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.1)",
                  marginBottom: "20px",
                }}
              />
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  margin: "15px 0 10px",
                  color: "#ffffff",
                }}
              >
                Amjad Khan
              </h2>
              <div
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
                  border: "none",
                  display: "inline-block",
                  margin: "10px 0",
                }}
              >
                🚀 Founder of this Website
              </div>
              <p
                style={{
                  color: "#b0b0b0",
                  fontSize: "16px",
                  marginTop: "15px",
                  lineHeight: "1.6",
                }}
              >
                Full Stack Developer & Problem Solving Enthusiast
                <br />
                <span style={{ color: "#ffd700" }}>
                  Building the Future, One Code at a Time
                </span>
              </p>
            </div>
          </div>

          {/* Web Series & Movies Section */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "25px",
                  color: "#ffd700",
                  borderBottom: "2px solid #ffd700",
                  paddingBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>🎬</span> Web Series & Movies  (website for watching )
              </h4>
              <a 
                href="https://net20.cc/home" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                🎥 Netmirror - Stream Movies
              </a>
              <a 
                href="https://multimovies.center/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                🎞️ MultiMovies Center
              </a>
            </div>
          </div>

          {/* Anime Section */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                padding: "25px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "20px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "25px",
                  color: "#ffd700",
                  borderBottom: "2px solid #ffd700",
                  paddingBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>📺</span> Anime Streaming  (website for watching )
              </h4>
              <a 
                href="https://hianime.cv/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                ⚡ HiAnime - Watch Anime
              </a>
              <a 
                href="https://aniwatch.com.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                🌟 AniWatch - Anime Hub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            marginTop: "40px",
            paddingTop: "30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0",
                color: "white",
              }}
            >
              © {new Date().getFullYear()} Amjad Khan - Founder & Developer
            </p>
            <p
              style={{
                fontSize: "14px",
                margin: "5px 0 0",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              All Rights Reserved | Built with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;