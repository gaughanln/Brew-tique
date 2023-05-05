import React, {useState} from 'react';

function User() {
  const [userInfo, setUserInfo] = useState({
    name: {
      firstName: '',
      lastName: ''
    },
    email: '',
    address: ''
  });

  const [editing, setEditing] = useState(false);
  const [nameEditable, setNameEditable] = useState(false);
  //TODO
  // make input boxes NOT editable until the pencil is clicked
  // ensure the information gets saved back to the database and it updates

return (

<>
<div className = "container">

<h1> My Account </h1>

<button onClick={() => setEditing(!editing)}>
        {editing ? "Save" :
          <img src='https://cdn-icons-png.flaticon.com/512/2541/2541991.png'
            width="40"
            height="40"
            className="pencil-icon"
            alt="pencil icon" />
        }
      </button>

  <h3> Name </h3>
  <input 
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
/>


        

  <h3> email </h3>

  <h3> Shipping Address </h3>
 
  <h3> Subscription History </h3>
  <p> Nothing yet, better get to shopping! </p>

</div>
</>
);
}

export default User;
