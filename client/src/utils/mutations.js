import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      password
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
