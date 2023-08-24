import './newuser.scss';
import img from '../../../img/img2.jpg';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetchHook';

const NewUser = ({ inputs, title }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const handleInput = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // for handling the click for submitting the file to the DB
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
      };
      await axios.post('/admin/user/register', newUser);
      navigate('/users');
    } catch (error) {
      console.error(error.response.data);
    }
  };
  console.log(info);
  return (
    <div className="newUser">
      <Sidebar />
      <div className="newUserCont">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <form action="">
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    required
                    id={input.id}
                  />
                </div>
              ))}

              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewUser;
