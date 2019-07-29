import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import { Loading } from '../shared/styledComponents';

const RSVP_QUERY = gql`
  query RSVP_QUERY {
    RSVP {
      id
      name
      guestCount
    }
  }
`;

const RSVPList = () => {
  return (
    <Query query={RSVP_QUERY}>
      {({ data, error, loading }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <ErrorMessage error={error} />;
        }
        const { RSVP } = data;
        if (RSVP.length < 1) {
          return (
            <div>
              <p>No guests have RSVP&rsquo;d.</p>
            </div>
          );
        }
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Guest Count</th>
              </tr>
            </thead>
            <tbody>
              {RSVP.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.guestCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }}
    </Query>
  );
};

export default RSVPList;
