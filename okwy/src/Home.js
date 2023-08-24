import React from 'react';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Heropage from './components/heropage/Heropage';
import Navbar from './components/navbar/Navbar';
import Service from './components/services/Service';

const Home = () => {
  return (
    <div className="body">
      <Navbar />
      <Heropage />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
