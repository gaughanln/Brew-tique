import React, { useState } from "react";
import cheers from "../assets/cheers.png";
import { Link } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import edit from "../assets/edit.png";
import save from "../assets/save.png";
import myaccount from "../assets/myaccount.png"

// import { ADD_ADDRESS } from "../utils/mutations";

import { GET_USERS } from "../utils/queries";

// TODO
// need to authenticate user with a token - pass in props?!

// LINK the pencil to edit the input fields - looking more and more like future production 

// Sort out the UseState to edit and save the input fields. The button is changing images but now I need it to be functional. Do we use mutations for this?

// add address option that will then save to the users data?

// do we need a validator?
// const Validator = require('validator');

function User() {
  // pencil / save images
  const [imageSrc, setImageSrc] = useState(edit);

  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      email: "", // TODO: What all do we need here? replace with the email of the user you want to display, you can add a function to call that user based on the JWT token
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data && data.users && data.users[0];

  const editSaveClick = () => {
    const image = document.getElementById("edit-save");
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
      
          <div class="col s6 ">
            <span className="myaccount-text" />
            <div>
            <img src={myaccount} className="brew-large" alt="Cup of coffee" />
            
        
              <Link>
                <img
                  src={imageSrc}
                  width="40"
                  height="40"
                  onClick={editSaveClick}
                  id="pencil-save"
                  className="edit-icon center-text"
                  alt="pencil icon"
                />
              </Link>
           
</div>
        
              {/* first name */}
              <div class="input-field col s6">
              <h3 className="user-text"> Name </h3>
                <p>{user.firstName} {user.lastName}</p>
              </div>

              <div class="input-field col s6">
              <h3 className="user-text"> email </h3>
                <p>{user.email}</p>
              </div>

              <div class="input-field col s6">
              <h3 className="user-text"> Shipping Address </h3>
                <p>No address on file</p>
              </div>

            <div class="input-field col s6">
              <Link className="btn-large waves-effect green-btn" to="/products">
                Shop now!
              </Link>
            </div>
          </div>
        )}

        {/* fix this photo */}
        <div class="col s6 ">
          <img src={cheers} className="cheers-photo" alt="Cup of coffee" />
        </div>
      </div>
    </>
  );
}

export default User;