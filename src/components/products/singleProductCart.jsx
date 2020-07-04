import React, { Component } from 'react';

class SingleProductCart extends Component {
  state = {};
  render() {
    return (
      <div className='d-flex flex-column align-items-center col-lg-4 p-2 border border-darken-2 m-1'>
        <img className='img-thumbnail' src={this.props.item.image} alt='' />
        <p>{this.props.item.name}</p>
        <p>Price: {this.props.item.price}</p>
        <input
          type='number'
          min={0}
          defaultValue={this.props.item.amount}
        />{' '}
        <button className='btn btn-sm btn-outline-danger text-dark border border-1'>
          Update Amount
        </button>
      </div>
    );
  }
}

export default SingleProductCart;
