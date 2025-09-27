import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Movies from './components/Movies';
import Webseries from './components/Webseries';
import Animeseries from './components/Animeseries';
import Kdrama from './components/Kdrama';
import HDetal from './components/HDetal.jsx';
import NDetal from './components/NDetail.jsx';
import TopData from './components/TopData.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <TopData/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie/:id" element={<HDetal/>}/>
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<NDetal/>}/> 
        <Route path='/webseries' element={<Webseries/>}/>
        <Route path='/animeseries' element={<Animeseries/>}/>
        <Route path='/kdrama' element={<Kdrama/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


