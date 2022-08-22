//dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// imported pages
import Home from './pages/Home';
import Single from './pages/Single'

// imported components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//imported stylesheet
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stylist/:id' element={<Single />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
