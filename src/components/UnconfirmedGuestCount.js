import React from 'react';
import { Query } from 'react-apollo';
import { Loading } from '../shared/styledComponents';
import { UNCONFIRMED_GUEST_COUNT_QUERY } from '../shared/queries';
import ErrorMessage from './ErrorMessage';

const UnconfirmedGuestCount = () => {
  return (
    <Query query={UNCONFIRMED_GUEST_COUNT_QUERY}>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <ErrorMessage error={error} />;
        }
        return <p>{data.unconfirmedGuestCount}</p>;
      }}
    </Query>
  );
};

export default UnconfirmedGuestCount;
