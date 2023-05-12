import React, { useState } from 'react';
import signup from "../assets/signup.png";

// TODO remove username and just use first name and last name
// Extra: add shipping address line but don't make it required - reference model. Needs to use the gql
function CreateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Build the request body
    const requestBody = {
      username,
      email,
      password,
    };

    // Send a POST request to the server to create the user
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };
// TODO update this to reflect firstName + lastName
  return (
    <div className=" row login center-align">
      {/* <h1>Create User</h1> */}

      <img src={signup} className="signup" alt="Signup" />

      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
