import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Guests = () => (
  <Layout>
    <SEO title="Guest Management" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Guests</h1>
    <p>Add and remove guests here.</p>
  </Layout>
);

export default Guests;
