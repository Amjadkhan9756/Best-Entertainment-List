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
                width: "70px", // fixed width
                height: "70px", // fixed height
                objectFit: "cover", // prevents stretching
                borderRadius: "50%", // makes it circular
                border: "2px solid white", // optional white border
              }}
            />
          </div>

          {/* Links & Search */}
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/movies">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/webseries">
                    Web-series
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/animeseries">
                    AnimeSeries
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/kdrama">
                    Kdrama
                  </Link>
                </li>
              </ul>

              {/* Search bar */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "20px" }}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
