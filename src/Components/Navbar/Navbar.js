import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`links`}>
        <a href="#">Wrapper</a>
        <a href="#">Vaults</a>
        <a href="#">Swap</a>
        <a href="#">Stake</a>
      </div>
      <button className="connect-button">Connect</button>
    </nav>
  );
};

export default Navbar;


