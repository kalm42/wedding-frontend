import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import { Loading } from '../shared/styledComponents';

const NO_RSVP_QUERY = gql`
  query NO_RSVP_QUERY {
    noRSVP {
      id
      name
      email
    }
  }
`;

const NoRSVPList = () => {
  return (
    <Query query={NO_RSVP_QUERY}>
      {({ data, error, loading }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <ErrorMessage error={error} />;
        }
        const { noRSVP } = data;
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Electronic Mail</th>
              </tr>
            </thead>
            <tbody>
              {noRSVP.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }}
    </Query>
  );
};

export default NoRSVPList;
