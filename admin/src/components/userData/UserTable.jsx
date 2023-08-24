import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './userTable.scss';
import { userColumns } from '../../DataTableSource';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetchHook';
import axios from 'axios';

const UserTable = () => {
  // const location = useLocation();
  // const path = location.pathname.split('/')[1];
  const { data, loading, error } = useFetch('/admin/');
  // const [data, setData] = useState(rows);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/admin/user/${id}`);
      setUser(user.filter((item) => item._id !== id));
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
            {/* <div className="approveBtn">Approve</div> */}
            <Link to={`/users/${params.row._id}`}>
              <div className="viewBtn">View</div>
            </Link>
            <div
              className="deleteBtn"
              onClick={() => {
                handleDelete(params.row._id);
              }}
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
        rows={user}
        columns={userColumns.concat(actionColumn)}
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

export default UserTable;
