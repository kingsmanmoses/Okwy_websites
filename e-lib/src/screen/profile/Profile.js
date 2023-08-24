import React, { useContext } from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);

  // For navigation
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };
  return (
    <div>
      <Navbar />
      {/* For the profile information */}
      <div className="profileInfo">
        <div className="profileCont">
          <h2>{user.fullName}</h2>
          <p>{user.email}</p>
          <img
            src={
              user.img ||
              'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            }
            alt=""
          />
          <div className="btn-update">
            <Link className="profileBtn" to="/profile/profileUpdate">
              Update
            </Link>
            <div onClick={handleLogout} className="profileBtn">
              LogOut
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
