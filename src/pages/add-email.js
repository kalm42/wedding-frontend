import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { navigate } from 'gatsby';
import gql from 'graphql-tag';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Error from '../components/ErrorMessage';
import PleaseSignIn from '../components/PleaseSignIn';
import { Fieldset, Label, Input, SubmitButton } from '../shared/styledComponents';

const CREATE_EMAIL_MUTATION = gql`
  mutation CREATE_EMAIL_MUTATION($email: String!) {
    createEmail(email: $email) {
      id
    }
  }
`;

class Emails extends Component {
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
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2>Add Email</h2>
        <PleaseSignIn>
          <Mutation mutation={CREATE_EMAIL_MUTATION} variables={this.state}>
            {(createEmail, { loading, error }) => {
              return (
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    await createEmail();
                    navigate('/emails');
                  }}
                >
                  <Error error={error} />
                  <Fieldset disabled={loading} aria-busy={loading}>
                    <Label htmlFor="email">
                      Email
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="fake@gmail.com"
                        value={email}
                        onChange={this.save}
                        required
                      />
                    </Label>
                    <SubmitButton type="submit" value="Submit" />
                  </Fieldset>
                </form>
              );
            }}
          </Mutation>
        </PleaseSignIn>
      </Layout>
    );
  }
}

export default Emails;
