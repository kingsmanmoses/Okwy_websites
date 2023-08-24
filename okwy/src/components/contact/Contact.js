import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-cont">
      <div className="reminder">
        <p>Get 100% Online and Offline Courses With Us.</p>
        <h1>Register To Get Started</h1>
      </div>
      <form className="form">
        <h3>Contact Us Right Away!</h3>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Your Email" name="email" />
        <button className="btn-yellow button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
