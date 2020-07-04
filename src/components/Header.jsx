import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    logged: false,
  };
  render() {
    return (
      <nav>
        <Link to='/' className='navbar-brand p-2'>
          Supermarket
        </Link>
      </nav>
    );
  }
}

export default Header;
