import React, { Component } from 'react';
import { apiSearch } from '../../services/ApiServ';
import Sidebar from './Sidebar';
import SingleProduct from './SingleProduct';

class ProductsSearch extends Component {
  state = {
    products: null,
  };

  async componentDidMount() {
    if (this.props.match) {
      this.setState({
        products: await apiSearch(this.props.match.params.name),
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.match) {
      if (prevProps.match !== this.props.match) {
        this.setState({
          products: await apiSearch(this.props.match.params.name),
        });
      }
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

export default ProductsSearch;
