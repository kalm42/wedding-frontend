import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
    }
  }
`;

export const USER_QUERY = gql`
  query USER_QUERY($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
      guestCount
      address {
        id
        line1
        line2
        city
        state
        zip
      }
    }
  }
`;

export const GUESTS_QUERY = gql`
  query GUESTS_QUERY {
    users {
      id
      name
    }
  }
`;
