/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { CURRENT_USER_QUERY } from '../shared/queries';
import Error from '../components/ErrorMessage';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      name
    }
  }
`;

export default class passwordReset extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };

  save = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { password, confirmPassword } = this.state;
    const {
      query: { resetToken },
    } = this.props;

    return (
      <Layout>
        <SEO title="Password Reset" />
        <h2>Reset Your Password</h2>
        <Mutation
          mutation={REQUEST_RESET_MUTATION}
          variables={{
            resetToken,
            ...this.state,
          }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(resetPassword, { loading, error }) => {
            return (
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await resetPassword();
                  navigate('/');
                }}
              >
                <Error error={error} />
                <Fieldset disabled={loading} aria-busy={loading}>
                  <Label htmlFor="password">
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={this.save}
                    />
                  </Label>
                  <Label htmlFor="confirmPassword">
                    <Input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      required
                      value={confirmPassword}
                      onChange={this.save}
                    />
                  </Label>
                  <SubmitButton type="submit" value="Reset Password" />
                </Fieldset>
              </form>
            );
          }}
        </Mutation>
      </Layout>
    );
  }
}

passwordReset.defaultProps = {
  query: {
    resetToken: '',
  },
};
