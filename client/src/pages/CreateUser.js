import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

// images
import signup from "../assets/signup.png";



function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Building the request body
    const requestBody = {
      firstName,
      lastName,
      email,
      password,
    };
    try {
      const { data } = await addUser({
        variables: { ...requestBody },
      });
      Auth.login(data.addUser.token);
      console.log("Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" row login center-align">
      <img src={signup} className="signup" alt="Signup" />

      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <label htmlFor="username">First Name:</label>
          <input
            type="text"
            id="username"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className="input-field col s12">
          <label htmlFor="username">Last Name:</label>
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
            class="validate"
            onChange={(event) => setEmail(event.target.value)}
          />
          <span
            class="helper-text"
            data-error="Not a valid email address"
          ></span>
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

        <button type="submit" className="btn-large waves-effect green-btn">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
