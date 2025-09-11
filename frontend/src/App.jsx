import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Movies from './components/Movies';
import HmovieDetal from './components/HmovieDetal'; // Using original filename
import NmovieDetail from './components/NmovieDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie/:id" element={<HmovieDetal />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie-details/:id' element={<NmovieDetail />} /> {/* Different path to avoid conflict */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;