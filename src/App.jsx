import './app.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Instructions from './components/Instructions/Instructions'; 
import Leaderboard from './components/Leaderboard/Leaderboard'; 
import Trivia from './components/Trivia/Trivia';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/trivia" element={<Trivia />} /> {/* Use the Trivia component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
