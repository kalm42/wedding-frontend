import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import gql from 'graphql-tag';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import User from '../components/User';
import ErrorMessage from '../components/ErrorMessage';
import GiftGraph from '../components/GiftGraph';
import { GIFT_STATUS_QUERY } from '../shared/queries';
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
    name: '',
    valid: false,
  };

  updateAmount = e => {
    const amount = Number(e.target.value);
    this.setState(state => {
      const newState = { ...state, amount };
      const valid = this.validate(newState);
      return { amount, valid };
    });
  };

  customAmount = e => {
    const amount = Math.round(Number(e.target.value)) * 100;
    this.setState(state => {
      const newState = { ...state, amount };
      const valid = this.validate(newState);
      return { amount, valid };
    });
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
    const gift = e.target.value;
    this.setState(state => {
      const newState = { ...state, gift };
      const valid = this.validate(newState);
      return { gift, valid };
    });
  };

  updateName = e => {
    const name = e.target.value;
    this.setState(state => {
      const newState = { ...state, name };
      const valid = this.validate(newState);
      return { name, valid };
    });
  };

  onToken = async (res, createFundTransaction) => {
    const { amount, gift, name } = this.state;
    await createFundTransaction({ variables: { token: res.id, amount, gift, name } });
    navigate('/history');
  };

  validate = state => {
    const { amount, gift, loggedIn, name } = state;
    if (amount > 999 && gift) {
      if (!loggedIn) {
        return !!name.length;
      }
      return true;
    }
    return false;
  };

  render() {
    const { amount, name, valid, loggedIn } = this.state;
    return (
      <Layout>
        <SEO title="Add Funds" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Wedding Gift</h1>
        <p>
          We would prefer no boxed gifts, but that on its own is boring. So please vote what we
          should do with the money.
        </p>
        <p>You can give can give to one, or both, or if your side is losing you can give again.</p>
        <GiftGraph />
        <User>
          {({ data }) => {
            if (data && data.me && !loggedIn) {
              this.setState({ loggedIn: true });
            }
            return (
              <form
                onSubmit={e => {
                  console.log('Validating');
                  e.preventDefault();
                  this.validate(data);
                }}
              >
                <Mutation
                  mutation={CREATE_TRANSACTION_MUTATION}
                  refetchQueries={[{ query: GIFT_STATUS_QUERY }]}
                >
                  {(createFundTransaction, { loading, error }) => (
                    <>
                      {!data.me && (
                        <>
                          <h3>Who are you?</h3>
                          <Fieldset disabled={loading} aria-busy={loading}>
                            <Label htmlFor="name">
                              <Input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={this.updateName}
                                placeholder="Name"
                                required
                              />
                            </Label>
                          </Fieldset>
                        </>
                      )}
                      <h3>What should we do?</h3>
                      <Fieldset disabled={loading} aria-busy={loading}>
                        <RadioLabel htmlFor="op1">
                          <RadioInput
                            type="radio"
                            name="option"
                            id="op1"
                            value="gym"
                            checked={this.isGiftSelected('gym')}
                            onChange={this.updateGift}
                            required
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
                            required
                          />
                          Italian Honeymoon
                        </RadioLabel>
                      </Fieldset>
                      <h3>How much would you like to give?</h3>
                      <Fieldset disabled={loading} aria-busy={loading}>
                        <RadioLabel htmlFor="a40">
                          <RadioInput
                            type="radio"
                            id="a40"
                            name="amount"
                            value="5000"
                            checked={this.isSelected(5000)}
                            onChange={this.updateAmount}
                          />
                          $50
                        </RadioLabel>
                        <RadioLabel htmlFor="a80">
                          <RadioInput
                            type="radio"
                            id="a80"
                            name="amount"
                            value="10000"
                            checked={this.isSelected(10000)}
                            onChange={this.updateAmount}
                          />
                          $100
                        </RadioLabel>
                        <RadioLabel htmlFor="a160">
                          <RadioInput
                            type="radio"
                            id="a160"
                            name="amount"
                            value="15000"
                            checked={this.isSelected(15000)}
                            onChange={this.updateAmount}
                          />
                          $150
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
                          data && data.me ? data.me.id : '123',
                        )}@adorable.png`}
                        stripeKey={STRIPE_KEY}
                        currency="USD"
                        email={data && data.me ? data.me.email : null}
                        token={res => this.onToken(res, createFundTransaction)}
                      >
                        <SubmitButton
                          type="submit"
                          disabled={!valid}
                          onClick={e => {
                            console.log('Click');
                            e.preventDefault();
                            this.validate(data);
                          }}
                          value={loading ? 'Thank you' : 'Give'}
                        />
                      </StripeCheckout>
                      <ErrorMessage error={error} />
                    </>
                  )}
                </Mutation>
              </form>
            );
          }}
        </User>
      </Layout>
    );
  }
}

export default AddFundsPage;
