import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { CURRENT_USER_QUERY } from '../shared/queries';
import SignIn from './SignIn';
import { Warning, Loading } from '../shared/styledComponents';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <Loading />;
      if (!data || !data.me || (props.admin && !data.me.permissions.includes('ADMIN'))) {
        return (
          <Warning>
            <h3>Please Sign In</h3>
            <SignIn />
          </Warning>
        );
      }
      return props.children;
    }}
  </Query>
);

PleaseSignIn.propTypes = {
  children: PropTypes.node.isRequired,
  admin: PropTypes.bool,
};

PleaseSignIn.defaultProps = {
  admin: false,
};

export default PleaseSignIn;
