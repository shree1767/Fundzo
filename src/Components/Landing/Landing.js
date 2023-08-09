import React,{ useState, useEffect }  from 'react';
import './Landing.css';
import logo from './assets/Button.svg';
import arrow from './assets/SVG.svg'

const LandingPage = () => {
  const [totalValue, setTotalValue] = useState(42616.71);

  return (
    <div className="landing-page">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="main-heading">Deposit and Borrow</h1>
      <h2 className="main-heading">Multiply Your Exposure to Crypto</h2>
      <p className="description">
        Borrow VOLT stablecoin at 0% interest by depositing your crypto assets.
      </p>
      <div className="buttons">
        <button className="gradient-button">Auto-Compound GNS <span><img src={arrow} className='arrow'/></span></button>
        <button className="dark-button">Borrow</button>
      </div>
      <p className='totalvalue'>
        Total Value Locked: <span>${totalValue}</span>
      </p>
    </div>
  );
};

export default LandingPage;

