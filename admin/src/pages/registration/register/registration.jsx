import React from 'react';
import './register.scss';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="reg-body">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Register</h2>
          <form>
            <div className="TR">
              <div className="input-box">
                <input type="text" required />
                <label for="">Full-name</label>
              </div>
              <div className="input-box">
                <input type="text" required />
                <label for="">Username</label>
              </div>
            </div>
            <div className="TR">
              <div className="input-box">
                <input type="email" required />
                <label for="">Email</label>
              </div>
              <div className="input-box">
                <input type="password" required />
                <label for="">Password</label>
              </div>
            </div>
            <div className="TR">
              <div className="input-box">
                <input type="tel" required />
                <label for="">Phone</label>
              </div>
              <div className="input-box">
                <p style={{ marginTop: '-10px', paddingBottom: '5px' }}>
                  Profile Img:
                </p>
                <input type="file" />
              </div>
            </div>
            <button type="submit" className="btn">
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
