import React from 'react';
import logo from '../svg/airbnblogo.png';
import './topbar.css';

function Topbar() {
  return (
    <div className="Topbar">
      <header>
        <div>
            <div>
                <a
                  href="/"
                  //target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={logo} className="Topbar-logo" alt="logo" />
                </a>
            </div>
            <div>

            </div>
        </div>

      </header>
    </div>
  );
}

export default Topbar;
