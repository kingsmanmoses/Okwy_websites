import { useContext } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="singleUser">
      <Sidebar />
      <div className="singleCont">
        <Navbar />
        <div className="center">
          <div className="singleProfile">
            <h1 className="title">Personal Information</h1>
            <div className="item">
              <img
                src={
                  user.img ||
                  'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                }
                alt="profile"
              />

              <div className="details">
                <h1>{user.fullName}</h1>
                <div className="detailItem">
                  <div>
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{user.email}</span>
                  </div>

                  <div>
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">0{user.phone}</span>
                  </div>

                  <div>
                    <span className="itemKey">Username:</span>
                    <span className="itemValue">{user.username}</span>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/profileUpdate" className="edit">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
