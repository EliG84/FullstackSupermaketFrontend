import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/products/Products';
import ProductsCat from './components/products/ProductsCat';
import LoggedPanel from './components/loggedOrNot/Logged';
import NotLoggedPanel from './components/loggedOrNot/NotLogged';
import { verifyToken, userAddToCart } from './services/UserServ';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Cart from './components/user/cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSession: null,
      logged: false,
    };
  }

  async componentDidMount() {
    const token = this.checkLocalStorage();
    if (token) {
      await verifyToken(token).then((data) => {
        if (data.logged)
          this.setState({ logged: true, userSession: data.body }, () => {});
      });
    }
  }

  checkLocalStorage = () => {
    if (localStorage['token']) {
      return localStorage.getItem('token');
    }
    return null;
  };

  userLogged = (user, token) => {
    localStorage.setItem('token', token);
    this.setState({ logged: true, userSession: user });
  };

  addToCart = (item) => {
    if (!this.state.logged) {
      window.location.href = '/user/login';
    } else {
      let found = 0;
      const copySession = { ...this.state.userSession };
      copySession.cart.map((inCart) => {
        if (inCart._id === item._id) {
          found = 1;
          inCart.amount += Number(item.amount);
        }
        return inCart;
      });
      if (!found) copySession.cart.push(item);
      this.setState({ userSession: { ...copySession } }, () => {
        userAddToCart(
          this.state.userSession._id,
          this.state.userSession.cart
        ).then((data) => console.log(data.body));
      });
    }
  };

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center'>
            <Header />
            {this.state.logged ? (
              <LoggedPanel
                cartSize={
                  this.state.userSession
                    ? this.state.userSession.cart.reduce(
                        (result, i) => (result += Number(i.amount)),
                        0
                      )
                    : 0
                }
              />
            ) : (
              <NotLoggedPanel />
            )}
          </div>
          <div className='container-fluid'></div>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Products addToCart={this.addToCart} />}
            />
            <Route
              exact
              path='/category/:cat'
              render={(routeProps) => (
                <ProductsCat {...routeProps} addToCart={this.addToCart} />
              )}
            />
            <Route
              exact
              path='/user/cart'
              render={() => (
                <Cart
                  cart={
                    this.state.userSession ? this.state.userSession.cart : []
                  }
                />
              )}
            />
            <Route
              exact
              path='/user/login'
              render={() => <Login login={this.userLogged} />}
            />
            <Route
              exact
              path='/user/signup'
              render={(routeProps) => (
                <Signup {...routeProps} signup={this.userLogged} />
              )}
            />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
