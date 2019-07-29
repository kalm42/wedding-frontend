import React from 'react';
import PropType from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ErrorMessage from './ErrorMessage';
import { Loading } from '../shared/styledComponents';

const ALL_USERS_TRANSACTIONS = gql`
  query ALL_USERS_TRANSACTIONS($gift: Gift!) {
    allUsersTransactions(gift: $gift) {
      id
      price
      name
      user {
        id
        name
      }
    }
  }
`;

const GiftTotal = ({ gift }) => (
  <Query query={ALL_USERS_TRANSACTIONS} variables={{ gift }}>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }
      if (loading) {
        return <Loading />;
      }
      const { allUsersTransactions } = data;
      if (allUsersTransactions.length < 1) {
        return <p>No transactions yet.</p>;
      }
      return (
        <p>
          Total: $
          {allUsersTransactions
            .map(transaction => transaction.price)
            .reduce((accumulator, price) => accumulator + price) / 100}
        </p>
      );
    }}
  </Query>
);

GiftTotal.propTypes = {
  gift: PropType.string,
};

GiftTotal.defaultProps = {
  gift: '',
};

export default GiftTotal;
