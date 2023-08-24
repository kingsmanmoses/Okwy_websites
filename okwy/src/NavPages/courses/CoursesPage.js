import React from 'react';
import Courses from '../../components/courses/Courses';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page img">
        <h2>Courses</h2>
      </div>
      <Courses />
      <Footer />
    </>
  );
};

export default CoursesPage;
