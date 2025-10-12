import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    background: "linear-gradient(135deg, #66eacd79 0%, #764ba2 100%)",
    minHeight: "80px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "2px solid white",
  };

  const authButtonStyle = {
    border: "none",
    borderRadius: "20px",
    padding: "8px 18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "10px",
    transition: "0.3s ease",
  };

  const loginBtn = {
    ...authButtonStyle,
    background: "#ffffff",
    color: "#6a11cb",
  };

  const registerBtn = {
    ...authButtonStyle,
    background: "#ffd700",
    color: "#000",
  };

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        {/* Logo */}
        <div className="container col-2 d-flex align-items-center">
          <img
            src="/image/Monogram ER Logo Design By Vectorseller _ TheHungryJPEG.jpeg"
            alt="Logo"
            style={logoStyle}
          />
        </div>

        {/* Links */}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/webseries">
                  Web-Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/kdrama">
                  Kdrama
                </Link>
              </li>
            </ul>

            {/* Search + Auth Buttons */}
            <div className="d-flex align-items-center">
              <form className="d-flex me-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "20px" }}
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>

              {/* Login/Register */}
              <Link to="/login">
                <button
                  style={loginBtn}
                  onMouseOver={(e) =>
                    (e.target.style.background = "#ffd700")
                  }
                  onMouseOut={(e) => (e.target.style.background = "#fff")}
                >
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button
                  style={registerBtn}
                  onMouseOver={(e) =>
                    (e.target.style.background = "#fff")
                  }
                  onMouseOut={(e) => (e.target.style.background = "#ffd700")}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
