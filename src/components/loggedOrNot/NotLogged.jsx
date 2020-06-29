import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotLoggedPanel extends Component {
  state = {};
  render() {
    return (
      <div className='navbar-nav'>
        <Link className='nav-link mx-2 text-danger' to='/signup'>
          Sign Up
        </Link>
        <Link className='nav-link mx-2 text-success' to='/login'>
          Log in
        </Link>
      </div>
    );
  }
}

export default NotLoggedPanel;
