import './profileUpdate.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // To handle the input value input
  const [info, setInfo] = useState({});
  const handleInput = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // For changing the img when selecting a file img
  const [file, setFile] = useState('');
  // For image submitting to the DB
  const imgDB = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'bookImages');
    try {
      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/kingsmanmoses/image/upload',
        data
      );

      const { url } = uploadRes.data;
      return url;
    } catch (error) {
      console.error(error.response.data);
    }
  };
  // for handling the click for submitting the file to the DB
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        ...info,
        img: await imgDB(),
      };
      await axios.put(`/users/${user._id}`, newUser);
      navigate('/');
    } catch (error) {
      console.error(error.response.data);
    }
  };
  console.log(info);
  const goBack = () => {
    navigate('/');
  };
  return (
    <div className="proUpdate">
      <div className="proCont">
        <h2>Edit Profile</h2>
        <form>
          <div className="proDetails">
            <div className="proInput">
              <label>FullName:</label>
              <input
                id="fullName"
                type="text"
                placeholder="Full-Name"
                onChange={handleInput}
              />
            </div>
            <div className="proInput">
              <label>Username:</label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="proDetails">
            <div className="proInput">
              <label>Email:</label>
              <input
                id="email"
                type="email"
                placeholder="email address"
                onChange={handleInput}
              />
            </div>
            <div className="proPic">
              <label>Profile Pic:</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
          </div>

          <div className="proBtnCont">
            <button onClick={handleClick} className="proBtn">
              Update Info
            </button>
            <button onClick={goBack} className="proBtn">
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
