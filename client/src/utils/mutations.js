import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $isTestUser: Boolean) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, isTestUser: $isTestUser) {
    token
    user {
      firstName
      lastName
      email
      password
    }
  }
}
`;

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

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    updateUser(_id: $_id, input: { firstName: $firstName, lastName: $lastName, email: $email }) {
      _id
      firstName
      lastName
      email
    }
  }
`;
