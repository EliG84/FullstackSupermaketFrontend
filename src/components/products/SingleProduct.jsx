import React, { Component } from 'react';

class SingleProduct extends Component {
  state = {};
  render() {
    return (
      <div className='col-lg-4 p-2 border border-darken-2 m-1'>
        <img className='img-thumbnail' src={this.props.item.image} alt='' />
        <p>{this.props.item.name}</p>
        <input type='number' min={1} defaultValue={1} />{' '}
        <button className='btn btn-sm btn-outline-light text-dark border border-1'>
          Add
        </button>
      </div>
    );
  }
}

export default SingleProduct;
