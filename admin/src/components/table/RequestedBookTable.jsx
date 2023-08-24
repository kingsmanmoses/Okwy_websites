// import { DataGrid } from '@mui/x-data-grid';
import useFetch from '../../hooks/useFetchHook';
import './reqTable.scss';
import img from '../../img/pro.svg';
import axios from 'axios';
// import { useEffect, useState } from 'react';

const RequestedBookTable = () => {
  // const { data, loading, error } = useFetch('/issueBook/reqBooks');
  const { data, loading, error } = useFetch('/issueBook/reqBooks');
  return (
    <div className="ReqTable">
      <div className="tableCont">
        {/* <div className="tableHeader">Requested Books</div> */}
        <div className="tableBody">
          <table>
            <thead>
              <tr>
                <th>Student-Name</th>
                <th>Book-Name</th>
                <th>Book-Author</th>
                <th>Book-Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((book) => (
                <tr key={book._id}>
                  <td>{book.userDetails[0].fullName}</td>
                  <td>
                    <img src={book.bookDetails[0].bookImg || img} alt="love" />
                    {book.bookDetails[0].bookName}
                  </td>
                  <td>{book.bookDetails[0].bookAuthor}</td>
                  <td>{book.bookDetails[0].bookCategory}</td>
                  <td>
                    <button
                      onClick={async () => {
                        try {
                          const acceptBook = {
                            bookStatus: 'accepted',
                          };
                          await axios.put(`/issueBook/${book._id}`, acceptBook);
                          alert('Book accepted');
                        } catch (error) {
                          console.error(error.response.data);
                        }
                      }}
                      className="btnAcc"
                    >
                      Accept
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          await axios.delete(`/issueBook/${book._id}`);
                          alert('Request Deleted');
                          window.location.reload();
                        } catch (error) {
                          console.error(error.response.data);
                        }
                      }}
                      className="btnDel"
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* {data.map((book) => (
        <div style={{ display: 'flex', gap: '30px' }} key={book._id}>
          <h1>{book.userId}</h1>
          <h2>{book.bookId}</h2>
          <h3>{book.bookDetails[0].bookName}</h3>
          <h4>{book.userDetails[0].fullName}</h4>
        </div>
      ))} */}
    </div>
  );
};

export default RequestedBookTable;
