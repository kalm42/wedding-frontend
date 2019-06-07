import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ErrorMessage from '../components/ErrorMessage';
import Info from '../components/Info';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';

const INVITE_GUEST_MUTATION = gql`
  mutation INVITE_GUEST_MUTATION(
    $name: String!
    $email: String!
    $line1: String!
    $line2: String
    $city: String!
    $state: String!
    $zip: String!
  ) {
    inviteGuest(
      name: $name
      email: $email
      line1: $line1
      line2: $line2
      city: $city
      state: $state
      zip: $zip
    ) {
      message
    }
  }
`;

class signupPage extends Component {
  state = {
    name: '',
    email: '',
    guestCount: '0',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  };

  save = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: '',
      email: '',
      guestCount: '0',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
    });

  render() {
    const { name, email, guestCount, line1, line2, city, state, zip, message } = this.state;
    return (
      <Mutation mutation={INVITE_GUEST_MUTATION} variables={this.state}>
        {(inviteGuest, { error, loading }) => {
          return (
            <Layout>
              <SEO title="Add Guest!" />
              <h1>Be Our Guest</h1>
              <p>Add one guest per household. Put all invitees in here.</p>
              <ErrorMessage error={error} />
              {!!message.length && <Info text={message} />}
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await inviteGuest();
                  // eslint-disable-next-line
                  this.setState(state => ({
                    message: `Success! ${state.name} was added to the guest list.`,
                  }));
                  this.reset();
                  window.scroll({ top: 0, behavior: 'smooth' });
                }}
              >
                <Fieldset disabled={loading} aria-busy={loading}>
                  <Label htmlFor="name">
                    Addressed to
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={name}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="email">
                    Email
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="guestCount">
                    Estimated number of attendees
                    <Input
                      type="number"
                      name="guestCount"
                      id="guestCount"
                      required
                      value={guestCount}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="line1">
                    Street
                    <Input
                      type="text"
                      name="line1"
                      id="line1"
                      required
                      value={line1}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="line2">
                    Apt/Ste Number
                    <Input type="text" name="line2" id="line2" value={line2} onChange={this.save} />
                  </Label>
                  <Label htmlFor="city">
                    City
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      required
                      value={city}
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
                      value={state}
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
                      value={zip}
                      onChange={this.save}
                    />
                  </Label>
                  <SubmitButton type="submit" value="Invite Guest" />
                </Fieldset>
              </form>
            </Layout>
          );
        }}
      </Mutation>
    );
  }
}

export default signupPage;
