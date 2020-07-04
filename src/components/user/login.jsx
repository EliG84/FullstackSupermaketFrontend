import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  render() {
    return (
      <div className='contaniner d-flex flex-column align-items-center mt-5 border border-success p-2 bg-light'>
        <h3>Enter Your Login Details</h3>
        <input
          className='form-control col-lg-6 m-3'
          type='text'
          placeholder='user@email.com'
          required
        />
        <input
          className='form-control col-lg-6 m-3'
          type='text'
          placeholder='password'
          required
        />
        <button className='btn btn-lg btn-outline-success mb-2'>Login</button>
        <Link to='/user/signup'>New Member?</Link>
      </div>
    );
  }
}

export default Login;
