import React from 'react';
import './about.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page img">
        <h2>About Us</h2>
      </div>
      <div className="about-cont">
        <div className="about-img"></div>
        <div className="about-text">
          <h2>
            Welcome To P-Tech Consult, some of the things you need to know About
            Us
          </h2>
          <p>
            In P-Tech consult we provide Unique and creative solutions that
            meets the clients' expectations not only by realizing the client's
            business objectives, but particularly by our strict adherence to the
            ethical principles of public relations thereby the mission statement
            “your innovation, our motivation.”
          </p>
          <br />
          <p>
            The carefully balanced combination of knowledge of the local
            conditions, the innovative approach to communications and the
            experience in work in international partnerships, enhance P-Tech
            Consults capabilities to effectively manage perceptions of key
            audiences. Adherence to stringent ethical standards, as well as the
            use of creative communication and constructional tools makes P-Tech
            Consult capable of optimally satisfying the needs of its clients.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
