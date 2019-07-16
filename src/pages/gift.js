import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import User from '../components/User';
import ErrorMessage from '../components/ErrorMessage';
import {
  Fieldset,
  Label,
  Input,
  RadioLabel,
  RadioInput,
  SubmitButton,
} from '../shared/styledComponents';
import { STRIPE_KEY } from '../../config';

const CREATE_TRANSACTION_MUTATION = gql`
  mutation CREATE_TRANSACTION_MUTATION($token: String!, $amount: Int!, $gift: String!) {
    createFundTransaction(token: $token, amount: $amount, gift: $gift) {
      id
      type
      price
    }
  }
`;

class AddFundsPage extends Component {
  state = {
    amount: 8000,
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

  isGiftSelected = option => {
    const { gift } = this.state;
    return gift === option;
  };

  updateGift = e => {
    this.setState({ gift: e.target.value });
  };

  onToken = async (res, createFundTransaction) => {
    const { amount, gift } = this.state;
    await createFundTransaction({ variables: { token: res.id, amount, gift } });
    navigate('/history');
  };

  render() {
    const { amount } = this.state;
    return (
      <Layout>
        <SEO title="Add Funds" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Wedding Gift</h1>
        <p>
          We would prefer no boxed gifts, but that on its own is boring. So please vote what we
          should do with the money.
        </p>
        <form onSubmit={e => e.preventDefault()}>
          <h2>What should we do?</h2>
          <User>
            {({ data }) => (
              <Mutation mutation={CREATE_TRANSACTION_MUTATION}>
                {(createFundTransaction, { loading, error }) => (
                  <>
                    <Fieldset disabled={loading} aria-busy={loading}>
                      <RadioLabel htmlFor="op1">
                        <RadioInput
                          type="radio"
                          name="option"
                          id="op1"
                          value="gym"
                          checked={this.isGiftSelected('gym')}
                          onChange={this.updateGift}
                        />
                        Gym
                      </RadioLabel>
                      <RadioLabel htmlFor="op2">
                        <RadioInput
                          type="radio"
                          name="option"
                          id="op2"
                          value="honeymoon"
                          checked={this.isGiftSelected('honeymoon')}
                          onChange={this.updateGift}
                        />
                        Italian Honeymoon
                      </RadioLabel>
                    </Fieldset>
                    <p>Graph here of current standing.</p>
                    <Fieldset disabled={loading} aria-busy={loading}>
                      <RadioLabel htmlFor="a40">
                        <RadioInput
                          type="radio"
                          id="a40"
                          name="amount"
                          value="4000"
                          checked={this.isSelected(4000)}
                          onChange={this.updateAmount}
                        />
                        $40
                      </RadioLabel>
                      <RadioLabel htmlFor="a80">
                        <RadioInput
                          type="radio"
                          id="a80"
                          name="amount"
                          value="8000"
                          checked={this.isSelected(8000)}
                          onChange={this.updateAmount}
                        />
                        $80
                      </RadioLabel>
                      <RadioLabel htmlFor="a160">
                        <RadioInput
                          type="radio"
                          id="a160"
                          name="amount"
                          value="16000"
                          checked={this.isSelected(16000)}
                          onChange={this.updateAmount}
                        />
                        $160
                      </RadioLabel>
                      <Label htmlFor="num">
                        Other
                        <Input
                          type="number"
                          name="amount"
                          id="num"
                          value={amount / 100}
                          onChange={this.customAmount}
                        />
                      </Label>
                    </Fieldset>
                    <StripeCheckout
                      amount={amount}
                      name="Kyle &amp; Shelly's Wedding"
                      description={`Giving $${amount / 100}.`}
                      image={`https://api.adorable.io/avatars/100/${encodeURI(
                        data.me ? data.me.id : '123',
                      )}@adorable.png`}
                      stripeKey={STRIPE_KEY}
                      currency="USD"
                      email={data.me ? data.me.email : null}
                      token={res => this.onToken(res, createFundTransaction)}
                    >
                      <SubmitButton type="submit" value={loading ? 'Thank you' : 'Give'} />
                    </StripeCheckout>
                    <ErrorMessage error={error} />
                  </>
                )}
              </Mutation>
            )}
          </User>
        </form>
      </Layout>
    );
  }
}

export default AddFundsPage;
