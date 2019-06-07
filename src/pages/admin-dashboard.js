import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PleaseSignIn from '../components/PleaseSignIn';

const AdminDashboard = () => (
  <Layout>
    <SEO title="Admin Dashboard" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Admin Dashboard</h1>
    <table>
      <thead>
        <th>Amount</th>
        <th>Description</th>
      </thead>
      <tbody>
        <PleaseSignIn>
          <p>Admin Dashboard goes here. BTW You&apos;re logged in.</p>
        </PleaseSignIn>
      </tbody>
    </table>
  </Layout>
);

export default AdminDashboard;
