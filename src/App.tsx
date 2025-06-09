import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import Tracking from './pages/Tracking';
import BecomeQueuer from './pages/BecomeQueuer';
import QueuerSuccess from './pages/QueuerSuccess';
import Demo from './pages/Demo';
import BetaMilano from './pages/BetaMilano';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/become-queuer" element={<BecomeQueuer />} />
        <Route path="/queuer-success" element={<QueuerSuccess />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/beta-milano" element={<BetaMilano />} />
      </Routes>
    </Router>
  );
}