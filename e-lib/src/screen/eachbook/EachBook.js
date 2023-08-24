import React from 'react';
import book from '../../img/img.jpg';
import vid from '../../img/vid.mp4';
import pdf from '../../img/Moses-CV3.pdf';
import './eachBook.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetchHook';

const EachBook = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data, loading, error } = useFetch(`/issueBook/find/${path}`);
  return (
    <div>
      <Navbar />
      {/* for the each book page */}
      <div className="eachCont">
        <div className="eachItem">
          <div className="eachImg">
            <img src={data.bookId?.bookImg} alt="" />
            <h2>{data.bookId?.bookName}</h2>
          </div>
          <div className="eachDesc">
            <h2>Description</h2>
            <p>{data.bookId?.bookDesc}</p>
            <h2>PDF File</h2>
            <a
              href={data.bookId?.bookPdf}
              // target="_blank"
              // rel="noreferrer"
              download="Resume"
            >
              Download Pdf File
            </a>
          </div>
        </div>
        <video src={data.bookId?.bookVid || vid} controls autoPlay></video>
      </div>
      <Footer />
    </div>
  );
};

export default EachBook;
