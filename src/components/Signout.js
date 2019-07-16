import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { CURRENT_USER_QUERY } from '../shared/queries';

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  padding: 0;
  margin: 0;
  transition: all 0.5s;
  position: relative;
  box-shadow: none;
  text-transform: none;
  color: var(--darkshade);

  &:hover {
    color: var(--lightaccent-lighter);
  }

  &:after {
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--lightaccent-lighter);
    transition: width 0.3s ease 0s, left 0.5s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &:active {
    box-shadow: none;
    background: none;
  }

  &:focus {
    outline: none;
    background: none;
  }
`;

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {signout => (
      <Button type="submit" onClick={signout}>
        Sign Out
      </Button>
    )}
  </Mutation>
);

export default Signout;
