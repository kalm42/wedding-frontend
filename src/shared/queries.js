import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      email
      name
      permissions
      balance
    }
  }
`;

export const ALL_EMAILS_QUERY = gql`
  query ALL_EMAILS_QUERY {
    emails {
      id
      email
      isActive
    }
  }
`;
