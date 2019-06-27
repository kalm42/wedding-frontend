/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Error from '../../components/ErrorMessage';
import { Fieldset, Label, Input, SubmitButton } from '../../shared/styledComponents';
import { USER_QUERY } from '../../shared/queries';

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $name: String
    $email: String
    $isGoing: Boolean
    $guestCount: Int
  ) {
    updateUser(id: $id, name: $name, email: $email, isGoing: $isGoing, guestCount: $guestCount) {
      id
      name
    }
  }
`;

class UpdateGuest extends Component {
  static propTypes = {
    guestId: PropTypes.string.isRequired,
  };

  save = e => {
    const { name, value } = e.target;
    if (name === 'guestCount') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  };

  updateGuest = async (e, updateUser) => {
    e.preventDefault();
    await updateUser();
  };

  render() {
    const { guestId } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Update Guest</h1>
        <Query query={USER_QUERY} variables={{ id: guestId }}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.user) return <Error error={{ message: `No guest with ID: ${guestId}.` }} />;
            if (error) return <Error error={error} />;
            return (
              <Mutation mutation={UPDATE_USER_MUTATION} variables={{ id: guestId, ...this.state }}>
                {(updateUser, { loading, error }) => {
                  if (loading) return <p>Loading...</p>;
                  return (
                    <form method="post" onSubmit={async e => this.updateGuest(e, updateUser)}>
                      <Fieldset disabled={loading} aria-busy={loading}>
                        <Error error={error} />
                        <Label htmlFor="name">
                          Addressed to
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={data.user.name}
                            onChange={this.save}
                          />
                        </Label>
                        <Label htmlFor="email">
                          Email
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            defaultValue={data.user.email}
                            onChange={this.save}
                          />
                        </Label>
                        <Label htmlFor="guestCount">
                          Estimated number of attendees
                          <Input
                            type="number"
                            name="guestCount"
                            id="guestCount"
                            defaultValue={data.user.guestCount}
                            onChange={this.save}
                          />
                        </Label>
                        <SubmitButton type="submit" value="Update Guest" />
                      </Fieldset>
                    </form>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default UpdateGuest;
