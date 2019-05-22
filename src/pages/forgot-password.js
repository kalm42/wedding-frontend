import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Error from '../components/ErrorMessage';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class forgotPasswordPage extends Component {
  state = {
    email: '',
  };

  save = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email } = this.state;
    return (
      <Layout>
        <SEO title="Reset your password" />
        <h1>Reset Your Password!</h1>
        <p>Oh no! You forgot your password. Oh well. Enter a new password here.</p>
        <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
          {(reset, { loading, error, called }) => {
            if (called) {
              return <p>Success! Check your email for a password reset link!</p>;
            }
            return (
              <form
                method="post"
                onSubmit={e => {
                  e.preventDefault();
                  reset();
                }}
              >
                <Error error={error} />
                <Fieldset disabled={loading} aria-busy={loading}>
                  <Label htmlFor="email">
                    Email
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="something@gmail.com"
                      value={email}
                      onChange={this.save}
                      required
                    />
                  </Label>
                  <SubmitButton type="submit" value="I forgot" />
                </Fieldset>
              </form>
            );
          }}
        </Mutation>
      </Layout>
    );
  }
}

export default forgotPasswordPage;
