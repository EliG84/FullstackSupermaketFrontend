import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    logged: false,
    searchQ: '',
  };

  handleInput = (e) => {
    this.setState({ searchQ: e.target.value });
  };

  render() {
    return (
      <nav className='row justify-content-around'>
        <Link to='/' className='navbar-brand p-2 mr-4'>
          Supermarket
        </Link>
        <div className='row justify-content-between align-content-center'>
          <input
            onInput={this.handleInput}
            type='text'
            placeholder='Search...'
          />
          <Link to={`/search/${this.state.searchQ}`} className='btn btn-sm'>
            Search
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
