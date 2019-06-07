import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Error from '../components/ErrorMessage';
import formatMoney from '../utils/formatMoney';
import PleaseSignIn from '../components/PleaseSignIn';

const TRANSACTION_HISTORY_QUERY = gql`
  query TRANSACTION_HISTORY_QUERY {
    transactions {
      id
      type
      price
      createdAt
    }
  }
`;

const HistoryPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Transaction History</h1>
    <table>
      <thead>
        <th>Amount</th>
        <th>Description</th>
      </thead>
      <tbody>
        <PleaseSignIn>
          <Query query={TRANSACTION_HISTORY_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              return (
                <>
                  <Error error={error} />
                  {data.transactions.map(({ id, type, price, createdAt }) => (
                    <tr key={id}>
                      <td>{formatMoney(price)}</td>
                      <td>
                        {type === 'STRIPE' ? 'You added funds' : 'Sent letter'}{' '}
                        {distanceInWordsToNow(Date.parse(createdAt))}
                      </td>
                    </tr>
                  ))}
                </>
              );
            }}
          </Query>
        </PleaseSignIn>
      </tbody>
    </table>
  </Layout>
);

export default HistoryPage;
