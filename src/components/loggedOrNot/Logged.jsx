import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedPanel extends Component {
  state = {};

  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <div className='navbar-nav'>
        <Link className='nav-link mx-2 text-info' to='/profile'>
          Profile
        </Link>
        <Link className='nav-link mx-2 text-success' to='/user/cart'>
          Cart{' '}
          <span
            style={{
              borderRadius: '50%',
              backgroundColor: 'blue',
              color: 'white',
            }}
            className='badge'>
            {this.props.cartSize}
          </span>
        </Link>
        <Link
          onClick={this.handleLogout}
          className='nav-link mx-2 text-danger'
          to='/'>
          Logout
        </Link>
      </div>
    );
  }
}

export default LoggedPanel;
