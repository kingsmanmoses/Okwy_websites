import { DataGrid } from '@mui/x-data-grid';
import './userTable.scss';
import { booksColumns } from '../../DataTableSource';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetchHook';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookTable = () => {
  // const location = useLocation();
  // const path = location.pathname.split('/')[1];
  const { data, loading, error } = useFetch('/books/');
  // const [data, setData] = useState(rows);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/books/${id}`);
      setBooks(books.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/books/${params.row._id}`} className="viewBtn">
              Update
            </Link>
            <div
              onClick={() => handleDelete(params.row._id)}
              className="deleteBtn"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="userTable">
      <DataGrid
        rows={books}
        columns={booksColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default BookTable;
