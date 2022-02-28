import React from 'react'
import { Link } from "react-router-dom";
require('../styles/Header.css');

function Header(){

  return (
    <div className="header">
      <span className="header__title">Todo list</span>
      <span className="header__description">
        Made with React, Redux, NodeJS, MongoDB and JQuery(AJAX)
      </span>
    </div>
  )
}

export default Header