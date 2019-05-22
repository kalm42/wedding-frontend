import React, { Component } from 'react';
import { navigate } from 'gatsby';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from '../shared/queries';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  save = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error }) => {
          return (
            <form
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                navigate('/');
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
                    placeholder="email"
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
                    placeholder="password"
                    required
                    value={password}
                    onChange={this.save}
                  />
                </Label>
                <SubmitButton type="submit" value="Sign in!" />
              </Fieldset>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default SignIn;
