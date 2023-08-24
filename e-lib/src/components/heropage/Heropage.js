import React from 'react';
import './hero.css';
import book from '../../img/hero.png';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Heropage = () => {
  return (
    <div className="hero">
      {/* for the search bar */}
      <div className="search">
        <CiSearch />
        <input type="text" placeholder="Search book name,author,edition...." />
      </div>
      {/* for the main hero body page */}
      <div className="hero-cont">
        <div className="hero-details">
          <h1>
            Happy reading, <br /> explore new worlds from authors.
          </h1>
          <p>
            Get to explore different books, beyond your imagination. We offer
            you the best books to improve your knowledge.
          </p>
          <Link className="hero-btn" to="">
            Explore Books
          </Link>
        </div>
        <img className="hero-img" src={book} alt="" />
      </div>
    </div>
  );
};

export default Heropage;
