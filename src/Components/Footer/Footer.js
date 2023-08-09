import React from 'react';
import './Footer.css';
import icon1 from './assets/Link → gitbook.svg.svg';
import icon2 from './assets/Link → twitter.svg.svg';
import icon3 from './assets/Link → discord.svg.svg';
import icon4 from './assets/Link → telegram.svg.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href='https://volta-finance.gitbook.io/voltafinance/protocol/general-introduction' target='new'><img src={icon1} alt="Icon 1" /></a>
        <a href='https://twitter.com/volta_protocol' target='new'><img src={icon2} alt="Icon 2" /></a>
        <a href='https://discord.com/invite/qYEWSVahFh' target='new'><img src={icon3} alt="Icon 3" /></a>
        <a href='https://t.me/VoltaFinance' target='new'><img src={icon4} alt="Icon 4" /></a>
      </div>
    </footer>
  );
};

export default Footer;
