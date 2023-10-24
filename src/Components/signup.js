import React, { useState } from 'react';
import axios from 'axios';
import '../Style/signup.css';
import { Link, useNavigate } from 'react-router-dom';

export let signedIn = false;

const SignUp = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState();
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const signedInHandler = () => {
    signedIn = true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5000/api/v1/users';
      const { data: res } = await axios.post(url, data);
      setSignedIn(true);
      navigate('/login');
      console.log(res.message);
    } catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="left-container">
          <h1> Welcome...</h1>
          <Link to="/login">
            <button type="button" className="white-btn">
              SignIn
            </button>
          </Link>
        </div>
        <div className="right-container">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="form-input"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="form-input"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="form-input"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="form-input"
            />
            {error && <div className="error-msg">{error}</div>}
            <button type="submit" className="green-button" onClick={signedInHandler}>
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
