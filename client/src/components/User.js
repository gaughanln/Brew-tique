import React, { useState } from 'react';
import cheers from '../assets/cheers.png'
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

 const GET_USERS = gql`
 query GetUsers {
  users {
    id
    firstName
    lastName
    email
  }
}
 `;

function User() {

  const {loading, error, data} = useQuery(GET_USERS)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 

  
  // const [userInfo, setUserInfo] = useState({
  //   name: {
  //     firstName: '',
  //     lastName: ''
  //   },
  //   email: 'gaughanln@yahoo.com',
  //   address: 'Houston'
  // });

  // const [editing, setEditing] = useState(false);
  // const [nameEditable, setNameEditable] = useState(false);

// fetch data fromt he database using graphql api
  
  //TODO
  // make input boxes NOT editable until the pencil is clicked
  // TODO ensure the information gets saved back to the database and it updates
  // TODO when you click on the pencil to edit, it then turns into a save button

  return (


    
    <>

{data.users.map((user) => (
    <li key={user.id}>
      {user.firstName} {user.lastName}
    </li>
  ))}

      {/* <div className="row user valign-wrapper">
        <div class="col s6 ">
          <span className="myaccount-text">
            <h1> My Account <Link>
              {editing ? "Save" :
                <img src='https://cdn-icons-png.flaticon.com/512/2541/2541991.png'
                  width="40"
                  height="40"
                  className="pencil-icon"
                  alt="pencil icon" />
              }
            </Link> </h1>

            <h3 className ="user-text"> Name </h3>
            <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" value={`${userInfo.name.firstName}`} type="text" class="validate"/>
          <label for="first_name"></label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" 
          value={`${userInfo.name.lastName}`} type="text" class="validate"/>
          <label for="last_name" placeholder = "last name" ></label>
        </div> */}
           
            {/* <input
              type="text"
              id="name"
              value={`${userInfo.name.firstName} ${userInfo.name.lastName}`}
              disabled={!nameEditable}
              onChange={e => {
                const [firstName, lastName] = e.target.value.split(' ');
                setUserInfo({
                  ...userInfo,
                  name: {
                    firstName,
                    lastName
                  }
                })
              }}
            /> */}

{/* 
            <h3 className ="user-text"> Email </h3>

            <h3 className ="user-text"> Shipping Address </h3>

            <h3 className ="user-text"> Subscription History </h3>
            <p> Nothing yet, better get to shopping! </p>
          </span>
        </div> */}


{/* 
        <div class="col s6 center-align">
          <img src={cheers} className="cheers-photo" alt="Cup of coffee" />
        </div>
      </div> */}
    </>
  );
}

export default User;
