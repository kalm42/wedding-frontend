import React from 'react';
import { Query } from 'react-apollo';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Error from '../../components/ErrorMessage';
import { USER_QUERY } from '../../shared/queries';

const ViewGuest = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Guest Details</h1>
    <Query query={USER_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        return (
          <div>
            <p>{data.user.name}</p>
            <p>{data.user.email}</p>
            <p>{data.user.guestCount}</p>
          </div>
        );
      }}
    </Query>
  </Layout>
);

export default ViewGuest;
