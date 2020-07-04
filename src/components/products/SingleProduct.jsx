import React, { Component } from 'react';

class SingleProduct extends Component {
  state = {};

  amountRef = React.createRef();

  handleClick = () => {
    this.props.item.amount = Number(this.amountRef.current.value);
    this.props.addToCart(this.props.item);
  };

  render() {
    return (
      <div className='d-flex flex-column align-items-center justify-content-center col-lg-4 p-2 border border-darken-2 m-1'>
        <img className='img-thumbnail' src={this.props.item.image} alt='' />
        <p>{this.props.item.name}</p>
        <p>Price: {this.props.item.price}</p>
        <input
          className='form-control row p-0'
          type='number'
          ref={this.amountRef}
          min={1}
          defaultValue={1}
        />{' '}
        <button
          onClick={this.handleClick}
          className='btn btn-outline-success m-2'>
          Add
        </button>
      </div>
    );
  }
}

export default SingleProduct;
