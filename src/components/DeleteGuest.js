/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { GUESTS_QUERY } from '../shared/queries';
import { RemoveButton } from '../shared/styledComponents';
import ErrorMessage from './ErrorMessage';

const DELETE_GUEST_MUTATION = gql`
  mutation DELETE_GUEST_MUTATION($id: ID!) {
    deleteGuest(id: $id) {
      id
    }
  }
`;

const DeleteGuest = ({ guest }) => {
  return (
    <Mutation
      mutation={DELETE_GUEST_MUTATION}
      variables={{ id: guest.id }}
      refetchQueries={[{ query: GUESTS_QUERY }]}
    >
      {(deleteGuest, { error }) => {
        return (
          <>
            <RemoveButton
              type="button"
              onClick={() => {
                if (confirm(`Are you sure you want to un-invite ${guest.name}?`)) {
                  deleteGuest();
                }
              }}
            >
              X
            </RemoveButton>
            <ErrorMessage error={error} />
          </>
        );
      }}
    </Mutation>
  );
};

DeleteGuest.propTypes = {
  guest: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteGuest;
