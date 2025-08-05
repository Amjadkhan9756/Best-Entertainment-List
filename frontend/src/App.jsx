import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
// import Footer from "./Footer";
import Navbar from "./Navbar";
import Movies from './components/Movies';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies'element={<Movies/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
