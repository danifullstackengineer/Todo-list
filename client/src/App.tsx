import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const App = ({}) => {
  return (
    <Router>
      <div className="app">
          <Header/>
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
