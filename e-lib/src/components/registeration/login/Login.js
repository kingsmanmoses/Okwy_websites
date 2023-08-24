import { useContext, useState } from 'react';
import './login.css';
import { IoLockClosed, IoPersonCircle } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';

const Login = () => {
  // For navigation
  const navigate = useNavigate();
  // for handling the login
  const [credentials, setCredentails] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  // For checking the info or details the user inputs
  const handleChange = (e) => {
    setCredentails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    // to prevent your page from refreshing
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('/users/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className="login-body">
      <div className="wrapper">
        <div className="form-box">
          <h2>Login</h2>
          <form>
            <div className="input-box">
              <span className="icon">
                <IoPersonCircle />
              </span>
              <input
                type="text"
                id="username"
                required
                onChange={handleChange}
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IoLockClosed />
              </span>
              <input
                type="password"
                id="password"
                required
                onChange={handleChange}
              />
              <label>Password</label>
            </div>

            <button disabled={loading} onClick={handleLogin} className="btn">
              Login
            </button>

            <div className="register">
              <p>
                Don't have an account?
                <Link to="/register" className="link-tag">
                  {' '}
                  Register here
                </Link>
              </p>
            </div>
          </form>
          {error && <h1>{error.message}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Login;
