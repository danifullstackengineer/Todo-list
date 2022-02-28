import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Update from './components/Tasks/Update';
require('./styles/index.css');

const App = ({}) => {

  const [screen, setScreen] = useState("task")

  return (
    <Router>
      <div className="app">
          <Header/>
        <Routes>
          <Route path="/*" element={<Body/>} />
          <Route path="/updateTask/:id" element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
