import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container col-2">
            <img
              src="/image/Monogram ER Logo Design By Vectorseller _ TheHungryJPEG.jpeg"
              alt="Logo"
              style={{ width: "100px", height: "70px" }}
            />
          </div>
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
                  <a className="nav-link active" href="/web-series">
                    Web-series
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/anime-series">
                    Anime-series
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/k-drama">
                    K-drama
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
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
