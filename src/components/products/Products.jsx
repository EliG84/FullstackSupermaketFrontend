import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SingleProduct from './SingleProduct';

class Products extends Component {
  state = {
    products: null,
  };

  componentDidMount() {
    this.sort();
  }

  sort = (cat = 'all') =>
    cat === 'all'
      ? this.setState({ products: [...this.props.products] })
      : this.setState({
          products: this.props.products.filter((p) => p.category === cat),
        });

  render() {
    return (
      <div className='container row m-1'>
        <Sidebar sort={this.sort} categories={this.props.categories} />
        <div className='row col-10 justify-content-center'>
          {this.state.products ? (
            this.state.products.map((i) => (
              <SingleProduct key={i._id} item={i} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
