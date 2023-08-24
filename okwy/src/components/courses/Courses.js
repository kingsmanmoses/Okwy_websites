import React from 'react';
import './course.css';
import { FaStar } from 'react-icons/fa';
import { CoursesList } from './Data';
import { NavLink } from 'react-router-dom';

const Courses = () => {
  return (
    <>
      <div className="course">
        <h1>Our Popular Courses</h1>
        <p>P-Tech Offers the best courses you can ever think of</p>
        <div className="course-box">
          {CoursesList.map((item, index) => {
            return (
              <NavLink to={item.to} key={index} className="all-cos">
                <img src={item.img} alt="courses" />
                <div className="details">
                  <span>Updated {new Date().getFullYear()}</span>
                  <h6>{item.title}</h6>
                  <div className="star">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span> ({item.erolled})</span>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
