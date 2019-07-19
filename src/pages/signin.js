import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SignIn from '../components/SignIn';

const signinPage = () => (
  <Layout>
    <SEO title="Sign in!" />
    <h1>Sign in!</h1>
    <p>Your account is the access point to add funds and restrict access to mailings.</p>
    <SignIn />
    <p>
      Did you forget your password? <Link to="/forgot-password">Request a password reset!</Link>
    </p>
  </Layout>
);

export default signinPage;
