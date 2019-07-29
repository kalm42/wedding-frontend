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

const TransactionListByGift = ({ gift }) => (
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
        return (
          <div>
            <p>No guests have made a gift.</p>
          </div>
        );
      }
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {allUsersTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.name === '' ? transaction.user.name : transaction.name}</td>
                <td>{transaction.price / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }}
  </Query>
);

TransactionListByGift.propTypes = {
  gift: PropType.string.isRequired,
};

export default TransactionListByGift;
