import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
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
      await axios.post(`/users/register`, newUser);
      navigate('/login');
    } catch (error) {
      console.error(error.response.data);
    }
  };
  console.log(info);
  return (
    <div className="reg-body">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Register</h2>
          <form>
            <div className="TR">
              <div className="input-box">
                <input
                  type="text"
                  required
                  id="fullName"
                  onChange={handleInput}
                />
                <label>Full-name</label>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  required
                  id="username"
                  onChange={handleInput}
                />
                <label>Username</label>
              </div>
            </div>
            <div className="TR">
              <div className="input-box">
                <input
                  type="email"
                  required
                  id="email"
                  onChange={handleInput}
                />
                <label>Email</label>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  required
                  id="password"
                  onChange={handleInput}
                />
                <label>Password</label>
              </div>
            </div>
            <div className="TR">
              <div className="input-box">
                <input type="tel" required id="phone" onChange={handleInput} />
                <label>Phone</label>
              </div>

              <div className="input-box">
                <p style={{ marginTop: '-10px', paddingBottom: '5px' }}>
                  Profile Img:
                </p>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>

            <button onClick={handleClick} className="btn">
              Register
            </button>
            <div className="register">
              <p>
                Already have an account?
                <Link to="/login" className="register-link">
                  {' '}
                  Login Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
