import React, { Component } from 'react';
import { userAvatarUpdate, userProfileUpdate } from '../../services/UserServ';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      file: null,
      allowed: [
        'image/png',
        'image/jpg',
        'image/jpeg',
        'image/bmp',
        'image/gif',
      ],
      updated: 0,
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
    } else if (this.props.user) {
      this.setState({ profile: { ...this.props.user } });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.updated !== this.state.updated ||
      prevProps.user !== this.props.user
    ) {
      this.setState({
        profile: { ...this.props.user },
      });
    }
  }

  fileAdder = (e) => {
    if (!this.state.allowed.includes(e.target.files[0].type)) {
      alert('Only Image types allowed!');
    } else {
      this.setState({ file: e.target.files[0] });
    }
  };

  handleFileUpload = async () => {
    const file = new FormData();
    if (this.state.file) {
      file.append('userAvatar', this.state.file);
      let data = await userAvatarUpdate(this.props.userId, file);
      if (data.uploaded) {
        this.props.user.image = data.body;
        this.setState({ updated: this.state.updated + 1 });
      } else {
        alert('Server Issue, Try again Later');
      }
    }
  };

  handleProfileUpdate = async () => {
    const prof = {
      FirstName: this.FirstName.current.value,
      LastName: this.LastName.current.value,
      street: this.street.current.value,
      country: this.country.current.value,
      dob: this.dob.current.value,
    };
    let data = await userProfileUpdate(this.props.userId, prof);
    if (data.updated) {
      this.props.profileUpdate(data.body);
      this.setState({
        updated: this.state.updated + 1,
      });
    } else {
      alert('Server Issue, Try again Later');
    }
  };

  render() {
    return this.state.profile ? (
      <div className='d-flex flex-column align-items-center p-2 mt-3 border border-darken-2 bg-light'>
        <label>Profile Image</label>
        <img className='card-img w-25' src={this.state.profile.image} alt='' />
        <label>Change Image</label>
        <div className='row col-lg-6 justify-content-center'>
          <input
            className='form-control col-lg-6 m-2'
            type='file'
            name='userAvatar'
            onChange={this.fileAdder}
          />
          <button
            onClick={this.handleFileUpload}
            className='btn btn-sm btn-outline-success'>
            Upload
          </button>
        </div>
        <input
          ref={this.FirstName}
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='First Name'
          defaultValue={this.state.profile.FirstName}
        />
        <input
          ref={this.LastName}
          className='form-control col-lg-6 m-2'
          type='text'
          placeholder='Last Name'
          defaultValue={this.state.profile.LastName}
        />
        <label>Your Home Adress</label>
        <input
          ref={this.street}
          className='form-control col-lg-6 m-2'
          type='text'
          defaultValue={this.state.profile.street}
        />
        <input
          ref={this.country}
          className='form-control col-lg-6 m-2'
          type='text'
          defaultValue={this.state.profile.country}
        />
        <label>Your Date of Birth</label>
        <div className='row'>
          <div className='d-flex flex-column col-lg-6'>
            <label>Current</label>
            <input
              className='form-control m-2'
              type='text'
              defaultValue={this.state.profile.dob}
              disabled
            />
          </div>
          <div className='d-flex flex-column col-lg-6'>
            <label>Enter New</label>
            <input ref={this.dob} className='form-control m-2' type='date' />
          </div>
        </div>
        <button
          onClick={this.handleProfileUpdate}
          className='btn btn-success m-2'>
          Save Changes
        </button>
      </div>
    ) : (
      <h2 className='text-center'>Loading...</h2>
    );
  }
}

export default Profile;
