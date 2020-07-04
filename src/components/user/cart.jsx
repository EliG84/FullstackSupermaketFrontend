import React, { Component } from 'react';
import Sidebar from '../products/Sidebar';
import SingleProductCart from '../products/singleProductCart';

class Cart extends Component {
  state = {};

  componentDidMount() {
    if (!localStorage['token']) {
      if (this.props.history) {
        this.props.history.push('/');
      } else {
        window.location.href = '/';
      }
    }
  }

  render() {
    return (
      <div className='row m-1 justify-content-center'>
        <Sidebar />
        <div className='row col-lg-10 justify-content-center text-center'>
          <h2 className='col-12'>
            Total in Cart {this.props.cartSize}
            NIS
          </h2>
          {this.props.cart.length > 0 ? (
            this.props.cart.map((i) => (
              <SingleProductCart
                key={i._id}
                item={i}
                updateCart={this.props.updateCart}
              />
            ))
          ) : (
            <h1>Cart is Empty</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
