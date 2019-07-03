import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ErrorMessage from '../../components/ErrorMessage';
import { LinkButton, RemoveButton, TwoColumns } from '../../shared/styledComponents';
import { GUESTS_QUERY } from '../../shared/queries';

const EditButton = styled(Link)`
  text-decoration: none;
  color: var(--lightshade);
  background: var(--darkaccent);
  padding: 0 1rem;
  border-radius: 1rem;
  box-shadow: var(--deepboxshadow);
`;

const ListGuests = () => (
  <Layout>
    <SEO title="Guest Management" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All Guests</h1>
    <TwoColumns>
      <LinkButton to="/guest-management/invite">Invite another guest</LinkButton>
      <button type="button">Send invites</button>
    </TwoColumns>
    <Query query={GUESTS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <ErrorMessage error={error} />;
        const guests = data.users;
        return (
          <table>
            <thead>
              <tr>
                <th>Primary Guest</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map(guest => (
                <tr key={guest.id}>
                  <td>
                    <Link to={`/guest-management/${guest.id}`}>{guest.name}</Link>
                  </td>
                  <td>
                    <EditButton to={`/guest-management/edit/${guest.id}`}>edit</EditButton>
                    {/* Mutation to remove guest */}
                    <RemoveButton type="button">X</RemoveButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }}
    </Query>
  </Layout>
);

export default ListGuests;
