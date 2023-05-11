import { gql } from '@apollo/client';

// TODO update usern to firstname lastname
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($_id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    updateUser(_id: $_id, input: { firstName: $firstName, lastName: $lastName, email: $email }) {
      _id
      firstName
      lastName
      email
    }
  }
`;
