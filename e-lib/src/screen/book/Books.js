import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Science from '../../components/bookSection/Science';
import Art from '../../components/bookSection/Art';
import Footer from '../../components/footer/Footer';

const Books = () => {
  return (
    <div>
      <Navbar />
      <Science />
      <Art />
      <Footer />
    </div>
  );
};

export default Books;
