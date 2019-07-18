import React from 'react';
import { Query, Mutation } from 'react-apollo';
import styled from 'styled-components';
import { Link } from 'gatsby';
import gql from 'graphql-tag';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ErrorMessage from '../../components/ErrorMessage';
import { LinkButton, TwoColumns, Success } from '../../shared/styledComponents';
import { GUESTS_QUERY } from '../../shared/queries';
import DeleteGuest from '../../components/DeleteGuest';
import PleaseSignIn from '../../components/PleaseSignIn';

const EditButton = styled(Link)`
  text-decoration: none;
  color: var(--lightshade);
  background: var(--darkaccent);
  padding: 0 1rem;
  border-radius: 1rem;
  box-shadow: var(--deepboxshadow);
`;

const CREATE_INVITATIONS_MUTATION = gql`
  mutation CREATE_INVITATIONS_MUTATION {
    createInvitations {
      id
    }
  }
`;

const ListGuests = () => (
  <Layout>
    <SEO title="Guest Management" keywords={[`gatsby`, `application`, `react`]} />
    <h1>All Guests</h1>
    <TwoColumns>
      <LinkButton to="/guest-management/invite">Invite another guest</LinkButton>
      <Mutation mutation={CREATE_INVITATIONS_MUTATION}>
        {(createInvitations, { error, loading, called }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }
          if (called) {
            return (
              <Success>
                <p>Invites sent!</p>
              </Success>
            );
          }
          return (
            <button type="button" disabled={loading} onClick={() => createInvitations()}>
              Send{loading && 'ing'} invites
            </button>
          );
        }}
      </Mutation>
    </TwoColumns>
    <PleaseSignIn admin>
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
                      <DeleteGuest guest={{ id: guest.id, name: guest.name }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
        }}
      </Query>
    </PleaseSignIn>
  </Layout>
);

export default ListGuests;
