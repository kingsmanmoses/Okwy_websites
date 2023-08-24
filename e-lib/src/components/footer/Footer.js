import React from 'react';
import './footer.css';
import fotImg from '../../img/footerimg.svg';
import { GiBookshelf } from 'react-icons/gi';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 className="foot-logo">
          Moses E-lib{' '}
          <span>
            <GiBookshelf />
          </span>
        </h1>
        <p>
          we offer the best books to improve your <br /> knowledge and make you
          grow beyond your imagination
        </p>
      </div>

      <img src={fotImg} alt="" />
    </div>
  );
};

export default Footer;
