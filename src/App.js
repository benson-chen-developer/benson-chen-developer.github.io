import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScreenOne } from './Screens/ScreenOne';
import { Nav } from './Screens/Nav/Nav';
import { Work } from './Screens/Work/Work';

function App() {
  return (
    <Router>
      <main style={{margin: 0}}>
        <Nav />

        <Routes>
          <Route path="/" element={<ScreenOne />} />
          <Route path="/Projects" element={<Work />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
