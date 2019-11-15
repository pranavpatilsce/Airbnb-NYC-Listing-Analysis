import React from 'react';
import logo from '../svg/airbnblogo.png';
import './topbar.css';

function Topbar() {
  return (
    <div >
      <header>
            <div className="Topbar">
                <a href="/" rel="noopener noreferrer"> <img src={logo} className="TopBar-logo"/></a>
                <h4 className="TopBar-Title">NYC price prediction</h4>
            </div>
      </header>
    </div>
  );
}

export default Topbar;
