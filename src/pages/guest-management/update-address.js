/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import { navigate } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Error from '../../components/ErrorMessage';
import { USER_QUERY } from '../../shared/queries';
import {
  Fieldset,
  Label,
  Input,
  SubmitButton,
  TwoColumns,
  LinkButton,
  Loading,
} from '../../shared/styledComponents';
import PleaseSignIn from '../../components/PleaseSignIn';

const ADDRESS_QUERY = gql`
  query ADDRESS_QUERY($id: ID!) {
    address(where: { id: $id }) {
      id
      line1
      line2
      city
      state
      zip
    }
  }
`;

const UPDATE_ADDRESS_MUTATION = gql`
  mutation UPDATE_ADDRESS_MUTATION(
    $id: ID!
    $line1: String
    $line2: String
    $city: String
    $state: String
    $zip: String
  ) {
    updateAddress(id: $id, line1: $line1, line2: $line2, city: $city, state: $state, zip: $zip) {
      id
      hash
    }
  }
`;

class UpdateAddress extends Component {
  static propTypes = {
    addressId: PropTypes.string,
    guestId: PropTypes.string,
  };

  static defaultProps = {
    addressId: undefined,
    guestId: undefined,
  };

  save = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateAddress = async (e, updateAddress) => {
    const { guestId } = this.props;
    e.preventDefault();
    await updateAddress();
    navigate(`/guest-management/${guestId}`);
  };

  render() {
    const { addressId, guestId } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Update Guest</h1>
        <PleaseSignIn admin>
          <Query query={ADDRESS_QUERY} variables={{ id: addressId }}>
            {({ data, error, loading }) => {
              if (loading) return <Loading />;
              if (!data || !data.address)
                return <Error error={{ message: `No address with ID: ${addressId}.` }} />;
              if (error) return <Error error={error} />;
              return (
                <Mutation
                  mutation={UPDATE_ADDRESS_MUTATION}
                  variables={{ id: addressId, ...this.state }}
                  refetchQueries={[{ query: USER_QUERY, variables: { id: guestId } }]}
                >
                  {(updateAddress, { loading, error }) => {
                    if (loading) return <Loading />;
                    return (
                      <form
                        method="post"
                        onSubmit={async e => this.updateAddress(e, updateAddress)}
                      >
                        <Fieldset disabled={loading} aria-busy={loading}>
                          <Error error={error} />
                          <Label htmlFor="line1">
                            Street
                            <Input
                              type="text"
                              name="line1"
                              id="line1"
                              required
                              defaultValue={data.address.line1}
                              onChange={this.save}
                            />
                          </Label>
                          <Label htmlFor="line2">
                            Apt/Ste Number
                            <Input
                              type="text"
                              name="line2"
                              id="line2"
                              defaultValue={data.address.line2}
                              onChange={this.save}
                            />
                          </Label>
                          <Label htmlFor="city">
                            City
                            <Input
                              type="text"
                              name="city"
                              id="city"
                              required
                              defaultValue={data.address.city}
                              onChange={this.save}
                            />
                          </Label>
                          <Label htmlFor="state">
                            State
                            <Input
                              type="text"
                              name="state"
                              id="state"
                              required
                              defaultValue={data.address.state}
                              onChange={this.save}
                            />
                          </Label>
                          <Label htmlFor="zip">
                            Zip Code
                            <Input
                              type="text"
                              name="zip"
                              id="zip"
                              required
                              defaultValue={data.address.zip}
                              onChange={this.save}
                            />
                          </Label>
                          <TwoColumns>
                            <LinkButton
                              style={{ background: 'var(--danger)', color: 'var(--lightshade)' }}
                              to="/guest-management"
                            >
                              {loading ? 'Too late' : 'Cancel'}
                            </LinkButton>
                            <SubmitButton
                              style={{ margin: '2rem 0' }}
                              type="submit"
                              value={`Updat${loading ? 'ing' : 'e'} Address`}
                            />
                          </TwoColumns>
                        </Fieldset>
                      </form>
                    );
                  }}
                </Mutation>
              );
            }}
          </Query>
        </PleaseSignIn>
      </Layout>
    );
  }
}

export default UpdateAddress;
