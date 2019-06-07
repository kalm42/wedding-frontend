import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PleaseSignIn from '../components/PleaseSignIn';
import User from '../components/User';
import { CURRENT_USER_QUERY } from '../shared/queries';

const CREATE_TRANSACTION_MUTATION = gql`
  mutation CREATE_TRANSACTION_MUTATION($token: String!, $amount: Int!) {
    createFundTransaction(token: $token, amount: $amount) {
      id
      type
      price
    }
  }
`;

class AddFundsPage extends Component {
  state = {
    amount: 2000,
  };

  updateAmount = e => {
    this.setState({ amount: Number(e.target.value) });
  };

  customAmount = e => {
    const amount = Math.round(Number(e.target.value)) * 100;
    this.setState({ amount });
  };

  isSelected = option => {
    const { amount } = this.state;
    return amount === option;
  };

  onToken = async (res, createFundTransaction) => {
    const { amount } = this.state;
    await createFundTransaction({ variables: { token: res.id, amount } });
    navigate('/history');
  };

  render() {
    const { amount } = this.state;
    return (
      <Layout>
        <SEO title="Add Funds" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Add Funds</h1>
        <p>Now go build something great.</p>
        <PleaseSignIn>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="a10">
              <input
                type="radio"
                id="a10"
                name="amount"
                value="1000"
                checked={this.isSelected(1000)}
                onChange={this.updateAmount}
              />
              $10
            </label>
            <label htmlFor="a20">
              <input
                type="radio"
                id="a20"
                name="amount"
                value="2000"
                checked={this.isSelected(2000)}
                onChange={this.updateAmount}
              />
              $20
            </label>
            <label htmlFor="a40">
              <input
                type="radio"
                id="a40"
                name="amount"
                value="4000"
                checked={this.isSelected(4000)}
                onChange={this.updateAmount}
              />
              $40
            </label>
            <label htmlFor="a80">
              <input
                type="radio"
                id="a80"
                name="amount"
                value="8000"
                checked={this.isSelected(8000)}
                onChange={this.updateAmount}
              />
              $80
            </label>
            <label htmlFor="a160">
              <input
                type="radio"
                id="a160"
                name="amount"
                value="16000"
                checked={this.isSelected(16000)}
                onChange={this.updateAmount}
              />
              $160
            </label>
            <label htmlFor="num">
              Other
              <input
                type="number"
                name="amount"
                id="num"
                value={amount / 100}
                onChange={this.customAmount}
              />
            </label>
            <User>
              {({ data: { me } }) => (
                <Mutation
                  mutation={CREATE_TRANSACTION_MUTATION}
                  refetchQueries={[{ query: CURRENT_USER_QUERY }]}
                >
                  {createFundTransaction => (
                    <StripeCheckout
                      amount={amount}
                      name="Easy Postal Service"
                      description={`Funding acount with $${amount / 100}.`}
                      image={`https://api.adorable.io/avatars/100/${encodeURI(
                        me.name,
                      )}@adorable.png`}
                      stripeKey={process.env.GATSBY_STRIPE_KEY}
                      currency="USD"
                      email={me.email}
                      token={res => this.onToken(res, createFundTransaction)}
                    >
                      <input type="submit" value="Add funds" />
                    </StripeCheckout>
                  )}
                </Mutation>
              )}
            </User>
          </form>
        </PleaseSignIn>
      </Layout>
    );
  }
}

export default AddFundsPage;
