import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Page2 from './page2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/page2" element={<page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
