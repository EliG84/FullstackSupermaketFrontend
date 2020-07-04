import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SingleProduct from './SingleProduct';
import { apiGetCat } from '../../services/ApiServ';

class ProductsCat extends Component {
  state = {
    products: null,
  };

  async componentDidMount() {
    this.setState({ products: await apiGetCat(this.props.match.params.cat) });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.cat !== this.props.match.params.cat) {
      this.setState({ products: await apiGetCat(this.props.match.params.cat) });
    }
  }

  render() {
    return (
      <div className='container row m-1'>
        <Sidebar />
        <div className='row col-10 justify-content-center'>
          {this.state.products ? (
            this.state.products.map((i) => (
              <SingleProduct
                key={i._id}
                item={i}
                addToCart={this.props.addToCart}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default ProductsCat;
