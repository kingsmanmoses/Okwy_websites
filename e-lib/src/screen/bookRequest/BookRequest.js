import { useContext, useEffect, useState } from 'react';
import './BookRequest.css';
// import book from '../../img/img.jpg';
import { FcApproval } from 'react-icons/fc';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetchHook';

const BookRequest = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch('/issueBook/reqBooks');
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(data);
  }, [data]);
  const BookRequested = () => {
    if (books[0]?.bookStatus === 'accepted' && user._id === books[0]?.userId)
      return books.map((book) => (
        <div className="bookR-item" key={book._id}>
          <img src={book.bookDetails[0].bookImg} alt="" />
          <h2>{book.bookDetails[0].bookName}</h2>
          <p>{book.bookDetails[0].bookAuthor}</p>
          <Link className="button" to={`/Brequest/${book._id}`}>
            View More
          </Link>
        </div>
      ));
    else
      return (
        <div className="bookNon">
          <h2>You have not Requested For Any Book Yet</h2>
        </div>
      );
  };

  return (
    <div>
      <Navbar />
      {/* For the books requested section */}
      {user ? (
        <>
          <div className="bookR">
            <h1>
              Books Requested <FcApproval />
            </h1>
            <div className="bookR-cont">
              <BookRequested />
            </div>
          </div>
        </>
      ) : (
        <div className="bookReq">
          <h1>You can't Request for any book because you're not logged In.</h1>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BookRequest;
