import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
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
        email
        password
      }
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logout {
    logout
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    updateUser(input: { _id: $_id, firstName: $firstName, lastName: $lastName, email: $email }) {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;

export const ADD_ADDRESS = gql`
mutation addAddress($userId: ID!, $street: String!, $city: String!, $state: String!, $zip: String!, $country: String!) {
  addAddress(userId: $userId, street: $street, city: $city, state: $state, zip: $zip, country: $country) {
    address {
      userId
      street
      city
      state
      zip
      country
    }
  }
}
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId)
  }
`;