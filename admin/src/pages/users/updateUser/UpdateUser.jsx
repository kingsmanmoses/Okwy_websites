import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetchHook';

const UpdateUser = ({ inputs, title }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const { data, loading, error } = useFetch(`/admin/user/${path}`);
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
      await axios.put(`/admin/user/${data._id}`, newUser);
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
          <h1>
            {title} ({data.fullName})
          </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              }
              alt="love"
            />
          </div>
          <div className="right">
            <form action="">
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    onChange={handleInput}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
