import React from 'react'
import Menubar from './components/Menubar/Menubar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Explore from './pages/Explore/explore.jsx';
import ContactUs from './pages/ContactUs/Contact.jsx';

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App;