import React from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from './ErrorMessage';
import { Loading } from '../shared/styledComponents';

const NO_INVITE_QUERY = gql`
  query NO_INVITE_QUERY {
    noInvite {
      id
      name
      permissions
      address {
        line1
        city
        state
        zip
      }
    }
  }
`;

const CREATE_INVITE_MUTATION = gql`
  mutation CREATE_INVITE_MUTATION($userId: ID!) {
    createInvitation(userId: $userId) {
      id
    }
  }
`;

const NoInvite = () => {
  return (
    <Query query={NO_INVITE_QUERY}>
      {({ data, error, loading }) => {
        if (loading) {
          return <Loading />;
        }
        if (error) {
          return <ErrorMessage error={error} />;
        }
        const { noInvite } = data;
        return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {noInvite.map(user => (
                <UserDetail key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        );
      }}
    </Query>
  );
};

export default NoInvite;

const UserDetail = props => {
  const {
    user: {
      id,
      name,
      address: { line1, city, state, zip },
    },
  } = props;
  console.log({ props });
  return (
    <Mutation
      mutation={CREATE_INVITE_MUTATION}
      refetchQueries={[{ query: NO_INVITE_QUERY }]}
      variables={{ userId: id }}
    >
      {(createInvitation, { error, loading, called }) => {
        if (error) {
          return <ErrorMessage error={error} />;
        }
        return (
          <tr>
            <td>{name}</td>
            <td>
              {line1}, {city} {state}, {zip}
            </td>
            <td>
              {called ? (
                'Invite sent!'
              ) : (
                <button type="button" onClick={() => createInvitation()}>
                  Send{loading && 'ing'} Invite
                </button>
              )}
            </td>
          </tr>
        );
      }}
    </Mutation>
  );
};

UserDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
