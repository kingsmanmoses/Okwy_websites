import React from 'react';
import {
  FaCheckCircle,
  FaCloudDownloadAlt,
  FaInfinity,
  FaLandmark,
  FaMobileAlt,
  FaNewspaper,
  FaPaperclip,
  FaStar,
  FaTrophy,
  FaVideo,
} from 'react-icons/fa';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import {} from 'react-icons/fa';
import img2 from '../../../img/tutor.svg';
import './details.css';
import { NavLink } from 'react-router-dom';

const Detailed = ({
  img,
  title,
  shortDesc,
  TutorName,
  TutorProf,
  courseOverview1,
  courseOverview2,
  topic1,
  topic2,
  topic3,
  topic4,
}) => {
  return (
    <>
      <Navbar />
      <div className="about-page img">
        <h2>Enroll On Our Popular Courses and Skill Up!</h2>
      </div>
      <div className="details-cont">
        <div className="overview">
          <img src={img} alt="img" />
          <div className="course-head">
            <div className="c-name">
              <h2>{title}</h2>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{shortDesc}</p>
            </div>
          </div>
          <h3>Instructor</h3>
          <div className="tutor">
            <img src={img2} alt="tutor" />
            <div className="tutor-det">
              <h5>{TutorName}</h5>
              <p>{TutorProf}</p>
            </div>
          </div>
          <hr />
          <h3>Course Overview</h3>
          <p>
            {courseOverview1}
            <br /> <br /> {courseOverview2}
          </p>
          <hr />
          <h3>What You'll Learn</h3>
          <div className="learn">
            <p>
              <FaCheckCircle className="checked" /> {topic1}
            </p>
            <p>
              <FaCheckCircle className="checked" /> {topic2}
            </p>
            <p>
              <FaCheckCircle className="checked" /> {topic3}
            </p>
            <p>
              <FaCheckCircle className="checked" /> {topic4}
            </p>
          </div>
        </div>
        <div className="enroll">
          <h3>This Course Include:</h3>
          <p>
            <FaVideo className="enroll-icon" /> 1hr online classes.
          </p>
          <p>
            <FaLandmark className="enroll-icon" /> 2hrs offline classes.
          </p>
          <p>
            <FaNewspaper className="enroll-icon" /> 20 Articles
          </p>
          <p>
            <FaCloudDownloadAlt className="enroll-icon" /> Downloadable
            resources
          </p>
          <p>
            <FaInfinity className="enroll-icon" /> Full lifetime access
          </p>
          <p>
            <FaMobileAlt className="enroll-icon" /> Access on mobile & Laptops
          </p>
          <p>
            <FaPaperclip className="enroll-icon" /> Assignments
          </p>
          <p>
            <FaTrophy className="enroll-icon" /> Certificate of completion
          </p>
          <div className="enroll-btn">
            <NavLink to="/" className="blue-enroll">
              Enroll Course
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detailed;
