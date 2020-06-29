import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/products/Products';
import * as Api from './services/ApiServ';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: null,
      data: null,
      cat: ['all', 'clothing', 'toys'],
    };
  }

  componentDidMount() {
    Api.apiGet().then((data) => {
      this.setState({ data }, () => {
        console.log(data);
      });
    });
  }

  render() {
    return (
      <Router>
        <div className='container overflow-hidden'>
          <Header />
          <div className='container-fluid'>
            <Switch>
              {this.state.data && (
                <Route
                  exact
                  path='/'
                  render={(routeProps) => (
                    <Products
                      categories={this.state.cat}
                      {...this.props}
                      {...routeProps}
                      products={this.state.data}
                    />
                  )}
                />
              )}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
