import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Error from '../components/ErrorMessage';
import EmailListItem from '../components/EmailListItem';
import PleaseSignIn from '../components/PleaseSignIn';
import { ALL_EMAILS_QUERY } from '../shared/queries';
import { Button } from '../shared/styledComponents';

const EmailsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Manage Emails</h1>
    <p>
      This is the list of your approved email addresses. Emails received by Easy Postal Service from
      these addresses will have their letter sent.
    </p>
    <table>
      <thead>
        <th>Status</th>
        <th>Email</th>
        <th>Toggle</th>
      </thead>
      <tbody>
        <PleaseSignIn>
          <Query query={ALL_EMAILS_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              return (
                <>
                  <Error error={error} />
                  {data.emails.map(
                    ({ id, email, isActive }) =>
                      isActive && (
                        <EmailListItem key={id} id={id} email={{ id, email, isActive }} />
                      ),
                  )}
                </>
              );
            }}
          </Query>
        </PleaseSignIn>
      </tbody>
    </table>
    <Link to="/add-email">
      <Button type="button">Add Email</Button>
    </Link>
  </Layout>
);

export default EmailsPage;
