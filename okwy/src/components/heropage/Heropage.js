import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

const Heropage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };
  return (
    <>
      <Slider {...settings} className="slide">
        <div>
          <div className="hero-page">
            <h2>
              Grow Your Skills To Advance{' '}
              <span className="sp">Your Career Path</span>
            </h2>
            <p>
              With the help of E-learning create your own path and drive on your
              skills on your own to achieve what you seek. Joining P-TECH
              CONSULT will help you achieve this.
            </p>
            <div className="btn">
              <Link className="btn-blue button" to="/">
                Enroll Now
              </Link>
              <Link className="btn-yellow button" to="/courses">
                View Courses
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="envo-page">
            <h2>
              We are always here to provide{' '}
              <span className="sp">Environmental consultancy</span>
            </h2>
            <p>
              We provide expert assessment and advisory services for our clients
              on matters pertaining to the management of environmental issues.
            </p>
          </div>
        </div>
        <div>
          <div className="const-page">
            <h2>
              We are the best when it comes to{' '}
              <span className="sp">Construction business</span>
            </h2>
            <p>
              We make use of technology and digital tools in the construction
              processes, like design, gathering of materials, and project
              planning.
            </p>
          </div>
        </div>
        <div>
          <div className="it-page">
            <h2>
              We provide <span className="sp">I.T Solutions</span>
            </h2>
            <p>
              We provide a collection of software, applications, programs and IT
              services that are offered to companies in an effort to support
              specific business processes or address particular challenges.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Heropage;
