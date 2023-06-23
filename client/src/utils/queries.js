import { gql } from '@apollo/client';


export const GET_PRODUCTS = gql`
query getProducts {
  getProducts {
    _id
    name
    image
    location
    roast
    description
    price
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const GET_USERS = gql`
query getUser($filter: UserFilterInput) {
  users(filter: $filter) {
    firstName
    lastName
    email
  }
}
`;