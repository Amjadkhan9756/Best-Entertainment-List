import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Movies from "./components/Movies";
import Webseries from "./components/Webseries";
import Animeseries from "./components/Animeseries";
import Kdrama from "./components/Kdrama";
import HDetal from "./components/HDetal.jsx";
import TopData from "./components/TopData.jsx";
import KdramaD from "./components/KdramaD.jsx";
import AnimeD from "./components/AnimeD.jsx";
import WebseriesD from "./components/WebseriesD.jsx";
import MoviesD from "./components/MoviesD.jsx";
import Registation from "./Registation.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <TopData />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<HDetal />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesD />} />
        <Route path="/webseries" element={<Webseries />} />
        <Route path="/webseries/:id" element={<WebseriesD />} />
        <Route path="/animeseries" element={<Animeseries />} />
        <Route path="anime/:id" element={<AnimeD />} />

        <Route path="/kdrama" element={<Kdrama />} />
        <Route path="/kdrama/:id" element={<KdramaD />} />
        <Route path="/login" element={<Registation/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
