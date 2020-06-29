import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedPanel from './loggedOrNot/Logged';
import NotLoggedPanel from './loggedOrNot/NotLogged';

class Header extends Component {
  state = {
    logged: false,
  };
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center'>
        <Link to='/' className='navbar-brand p-2'>
          Supermarket
        </Link>
        {this.state.logged ? <LoggedPanel /> : <NotLoggedPanel />}
      </nav>
    );
  }
}

export default Header;
