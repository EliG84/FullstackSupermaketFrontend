import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className='col-lg-2 bg-light'>
        <div className='navbar-nav d-flex flex-column text-center'>
          <h3>Categories</h3>
          <Link className='nav-fill text-decoration-none' to='/'>
            All
          </Link>
          <Link
            className='nav-fill text-decoration-none'
            to='/category/clothing'>
            Clothing
          </Link>
          <Link className='nav-fill text-decoration-none' to='/category/toys'>
            Toys
          </Link>
          <Link className='nav-fill text-decoration-none' to='/category/foods'>
            Food
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
