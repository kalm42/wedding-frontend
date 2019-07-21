import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      guestCount
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

export const USER_TRANSACTION_LIST_QUERY = gql`
  query USER_TRANSACTION_LIST_QUERY {
    transactions {
      id
      user {
        id
      }
      price
      gift
      createdAt
    }
  }
`;

export const GIFT_STATUS_QUERY = gql`
  query GIFT_STATUS_QUERY {
    giftStatus {
      gym
      honeymoon
    }
  }
`;

export const UNCONFIRMED_GUEST_COUNT_QUERY = gql`
  query UNCONFIRMED_GUEST_COUNT_QUERY {
    unconfirmedGuestCount
  }
`;
