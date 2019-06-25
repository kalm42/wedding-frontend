import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Error from '../../components/ErrorMessage';
import formatMoney from '../../utils/formatMoney';
import PleaseSignIn from '../../components/PleaseSignIn';

const USER_QUERY = gql`
  query USER_QUERY($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      email
      address {
        id
        line1
        line2
        city
        state
        zip
      }
    }
  }
`;

const GuestProfile = ({ guestId }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Update Guest</h1>
      <PleaseSignIn>
        <Query query={USER_QUERY} variables={{ id: guestId }}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            console.table(data.user);
            return (
              <>
                <p>New Component to edit the user</p>
              </>
            );
          }}
        </Query>
      </PleaseSignIn>
    </Layout>
  );
};

GuestProfile.propTypes = {
  guestId: PropTypes.string.isRequired,
};

export default GuestProfile;
