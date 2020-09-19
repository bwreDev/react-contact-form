import React, { Component } from 'react';
import './contactForm.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    birthDate: '',
    emailConsent: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onConsent = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    alert(
      'Your contact information has been delivered! We will be in touch soon!'
    );

    fetch(
      'https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users',
      {
        method: 'POST',
        body: JSON.stringify(this.state),
      }
    ).then(function (res) {
      return res.json();
    });
    this.handleClear();
  };

  handleClear = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => ((input.value = ''), (input.checked = false))
    );
    this.setState({
      name: '',
      email: '',
      birthDate: '',
      emailConsent: false,
    });
  };

  render() {
    const { name, email, birthDate, emailConsent } = this.state;
    return (
      <>
        <form className='contact-form' onSubmit={this.handleSubmit}>
          <fieldset className='contact-fields'>
            <h1>Contact Us</h1>
            <label htmlFor='contact-name'>
              <h2>Name</h2>
            </label>
            <input
              name='name'
              type='text'
              value={name}
              id='contact-name'
              onChange={this.onChange}
              required
            />

            <label htmlFor='contact-email'>
              <h2>Email</h2>
            </label>
            <input
              name='email'
              type='email'
              value={email}
              id='contact-email'
              onChange={this.onChange}
              required
            />
            <label htmlFor='contact-birthDate'>
              <h2>Birth date</h2>
            </label>
            <input
              name='birthDate'
              type='date'
              value={birthDate}
              id='contact-birthDate'
              onChange={this.onChange}
            />
            <label htmlFor='contact-emailConsent'>
              <h3>I agree to be contacted via email.</h3>
            </label>
            <input
              name='emailConsent'
              type='checkbox'
              checked={emailConsent}
              id='contact-emailConsent'
              onChange={this.onConsent}
              required
            />
            <button
              className='clear-contact'
              onClick={this.handleClear}
            >
              Clear
            </button>
            <button className='submit-contact' type='submit'>
              Submit
            </button>
          </fieldset>
        </form>
      </>
    );
  }
}
