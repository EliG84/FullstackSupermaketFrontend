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
import { verifyToken } from './services/UserServ';
import Login from './components/user/login';
import Signup from './components/user/signup';

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

  newUserSignUp = (user, token) => {
    localStorage.setItem('token', token);
    this.setState({ logged: true, userSession: user });
  };

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-center'>
            <Header />
            {this.state.logged ? <LoggedPanel /> : <NotLoggedPanel />}
          </div>
          <div className='container-fluid'></div>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/category/:cat' component={ProductsCat} />
            <Route exact path='/user/login' render={() => <Login />} />
            <Route
              exact
              path='/user/signup'
              render={(routeProps) => (
                <Signup {...routeProps} signup={this.newUserSignUp} />
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
