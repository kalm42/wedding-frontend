import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { CURRENT_USER_QUERY } from '../shared/queries';
import SignIn from './SignIn';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data || !data.me) {
        return (
          <div>
            <SignIn />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

PleaseSignIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PleaseSignIn;
