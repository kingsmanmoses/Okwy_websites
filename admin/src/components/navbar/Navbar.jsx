import './navbar.scss';
import img from '../../img/pro.svg';
import {
  MdOutlineDarkMode,
  MdOutlineNotificationsNone,
  MdOutlineSearch,
  MdOutlineList,
} from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search...?" />
          <MdOutlineSearch />
        </div>
        <div className="items">
          <div className="eachItem">
            <MdOutlineDarkMode className="icon" />
          </div>
          <div className="eachItem">
            <MdOutlineNotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="eachItem">
            <MdOutlineList className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="eachItem">
            <img src={user.img || img} alt="" className="avatar" />
            <p>{user.fullName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
