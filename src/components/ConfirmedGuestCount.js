import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Loading } from '../shared/styledComponents';
import ErrorMessage from './ErrorMessage';

const CONFIRMED_GUEST_COUNT_QUERY = gql`
  query CONFIRMED_GUEST_COUNT_QUERY {
    confirmedGuestCount
  }
`;

const ConfirmedGuestCount = () => {
  return (
    <Query query={CONFIRMED_GUEST_COUNT_QUERY}>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <ErrorMessage error={error} />;
        }
        return <p>{data.confirmedGuestCount}</p>;
      }}
    </Query>
  );
};

export default ConfirmedGuestCount;
