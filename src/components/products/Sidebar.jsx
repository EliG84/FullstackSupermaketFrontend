import React, { Component } from 'react';

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className='col-2 bg-light'>
        <div className='navbar-nav d-flex flex-column text-center'>
          <h3>Categories</h3>
          {this.props.categories &&
            this.props.categories.map((cat) => (
              <button
                onClick={this.props.sort.bind(this, cat)}
                key={cat}
                className='btn btn-outline-warning border border-0 nav-link mx-2 text-dark my-1'
                to={`${this.props.baseUrl}/${cat}`}>
                {cat}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
