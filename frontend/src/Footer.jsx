const Footer = () => {
  const footerStyle = {
    background:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    color: "#ffffff",
    padding: "60px 0 40px",
    marginTop: "50px",
    position: "relative",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
    zIndex: 1,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 2,
  };

  const profileImageStyle = {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ffffff",
    boxShadow:
      "0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.1)",
    marginBottom: "20px",
  };

  const founderBadgeStyle = {
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
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "25px",
    color: "#ffd700",
    borderBottom: "2px solid #ffd700",
    paddingBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const skillBadgeStyle = {
    background: "linear-gradient(45deg, #667eea, #764ba2)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "500",
    margin: "4px",
    display: "inline-block",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    transition: "transform 0.3s ease",
  };

  const coreSubjectBadgeStyle = {
    background: "linear-gradient(45deg, #f093fb, #f5576c)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "500",
    margin: "4px",
    display: "inline-block",
    boxShadow: "0 4px 15px rgba(240, 147, 251, 0.3)",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "25px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    marginBottom: "20px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  };

  return (
    <footer style={footerStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
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
            <div style={cardStyle}>
              <img
                src="/image/-vzaul7.jpg"
                alt="Amjad Khan"
                style={profileImageStyle}
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
              <div style={founderBadgeStyle}>🚀 Founder of this Website</div>
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

          {/* Technical Skills Section */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div style={cardStyle}>
              <h4 style={sectionTitleStyle}>
                <span>💻</span> Technical Skills
              </h4>

              <div style={{ marginBottom: "20px" }}>
                <h6
                  style={{
                    color: "#87ceeb",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Programming Languages
                </h6>
                <div>
                  <span style={skillBadgeStyle}>Java</span>
                  <span style={skillBadgeStyle}>Python</span>

                  <span style={skillBadgeStyle}>JavaScript</span>
                  <span style={skillBadgeStyle}>HTML5</span>
                  <span style={skillBadgeStyle}>CSS3</span>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h6
                  style={{
                    color: "#87ceeb",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  MERN Stack
                </h6>
                <div>
                  <span style={skillBadgeStyle}>MongoDB</span>
                  <span style={skillBadgeStyle}>Express.js</span>
                  <span style={skillBadgeStyle}>React.js</span>
                  <span style={skillBadgeStyle}>Node.js</span>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h6
                  style={{
                    color: "#87ceeb",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Frameworks & Libraries
                </h6>
                <div>
                  <span style={skillBadgeStyle}>Bootstrap</span>
                  <span style={skillBadgeStyle}>Tailwind CSS</span>
                  <span style={skillBadgeStyle}>Redux</span>
                </div>
              </div>

              <div>
                <h6
                  style={{
                    color: "#87ceeb",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Tools & Technologies
                </h6>
                <div>
                  <span style={skillBadgeStyle}>Git/GitHub</span>
                  <span style={skillBadgeStyle}>VS Code</span>
                  <span style={skillBadgeStyle}>Postman</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Subjects & Specializations */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div style={cardStyle}>
              <h4 style={sectionTitleStyle}>
                <span>📚</span> Core Subjects
              </h4>

              <div style={{ marginBottom: "20px" }}>
                <h6
                  style={{
                    color: "#98fb98",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Computer Science Fundamentals
                </h6>
                <div>
                  <span style={coreSubjectBadgeStyle}>
                    Object-Oriented Programming
                  </span>
                  <span style={coreSubjectBadgeStyle}>
                    Database Management System
                  </span>
                  <span style={coreSubjectBadgeStyle}>Computer Networks</span>
                  <span style={coreSubjectBadgeStyle}>Aptitude</span>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h6
                  style={{
                    color: "#98fb98",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Problem Solving
                </h6>
                <div>
                  <span style={coreSubjectBadgeStyle}>
                    Data Structures & Algorithms
                  </span>

                  <span style={coreSubjectBadgeStyle}>
                    Quantitative Aptitude
                  </span>
                  <span style={coreSubjectBadgeStyle}>Pattern Recognition</span>
                </div>
              </div>

              <div>
                <h6
                  style={{
                    color: "#98fb98",
                    marginBottom: "12px",
                    fontSize: "16px",
                  }}
                >
                  Web Development
                </h6>
                <div>
                  <span style={coreSubjectBadgeStyle}>
                    Frontend Development
                  </span>
                  <span style={coreSubjectBadgeStyle}>Backend Development</span>
                  <span style={coreSubjectBadgeStyle}>
                    Full Stack Development
                  </span>
                  <br />
                  <span style={coreSubjectBadgeStyle}>REST APIs</span>
                </div>
              </div>
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
          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: "16px",
                lineHeight: "1.8",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            ></p>
          </div>

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
