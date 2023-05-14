import React, { useState } from "react";
import cheers from "../assets/cheers.png";
import { Link, useParams, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import edit from "../assets/edit.png";
import save from "../assets/save.png";
import oopsUser from "../assets/oopsUser.png";
import myaccount from "../assets/myaccount.png";

import Auth from "../utils/auth";

// import { ADD_ADDRESS } from "../utils/mutations";

import { QUERY_ME } from "../utils/queries";

function User() {
  // pencil / save images
  const [imageSrc, setImageSrc] = useState(edit);

  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  if (loading) return <p>Loading...</p>;

  const user = data?.me || {};

  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/myaccount" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <div className="row  valign-wrapper ">
        <div className="col center-align ">
          <img src={oopsUser} className="oops" alt="You're not logged in!" />
          <br />
          <Link className="btn-large waves-effect green-btn" to="/login">
            login
          </Link>
        </div>
      </div>
    );
  }

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
          <div className="col s6 ">
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
            <div className="input-field col s6">
              <h3 className="user-text"> Name </h3>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="input-field col s6">
              <h3 className="user-text"> email </h3>
              <p>{user.email}</p>
            </div>

            <div className="input-field col s6">
              <h3 className="user-text"> Shipping Address </h3>
              <p>No address on file</p>
            </div>

            <div className="input-field col s6">
              <Link className="btn-large waves-effect green-btn" to="/products">
                Shop now!
              </Link>
            </div>
          </div>
        )}

        {/* fix this photo */}
        <div className="col s6 ">
          <img src={cheers} className="cheers-photo" alt="Cup of coffee" />
        </div>
      </div>
    </>
  );
}

export default User;

// FUTURE DEVELOPMENT

// LINK the pencil to edit the input fields - looking more and more like future production

// Sort out the UseState to edit and save the input fields. The button is changing images but now I need it to be functional. Do we use mutations for this?

// add address option that will then save to the users data?
