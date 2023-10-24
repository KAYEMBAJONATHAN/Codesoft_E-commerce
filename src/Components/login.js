import React, { useState } from 'react';
import axios from 'axios';
import '../Style/login.css';
import { Link } from 'react-router-dom';

export let loggedIn = false;

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const loginHandler = () => {
    loggedIn = true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/v1/auth';
      const { data: res } = await axios.post(url, data);
      localStorage.setItem('token', res.data);
      window.location = '/';
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="right-login">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="login-input"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="login-input"
            />
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green-button" onClick={loginHandler}>
              SignIn
            </button>
          </form>
        </div>
        <div className="left">
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className="white-btn">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
