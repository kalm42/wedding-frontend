import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDataForm extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    name: '',
    email: '',
    guestCount: '0',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  };

  save = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: '',
      email: '',
      guestCount: '0',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    });

  render() {
    return <div />;
  }
}

export default UserDataForm;
