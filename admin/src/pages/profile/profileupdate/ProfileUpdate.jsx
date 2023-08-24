import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import img from '../../../img/img2.jpg';
import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileUpdate = ({ inputs, title }) => {
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
      await axios.put(`/admin/${user._id}`, newUser);
      navigate('/');
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
            <img src={file ? URL.createObjectURL(file) : img} alt="" />
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
              <div className="formInput">
                <label>Profile-Img:</label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <button onClick={handleClick}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
