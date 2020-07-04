import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userSignup } from '../../services/UserServ';

class Signup extends Component {
  state = {
    valid: true,
  };

  componentDidMount() {
    if (localStorage['token']) {
      if (this.props.history) {
        this.props.history.push('/');
      } else {
        window.location.href = '/';
      }
    }
  }

  emailRef = React.createRef();
  usernameRef = React.createRef();
  passwordRef = React.createRef();
  repeat_passwordRef = React.createRef();
  answerRef = React.createRef();

  handleSubmit = async () => {
    this.setState({ valid: true });
    if (
      this.passwordRef.current.value !== this.repeat_passwordRef.current.value
    ) {
      this.setState({ valid: false }, () => {
        this.repeat_passwordRef.current.value = '';
      });
    } else {
      let newUser = {
        email: this.emailRef.current.value,
        username: this.usernameRef.current.value,
        password: this.passwordRef.current.value,
        repeat_password: this.repeat_passwordRef.current.value,
        answer: this.answerRef.current.value,
      };
      await userSignup(newUser).then((data) => {
        if (data.logged) {
          this.setState({ logged: true });
          this.props.signup(data.body, data.token);
          if (this.props.history) {
            this.props.history.push('/');
          } else {
            window.location.href = '/';
          }
        } else {
          alert(data.body);
        }
      });
    }
  };

  render() {
    return (
      <div className='contaniner d-flex flex-column align-items-center mt-5 border border-success p-2 bg-light'>
        <h3>Fill the Registration Form</h3>
        {this.state.valid ? <p></p> : <p>Check Your input and try again</p>}
        <input
          ref={this.emailRef}
          className='form-control col-lg-6 m-3'
          type='email'
          placeholder='user@email.com'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          required
        />
        <input
          ref={this.usernameRef}
          className='form-control col-lg-6 m-3'
          type='text'
          placeholder='username'
          required
        />
        <input
          ref={this.passwordRef}
          className='form-control col-lg-6 m-3'
          type='password'
          placeholder='password (min 6 characters)'
          pattern='.{6,}'
          title='6 or more characters'
          required
        />
        <input
          ref={this.repeat_passwordRef}
          className='form-control col-lg-6 m-3'
          type='password'
          placeholder='repeat password'
          title='repeat your password'
          required
        />
        <label>What is your favorite food?</label>
        <input
          ref={this.answerRef}
          className='form-control col-lg-6 m-3'
          type='text'
          placeholder='answer'
          title='your secret answer'
          required
        />
        <button
          type='submit'
          onClick={this.handleSubmit}
          className='btn btn-lg btn-outline-success mb-2'>
          Signup
        </button>
        <Link to='/user/signin'>already a member?</Link>
      </div>
    );
  }
}

export default Signup;
