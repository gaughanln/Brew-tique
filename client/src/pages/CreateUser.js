import React, { useState } from 'react';
import signup from "../assets/signup.png";
import {  useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";


import {ADD_USER} from '../utils/mutations'

// TODO remove username and just use first name and last name
// Extra: add shipping address line but don't make it required - reference model. Needs to use the gql
function CreateUser() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const [addUser, {error, data}] = useMutation(ADD_USER);
const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Build the request body
    const requestBody = {
      firstName,
      lastName,
      email,
      password,
    };
try {
  const {data} = await addUser({
    variables: {...requestBody}
  })
  Auth.login(data.addUser.token);
  console.log("Login successful!");
  navigate("/");
} catch (error) {
  console.error(error)
  
}
   
  };
// TODO update this to reflect firstName + lastName
  return (
    <div className=" row login center-align">
      {/* <h1>Create User</h1> */}

      <img src={signup} className="signup" alt="Signup" />

      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <label htmlFor="username">firstName:</label>
          <input
            type="text"
            id="username"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className="input-field col s12">
          <label htmlFor="username">lastName:</label>
          <input
            type="text"
            id="username"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className="input-field col s12">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-field col s12">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />

        {/* TODO this button needs to push to another page */}
        <button type="submit" className="btn-large waves-effect green-btn">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
