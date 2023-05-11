import React, { useState } from 'react';
import welcome from "../assets/welcome.png";

import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';


const Login = (props) => {

  // TODO this is from MERN 21 #24

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };




  return (
    <>
      <div className="row login center-align ">

        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (

          <form className="col s12">

            <img src={welcome} className="welcome-back-photo" alt="Welcome back!" />



            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" value={formState.email}
                  onChange={handleChange} />
                <label for="email">Email </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" value={formState.password}
                  onChange={handleChange} />
                <label for="password">Password</label>
              </div>
            </div>

            <button
              className="waves-effect  btn-large brown-btn"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Submit
            </button>
          </form>






        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}

      </div>
    </>
  )
}

export default Login;
