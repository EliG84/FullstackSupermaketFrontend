import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedPanel extends Component {
  state = {};
  render() {
    return (
      <div className='navbar-nav'>
        <Link className='nav-link mx-2 text-info' to='/profile'>
          Profile
        </Link>
        <Link className='nav-link mx-2 text-success' to='/cart'>
          Cart{' '}
          <span
            style={{
              borderRadius: '50%',
              backgroundColor: 'blue',
              color: 'white',
            }}
            className='badge'>
            0
          </span>
        </Link>
        <Link className='nav-link mx-2 text-danger' to='/'>
          Logout
        </Link>
      </div>
    );
  }
}

export default LoggedPanel;
