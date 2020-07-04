import React, { Component } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import { userLogin } from '../../services/UserServ';

class Login extends Component {
  state = {};

  emailRef = React.createRef();
  passwordRef = React.createRef();

  componentDidMount() {
    if (localStorage['token']) {
      if (this.props.history) {
        this.props.history.push('/');
      } else {
        window.location.href = '/';
      }
    }
  }

  handleSubmit = async () => {
    const user = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };
    userLogin(user).then((data) => {
      if (data.logged) {
        this.props.login(data.body, data.token);
        if (this.props.history) {
          this.props.history.push('/');
        } else {
          window.location.href = '/';
        }
      } else {
        alert(data.body);
      }
    });
  };

  render() {
    return (
      <div className='contaniner d-flex flex-column align-items-center mt-5 border border-success p-2 bg-light'>
        <h3>Enter Your Login Details</h3>
        <input
          ref={this.emailRef}
          className='form-control col-lg-6 m-3'
          type='email'
          placeholder='user@email.com'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <input
          ref={this.passwordRef}
          className='form-control col-lg-6 m-3'
          type='password'
          placeholder='password'
          required
        />
        <button
          onClick={this.handleSubmit}
          className='btn btn-lg btn-outline-success mb-2'>
          Login
        </button>
        <Link to='/user/signup'>New Member?</Link>
      </div>
    );
  }
}

export default Login;
