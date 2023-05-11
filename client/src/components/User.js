import React, { useState } from "react";
import cheers from "../assets/cheers.png";
import { Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../utils/queries";
// TODO: Uncomment this when you're ready
// import { ADD_ADDRESS } from "../utils/mutations";

// TODO 
// LINK the pencil to edit the input fields
// Sort out the UseState to edit and save the input fields. Do we use mutations for this?
// add address option that will then save to the users data

function User() {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      email: "test@test.com", // replace with the email of the user you want to display, you can add a function to call that user based on the JWT token
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data && data.users && data.users[0];

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
              My Account 
              <Link>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2541/2541991.png"
                  width="40"
                  height="40"
                  className="pencil-icon"
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
            <div class="input-field col s6">
              <h3 className="user-text"> Email </h3>

              <input
                id="email"
                value={`${user.email}`}
                type="email"
                class="validate"
              />
            </div>

{/* address - update data input */}
            <div class="input-field col s6">
              <h3 className="user-text"> Shipping Address </h3>

              <input
                id="email"
                value={`${user.email}`}
                type="email"
                class="validate"
              />
              <p> none yet</p>
            </div>
          </div>
        )}
       

        <div class="col s6 center-align">
          <img src={cheers} className="cheers-photo" alt="Cup of coffee" />
        </div>
      </div>
    </>
  );
}

export default User;
