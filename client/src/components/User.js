import React from 'react';
import cheers from '../assets/cheers.png';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

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

function User() {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: {
      email: 'test@test.com' // replace with the email of the user you want to display, you can add a function to call that user based on the JWT token
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data && data.users && data.users[0];

  return (
    <>
      <div>
        <h1>User</h1>
        {user && (
          <ul>
            <li>First name: {user.firstName}</li>
            <li>Last name: {user.lastName}</li>
            <li>Email: {user.email}</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default User;
