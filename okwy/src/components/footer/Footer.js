import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h3>Top Services</h3>
        <li>Installations</li>
        <li>Managing Websites</li>
        <li>Skill Training</li>
        <li>Marketing Services</li>
      </div>
      <div className="footer-col">
        <h3>Features</h3>
        <li>I.T Solutions</li>
        <li>Environmental Consulting</li>
        <li>Construction</li>
        <li>Installations</li>
      </div>
      <div className="footer-col">
        <h3>Clients and Partners</h3>
        <li>E.E CROWNWELL LTD</li>
        <li>WISTECH CONSULTIUM</li>
        <li>PYRAMID NEWS an NGO</li>
        <li>BRONZEBIT CONSULT</li>
      </div>
      <div className="footer-col">
        <h3>Newsletter</h3>
        <p>You can Always Trust Us. We Only Send Discount Offers.</p>
        <div className="subscribe">
          <input type="email" name="email" placeholder="Your Email Address" />
          <button className="btn-yellow button">SUBSCRIBE</button>
        </div>
        <div className="social-links">
          <Link to="/" className="so-icons">
            <FaFacebook />
          </Link>
          <Link to="/" className="so-icons">
            <FaInstagram />
          </Link>
          <Link to="/" className="so-icons">
            <FaTwitter />
          </Link>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright ©{new Date().getFullYear()} All Rights Reserved | This is
          P-Tech Website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
