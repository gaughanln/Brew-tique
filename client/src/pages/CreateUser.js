import React, { useState } from 'react';

// TODO remove username and just use first name and last name
// Extra: add shipping address line but don't make it required - reference model
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
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />
        <button type="submit" className="btn-large waves-effect green-btn">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
