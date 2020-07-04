import React, { Component } from 'react';

class Profile extends Component {
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
    return this.props.user ? (
      <div className='d-flex flex-column align-items-center p-2 mt-3 border border-darken-2 bg-light'>
        <label>Profile Image</label>
        <img className='card-img w-25' src={this.props.user.image} alt='' />
        <label>Change Image</label>
        <input className='form-control col-lg-6 m-2' type='file' />
        <input
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='First Name'
          defaultValue={this.props.user.FirstName}
        />
        <input
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='Last Name'
          defaultValue={this.props.user.LastName}
        />
        <label>Your Home Adress</label>
        <input
          className='form-control col-lg-6 m-2'
          type='text'
          defaultValue={this.props.user.street}
        />
        <input
          className='form-control col-lg-6 m-2'
          type='text'
          defaultValue={this.props.user.country}
        />
        <label>Your Date of Birth</label>
        <div className='row'>
          <div className='d-flex flex-column col-lg-6'>
            <label>Current</label>
            <input
              className='form-control m-2'
              type='text'
              defaultValue={this.props.user.dob
                .slice(0, 10)
                .replaceAll('-', '/')}
              disabled
            />
          </div>
          <div className='d-flex flex-column col-lg-6'>
            <label>Enter New</label>
            <input className='form-control m-2' type='date' />
          </div>
        </div>
        <button className='btn btn-success m-2'>Save Changes</button>
      </div>
    ) : (
      <h2 className='text-center'>Loading...</h2>
    );
  }
}

export default Profile;
