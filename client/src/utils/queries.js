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