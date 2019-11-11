import React from 'react';
import logo from '../svg/airbnblogo.png';
import './results.css';

function Results() {
  return (
    <div className="Results">
      <header className="Results-header">
        <img src={logo} className="Results-logo" alt="logo" />
        <p>
          Edit <code>src/results.js</code> and save to reload.
        </p>
        <a

          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Results;
