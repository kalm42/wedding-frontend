import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ErrorMessage from '../components/ErrorMessage';
import Info from '../components/Info';
import {
  Fieldset,
  Label,
  Input,
  RadioLabel,
  RadioInput,
  SubmitButton,
  Warning,
} from '../shared/styledComponents';
import { CURRENT_USER_QUERY, UNCONFIRMED_GUEST_COUNT_QUERY } from '../shared/queries';

const RSVP_MUTATION = gql`
  mutation RSVP_MUTATION(
    $password: String
    $confirmPassword: String
    $rsvpToken: String!
    $rsvpAnswer: String!
    $guestCount: String!
  ) {
    rsvp(
      password: $password
      confirmPassword: $confirmPassword
      rsvpToken: $rsvpToken
      rsvpAnswer: $rsvpAnswer
      guestCount: $guestCount
    ) {
      id
      email
      name
    }
  }
`;

class Rsvp extends Component {
  state = {
    password: '',
    confirmPassword: '',
    rsvpToken: '',
    rsvpAnswer: '',
    guestCount: '0',
  };

  save = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { rsvpAnswer, rsvpToken, guestCount, password, confirmPassword } = this.state;
    return (
      <Layout>
        <SEO title="RSVP" keywords={[`gatsby`, `application`, `react`]} />
        <h1>RSVP</h1>
        <Mutation
          mutation={RSVP_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }, { query: UNCONFIRMED_GUEST_COUNT_QUERY }]}
        >
          {(rsvp, { error, loading }) => (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await rsvp();
                navigate('/gift');
              }}
            >
              <ErrorMessage error={error} />
              <Fieldset disabled={loading} aria-busy={loading}>
                <RadioLabel htmlFor="rsvpAnswer">
                  Yes, I&apos;m going.
                  <RadioInput
                    type="radio"
                    name="rsvpAnswer"
                    id="rsvpYes"
                    required
                    value="true"
                    checked={rsvpAnswer === 'true'}
                    onChange={this.save}
                  />
                </RadioLabel>
                <RadioLabel htmlFor="rsvpAnswer">
                  No, I&apos;m not going.
                  <RadioInput
                    type="radio"
                    name="rsvpAnswer"
                    id="rsvpNo"
                    required
                    value="false"
                    checked={rsvpAnswer === 'false'}
                    onChange={this.save}
                  />
                </RadioLabel>
                {rsvpAnswer === 'false' && (
                  <Warning>
                    <p>If you submit this you will not be able to change your mind.</p>
                  </Warning>
                )}
                <Label htmlFor="rsvpToken">
                  RSVP Code
                  <Input
                    type="text"
                    name="rsvpToken"
                    id="rsvpToken"
                    required
                    minLength="6"
                    value={rsvpToken}
                    onChange={this.save}
                  />
                </Label>
                {rsvpAnswer === 'true' && (
                  <>
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
                    <Info text="Passwords must be more than 8 characters." />
                    <Label htmlFor="password">
                      Password
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        required
                        minLength="8"
                        value={password}
                        onChange={this.save}
                      />
                    </Label>
                    <Label htmlFor="confirmPassword">
                      Confirm Password
                      <Input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        required
                        minLength="8"
                        value={confirmPassword}
                        onChange={this.save}
                      />
                    </Label>
                  </>
                )}
                <SubmitButton type="submit" value="Confirm RSVP" />
              </Fieldset>
            </form>
          )}
        </Mutation>
      </Layout>
    );
  }
}

export default Rsvp;
