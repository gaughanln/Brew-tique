import React, { useState } from "react";
import cheers from "../assets/cheers.png";
import { Link, useParams, Navigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import edit from "../assets/edit.png";
import save from "../assets/save.png";
import oopsUser from "../assets/oopsUser.png";
import myaccount from "../assets/myaccount.png";
import Auth from "../utils/auth";

import { DELETE_USER, UPDATE_USER } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

function User() {
  // useState + useParams
  const [imageSrc, setImageSrc] = useState(edit);
  const { email: userParam } = useParams();
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Mutations + Queries
  const { loading, data } = useQuery(QUERY_ME);
  const [deleteUser] = useMutation(DELETE_USER);
  const [updateUser] = useMutation(UPDATE_USER);

  // loading
  if (loading)
    return (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );

  const user = data?.me || {};

  // initializing login
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/myaccount" />;
  }
  if (loading) {
    return (
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    );
  }
  if (!user?.email) {
    return (
      <div className="row valign-wrapper ">
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

  // deleting the user profile
  const deleteUserBtn = async (event) => {
    event.preventDefault();
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      try {
        const { data } = await deleteUser({
          variables: { userId: user._id },
        });
        Auth.logout(data.deleteUser.token);
        console.log("logout successful!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  // confirming deletion
  const showConfirm = () => {
    setConfirmOpen(true);
  };

  // editing the user information
  const editSaveClick = async () => {
    const image = document.getElementById("edit-save");
    if (imageSrc === edit) {
      setImageSrc(save);
      document.getElementById("firstName").disabled = false;
      document.getElementById("lastName").disabled = false;
      document.getElementById("email").disabled = false;
    } else {
      setImageSrc(edit);
      document.getElementById("firstName").disabled = true;
      document.getElementById("lastName").disabled = true;
      document.getElementById("email").disabled = true;

      // Get updated input values
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;

      // Call updateUser mutation
      try {
        const { data } = await updateUser({
          variables: { _id: user._id, firstName, lastName, email },
        });
        console.log("User updated successfully!", data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="row user valign-wrapper">
        {user && (
          <div className="col">
            <span className="myaccount-text" />
            <div >
              <img src={myaccount} className="my-account" alt="Cup of coffee" />

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
            <div className="input-field col ">
              <h3 className="user-text"> First Name </h3>
              <input
                id="firstName"
                type="text"
                className="validate"
                defaultValue={user.firstName}
                disabled
              />

              <h3 className="user-text"> email </h3>
              <input
                id="email"
                type="email"
                className="validate"
                defaultValue={user.email}
                disabled
              />
            </div>

            <div className="input-field col ">
              <h3 className="user-text"> Last Name </h3>
              <input
                id="lastName"
                type="text"
                className="validate"
                defaultValue={user.lastName}
                disabled
              />

              <h3 className="user-text"> Shipping Address </h3>
              <input
                id="email"
                type="email"
                className="validate"
                defaultValue=""
                disabled
              />
            </div>

            <br />

            <div className="input-field col s">
              <button
                className="btn-large waves-effect brown-btn"
                onClick={showConfirm}
              >
                Delete Account
              </button>
            </div>

            <div className="input-field col s">
              <Link className="btn-large waves-effect green-btn" to="/products">
                Shop now!
              </Link>
            </div>

            {confirmOpen && (
              <div>
                <p>Are you sure you want to delete your account?</p>
                <button
                  className="
                  btn-large
                  waves-effect
                  green-btn"
                  onClick={() => setConfirmOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="
                  btn-large
                  waves-effect
                  brown-btn"
                  onClick={deleteUserBtn}
                >
                  Delete Account
                </button>
              </div>
            )}
             
          </div>
        )}

        {/* fix this photo */}
        <div >
          <img src={cheers} className="cheers-photo col " alt="Cup of coffee" />
        </div>
      </div>
    </>
  );
}

export default User;


