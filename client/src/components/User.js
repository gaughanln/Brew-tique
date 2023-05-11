import React, { useState } from "react";
import cheers from "../assets/cheers.png";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import edit from '../assets/edit.png';
import save from '../assets/save.png';



const GET_USERS = gql`
  query GetUsers($email: String) {
    users(filter: { email: $email }) {
      _id
      firstName
      lastName
      email
    }
  }
`;

// TODO 
// LINK the pencil to edit the input fields
// Sort out the UseState to edit and save the input fields. The button is changing images but now I need it to be functional. Do we use mutations for this?
// add address option that will then save to the users data

// do we need a validator?
// const Validator = require('validator');

function User() {
  const [ imageSrc, setImageSrc ] = useState(edit);


  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      email: "test@test.com", // replace with the email of the user you want to display, you can add a function to call that user based on the JWT token
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data && data.users && data.users[0];

   const editSaveClick = () => {
    const image = document.getElementById('edit-save');
    if (imageSrc === edit) {
      setImageSrc(save);
    } else {
      setImageSrc(edit);
    }
  };


  return (
    <>
      <div className="row user ">
        {user && (
          // <ul>
          //   <li>First name: {user.firstName}</li>
          //   <li>Last name: {user.lastName}</li>
          //   <li>Email: {user.email}</li>
          // </ul>

          <div class="col s6 ">
            <span className="myaccount-text" />
            <h1>
              My Account &nbsp;
              <Link>
                <img
                  src={imageSrc}
                  width="40"
                  height="40"
                  onClick={editSaveClick}
                  id="pencil-save"
                  className="edit-icon"
                  alt="pencil icon"
                />
              </Link>
            </h1>

            <div class="input-field col s6">
              <h3 className="user-text"> First Name </h3>

              <input
                placeholder="Placeholder"
                id="first_name"
                value={`${user.firstName}`}
                type="text"
                class="validate"
              />
            </div>

            {/* last name */}
            <div class="input-field col s6">
              <h3 className="user-text"> Last Name </h3>

              <input
                id="last_name"
                value={`${user.lastName}`}
                type="text"
                class="validate"
              />
            </div>

            {/* email */}
            <div class="input-field col12">
              <h3 className="user-text"> Email </h3>

              <input
                id="email"
                value={`${user.email}`}
                type="email"
                class="validate"
              />
            </div>

{/* address - update data input */}
            <div class="input-field col12">
              <h3 className="user-text"> Shipping Address </h3>

              <input
                id="email"
                value= "nothing yet!"
                type="email"
                class="validate"
              />
            </div>

            <div class="input-field col">
            <Link
            className="btn-large waves-effect green-btn" to="/products" > Shop now! </Link>
          </div>
          </div>
        )}
       
       {/* fix this photo placement */}
        <div class="col s6 ">
          <img src={cheers} className="cheers-photo" alt="Cup of coffee" />
        </div>

      </div>
    </>
  );
}

export default User;
