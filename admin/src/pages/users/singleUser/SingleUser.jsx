import React from 'react';
import './single.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetchHook';

const SingleUser = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const { data, loading, error } = useFetch(`/admin/user/${path}`);
  return (
    <div className="singleUser">
      <Sidebar />
      <div className="singleCont">
        <Navbar />
        <div className="center">
          <div className="singleProfile">
            <h1 className="title">User Information</h1>
            <div className="item">
              <img
                src={
                  data.img ||
                  'https://images.pexels.com/photos/610294/pexels-photo-610294.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                alt="user"
              />
              <div className="details">
                <h1>{data.fullName}</h1>
                <div className="detailItem">
                  <div>
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{data.email}</span>
                  </div>

                  <div>
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{data.phone}</span>
                  </div>

                  <div>
                    <span className="itemKey">Username:</span>
                    <span className="itemValue">{data.username}</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to={`/users/updateUser/${data._id}`} className="edit">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
