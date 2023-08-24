import { useContext, useEffect, useState } from 'react';
import './book.css';
// import book from '../../img/img.jpg';
import { FcBiotech } from 'react-icons/fc';
// import Art from './Art';
import useFetch from '../../hooks/useFetchHook';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Science = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useFetch('/books/science');
  // This is for loading up more books from the database
  const [visible, setVisible] = useState(4);
  const loadMore = () => {
    setVisible(visible + visible);
  };

  const slice = data.slice(0, visible);

  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <div className="book">
      <h1>
        Science Books <FcBiotech />
      </h1>
      {loading ? (
        'loading please wait'
      ) : (
        <>
          <div className="book-itemCont">
            <div className="book-cont">
              {slice.map((item) => (
                <div className="book-item" key={item._id}>
                  <img src={item.bookImg} alt="" />
                  <h2>{item.bookName}</h2>
                  <p>{item.bookAuthor}</p>
                  <button
                    onClick={async () => {
                      if (user) {
                        try {
                          await Promise.all(
                            axios.post(
                              `/issueBook/request?bookName=${item.bookName}&username=${user.username}`
                            )
                          );
                        } catch (err) {}
                        alert('Booked');
                      } else {
                        navigate('/login');
                      }
                    }}
                  >
                    Request Book
                  </button>
                </div>
              ))}
            </div>
            <button onClick={loadMore}>More Books</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Science;
