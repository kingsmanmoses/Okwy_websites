import { useContext, useState } from 'react';
import './nav.css';
import pro from '../../img/pro.svg';
import { GiBookshelf } from 'react-icons/gi';
import { IoBookSharp } from 'react-icons/io5';
import { ImBooks } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  return (
    <nav>
      <Link to="/" className="logo">
        Moses E-lib{' '}
        <span>
          <GiBookshelf />
        </span>
      </Link>
      {/* for the mobile icons */}
      <div
        style={{ display: 'none' }}
        className="ham-menu"
        onClick={handleclick}
      >
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* For the nav menu */}
      <div>
        <ul className="menu">
          <Link to="/books" className="menu-item">
            Books <ImBooks />
          </Link>

          <Link to="/Brequest" className="menu-item">
            Books Requested
            <IoBookSharp />
          </Link>
        </ul>
      </div>
      {/* for the profile image and  */}
      {user ? (
        <Link to="/profile" className="profile">
          <img src={user.img || pro} alt="pro" />
          <h4>{user.username}</h4>
        </Link>
      ) : (
        <>
          <ul className="menu">
            <Link to="/login" className="menu-item">
              Login
            </Link>

            <Link to="/register" className="menu-item">
              Register
            </Link>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
