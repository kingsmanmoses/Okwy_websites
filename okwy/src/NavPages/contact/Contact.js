import React from 'react';
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './cont.css';

const Contact = () => {
  return (
    <>
      {' '}
      <Navbar />
      <div className="about-page img">
        <h2>Contact Us</h2>
      </div>
      <div className="cont">
        <div className="getin">
          <h2>Get in touch</h2>
          <p>Looking for help? Fill the form and start a new adventure</p>
          <div className="getin-det">
            <h3>Office Address</h3>
            <div>
              <FaHome className="get" />
              <p>
                46/42 College Road,Ogui New Layout, Enugu <br /> B141, Kuchiyako
                Layout 111, Kuje, Abuja.
              </p>
            </div>
            <h3>Phone</h3>
            <div>
              <FaPhone className="get" />
              <p>
                09078987000, 08064927512 <br /> 07055996641, 07064489739
              </p>
            </div>
            <h3>Support</h3>
            <div>
              <FaEnvelope className="get" />
              <p>
                {' '}
                info@ptechconsults.com <br /> ptechconsult@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* For the contact form */}
        <div className="cont-form">
          <h4>Let's Connect</h4>
          <p>Contact us to start a partnership right away.</p>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-col">
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <div className="form-col">
            <button>Send Message</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
