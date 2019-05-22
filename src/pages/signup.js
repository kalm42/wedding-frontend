import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ErrorMessage from '../components/ErrorMessage';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';
import { CURRENT_USER_QUERY } from '../shared/queries';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
    $line1: String!
    $line2: String
    $city: String!
    $state: String!
    $zip: String!
  ) {
    signup(
      name: $name
      email: $email
      password: $password
      line1: $line1
      line2: $line2
      city: $city
      state: $state
      zip: $zip
    ) {
      id
      email
      name
    }
  }
`;

class signupPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
  };

  save = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password, passwordConfirm, line1, line2, city, state, zip } = this.state;
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { error, loading }) => {
          return (
            <Layout>
              <SEO title="Sign up!" />
              <Link to="/">Go back to the homepage</Link>
              <h1>Sign up!</h1>
              <p>Sign up for our amazing service!</p>
              <ErrorMessage error={error} />
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await signup();
                  navigate('/');
                }}
              >
                <Fieldset disabled={loading} aria-busy={loading}>
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
                  <Label htmlFor="password">
                    Password
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="passwordConfirm">
                    Confirm Password
                    <Input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      required
                      value={passwordConfirm}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="name">
                    Name
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={name}
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
                  <SubmitButton type="submit" value="Sign Up" />
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
