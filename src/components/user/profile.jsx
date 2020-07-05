import React, { Component } from 'react';
import { userProfileUpdate, getUserById } from '../../services/UserServ';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      allowed: ['image/png', 'image/jpg', 'image/jpeg', 'image/bmp'],
      loaded: 0,
    };
  }

  FirstName = React.createRef();
  LastName = React.createRef();
  street = React.createRef();
  country = React.createRef();
  dob = React.createRef();

  componentDidMount() {
    if (!localStorage['token']) {
      if (this.props.history) {
        this.props.history.push('/');
      } else {
        window.location.href = '/';
      }
    }
  }

  fileAdder = (e) => {
    if (!this.state.allowed.includes(e.target.files[0].type)) {
      alert('Only Image types allowed!');
    } else {
      this.setState({ file: e.target.files[0] });
    }
  };

  handleUpdate = () => {
    const data = new FormData();
    if (this.state.file) {
      data.append('userAvatar', this.state.file);
    }
    const profile = {
      FirstName: this.FirstName.current.value,
      LastName: this.LastName.current.value,
      street: this.street.current.value,
      country: this.country.current.value,
      dob: this.dob.current.value,
    };
    userProfileUpdate(this.props.userId, profile, data).then((data) => {
      console.log(data);
      getUserById(this.props.userId).then((user) => {
        console.log(user);
        this.props.profileUpdate(user.profile);
      });
    });
  };

  render() {
    return this.props.user ? (
      <div className='d-flex flex-column align-items-center p-2 mt-3 border border-darken-2 bg-light'>
        <label>Profile Image</label>
        <img className='card-img w-25' src={this.props.user.image} alt='' />
        <label>Change Image</label>
        <input
          className='form-control col-lg-6 m-2'
          type='file'
          name='userAvatar'
          onChange={this.fileAdder}
        />
        <input
          ref={this.FirstName}
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='First Name'
          defaultValue={this.props.user.FirstName}
        />
        <input
          ref={this.LastName}
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='Last Name'
          defaultValue={this.props.user.LastName}
        />
        <label>Your Home Adress</label>
        <input
          ref={this.street}
          className='form-control col-lg-6 m-2'
          type='text'
          defaultValue={this.props.user.street}
        />
        <input
          ref={this.country}
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
              defaultValue={this.props.user.dob}
              disabled
            />
          </div>
          <div className='d-flex flex-column col-lg-6'>
            <label>Enter New</label>
            <input ref={this.dob} className='form-control m-2' type='date' />
          </div>
        </div>
        <button onClick={this.handleUpdate} className='btn btn-success m-2'>
          Save Changes
        </button>
      </div>
    ) : (
      <h2 className='text-center'>Loading...</h2>
    );
  }
}

export default Profile;
