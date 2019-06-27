import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ErrorMessage from '../../components/ErrorMessage';

const GUESTS_QUERY = gql`
  query GUESTS_QUERY {
    users {
      id
      name
    }
  }
`;

const RemoveButton = styled.button`
  padding: 0 1rem;
  background: var(--darkaccent);
`;

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
    <h1>Guests</h1>
    <p>Add and remove guests here.</p>
    <Query query={GUESTS_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <ErrorMessage error={error} />;
        const guests = data.users;
        return (
          <table>
            <tbody>
              {guests.map(guest => (
                <tr>
                  <td>
                    {/* Mutation to remove guest */}
                    <RemoveButton type="button">-</RemoveButton>
                  </td>
                  <td>{guest.name}</td>
                  <td>
                    <EditButton to="edit-guest">edit</EditButton>
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
