import React, { useState } from "react";
import welcome from "../assets/welcome.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = () => {
  // TODO this is from MERN 21 #24

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // update state based on form input changes
  const handleChange = (event) => {
    console.log("handleChange called");
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
      console.log("Login successful!");
      navigate("/");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="row login center-align ">
        
          <form className="col s12" >
            <img
              src={welcome}
              className="welcome-back-photo"
              alt="Welcome back!"
            />

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  name="email"
                />
                <label htmlFor="email">Email </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  value={formState.password}
                  onChange={handleChange}
                  name="password"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <button
              className="waves-effect  btn-large brown-btn"
              style={{ cursor: "pointer" }}
              type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
      

 
      </div>
    </>
  );
};

export default Login;
