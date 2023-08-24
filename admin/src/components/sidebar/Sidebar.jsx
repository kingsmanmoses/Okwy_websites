import { useContext } from 'react';
import './sidebar.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
  MdLibraryBooks,
  MdLogout,
  MdOutlineAccountCircle,
  MdPersonOutline,
} from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  // For navigation
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Admin-Panel</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div>
            <p className="title">PROFILE</p>
            <Link to="/" className="a">
              <li>
                <MdOutlineAccountCircle className="icon" />
                <span>Profile</span>
              </li>
            </Link>

            <div className="logBtn" onClick={handleLogOut}>
              <li>
                <MdLogout className="icon" />
                <span>Logout</span>
              </li>
            </div>
          </div>

          <div>
            <p className="title">USERS & BOOKS</p>
            <Link to="/users" className="a">
              <li>
                <MdPersonOutline className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/users/newUser" className="a">
              <li>
                <MdPersonOutline className="icon" />
                <span>Add New User</span>
              </li>
            </Link>
            <Link to="/books" className="a">
              <li>
                <ImBooks className="icon" />
                <span>Books</span>
              </li>
            </Link>
            <Link to="/books/newBook" className="a">
              <li>
                <ImBooks className="icon" />
                <span>Add new books</span>
              </li>
            </Link>
          </div>

          <div>
            <p className="title">NOTIFICATIONS</p>
            <Link to="/books/requestedBook" className="a">
              <li>
                <MdLibraryBooks className="icon" />
                <span>Requested-Books</span>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
