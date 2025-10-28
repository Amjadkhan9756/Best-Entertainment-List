import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <nav
          className="navbar navbar-expand-lg"
          style={{
            background: "linear-gradient(135deg, #66eacd79 0%, #764ba2 100%)",
            minHeight: "80px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* Logo Section */}
          <div className="container col-2 d-flex align-items-center">
            <img
              src="/image/Monogram ER Logo Design By Vectorseller _ TheHungryJPEG.jpeg"
              alt="Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </div>

          {/* Links & Search */}
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    Web Series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/animeseries">
                    Anime Series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/kdrama">
                    K-Drama
                  </Link>
                </li>
              </ul>

              {/* Auth Buttons */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link style={
                    {
                      backgroundColor:'grey',
                      borderRadius:'15px',
                      margin:'5px'
                    }
                  } className="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{
                    backgroundColor:'lightgrey',
                    borderRadius:'15px',
                    margin:'5px'
                  }} className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
