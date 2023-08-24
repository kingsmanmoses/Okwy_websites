import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Heropage from '../../components/heropage/Heropage';
import Science from '../../components/bookSection/Science';
import Art from '../../components/bookSection/Art';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      {/* for the science section */}
      <Science />
      {/* For the art section */}
      <Art />
      {/* For the footer */}
      <Footer />
    </div>
  );
};

export default Home;
