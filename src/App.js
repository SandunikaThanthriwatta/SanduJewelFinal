import React from 'react';

import Loginpage from './pages/Loginpage';

import Homepage from './pages/Homepage';
import Jewellery from './pages/Jewellery';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/jewellery" element={<Jewellery />} />
      
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
