/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Error from './ErrorMessage';
import { ALL_EMAILS_QUERY } from '../shared/queries';
import { Button } from '../shared/styledComponents';

const TOGGLE_EMAIL_ACTIVE_MUTATION = gql`
  mutation TOGGLE_EMAIL_ACTIVE_MUTATION($id: ID!) {
    toggleEmail(id: $id) {
      id
    }
  }
`;

const EmailListItem = props => {
  const { email } = props;
  return (
    <tr>
      <td>{email.isActive ? 'Active' : 'Not Active'}</td>
      <td>{email.email}</td>
      <Mutation
        mutation={TOGGLE_EMAIL_ACTIVE_MUTATION}
        variables={{ id: email.id }}
        refetchQueries={[{ query: ALL_EMAILS_QUERY }]}
      >
        {(toggleEmail, { error }) => {
          return (
            <>
              <td>
                <Error error={error} />
                <Button
                  type="button"
                  onClick={() => {
                    if (confirm('Are you sure you want to deactivate this email?')) {
                      toggleEmail();
                    }
                  }}
                >
                  {email.isActive ? 'Deactivate' : 'Reactivate'}
                </Button>
              </td>
            </>
          );
        }}
      </Mutation>
    </tr>
  );
};

EmailListItem.propTypes = {
  email: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.string,
    isActive: PropTypes.bool,
  }).isRequired,
};

export default EmailListItem;
