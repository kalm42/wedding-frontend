/* eslint-disable no-shadow */
import React from 'react';
import { Query } from 'react-apollo';
import { format } from 'date-fns';

import SEO from '../components/seo';
import Layout from '../components/layout';
import ErrorMessage from '../components/ErrorMessage';
import User from '../components/User';
import { USER_TRANSACTION_LIST_QUERY } from '../shared/queries';
import PleaseSignIn from '../components/PleaseSignIn';

const history = () => {
  return (
    <Layout>
      <SEO title="Add Funds" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Gift History</h1>
      <p>
        Thank you so much for your gift. If you gave more than once you will see a list of all your
        gifts.
      </p>
      <div>
        <h2>Transactions</h2>
        <PleaseSignIn>
          <User>
            {({ data: { me }, loading, error }) => {
              if (loading) {
                return <p>Loading...</p>;
              }
              if (error) {
                return <ErrorMessage error={error} />;
              }
              return (
                <Query query={USER_TRANSACTION_LIST_QUERY} variables={{ userId: me.id }}>
                  {({ data: { transactions }, loading, error, refetch }) => {
                    if (loading) {
                      return <p>Loading...</p>;
                    }
                    if (error) {
                      return <ErrorMessage error={error} />;
                    }
                    return (
                      <>
                        <table>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Choice</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transactions.map(transaction => {
                              const date = new Date(transaction.createdAt);
                              const choice =
                                transaction.gift === 'GYM' ? 'Gym' : 'Italian Honeymoon';
                              return (
                                <tr key={transaction.id}>
                                  <td>
                                    {format(date, 'MM/DD/YYYY')} at {format(date, 'h:mm:ss')}
                                  </td>
                                  <td>{choice}</td>
                                  <td>${transaction.price / 100}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <button type="button" onClick={() => refetch()}>
                          Refresh
                        </button>
                      </>
                    );
                  }}
                </Query>
              );
            }}
          </User>
        </PleaseSignIn>
      </div>
    </Layout>
  );
};

export default history;
