import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Error from '../../components/ErrorMessage';
import { USER_QUERY } from '../../shared/queries';
import { LinkButton, TwoColumns } from '../../shared/styledComponents';
import PleaseSignIn from '../../components/PleaseSignIn';

const ViewGuest = ({ guestId }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Guest Details</h1>
    <PleaseSignIn admin>
      <Query query={USER_QUERY} variables={{ id: guestId }}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <TwoColumns>
              <div>
                <p>Name: {data.user.name}</p>
                <p>Email: {data.user.email}</p>
                <p>Total Guests: {data.user.guestCount}</p>
                <LinkButton to={`/guest-management/edit/${guestId}`}>Update Guest</LinkButton>
              </div>
              <div>
                <p>Address:</p>

                <a
                  href={`
                  https://www.google.com/maps/@?api=1&map_action=map&query=${encodeURI(`${
                    data.user.address.line1
                  }, ${data.user.address.city}, ${data.user.address.state} ${data.user.address.zip}
                  `)}
                  `}
                >
                  <address>
                    {data.user.address.line1}
                    <br />
                    {data.user.address.city}, {data.user.address.state}
                    <br />
                    {data.user.address.zip}
                  </address>
                </a>
                <LinkButton
                  to={`/guest-management/address/${data.user.id}/${data.user.address.id}`}
                >
                  Update Address
                </LinkButton>
              </div>
            </TwoColumns>
          );
        }}
      </Query>
    </PleaseSignIn>
  </Layout>
);

ViewGuest.propTypes = {
  guestId: PropTypes.string,
};
ViewGuest.defaultProps = {
  guestId: undefined,
};

export default ViewGuest;
