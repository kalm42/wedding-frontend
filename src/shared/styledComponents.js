import styled from 'styled-components';
import { Link } from 'gatsby';

export const Fieldset = styled.fieldset`
  display: grid;
  width: 100%;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 50%;
  }
  @media screen and (min-width: 1280px) and (max-width: 2999px) {
    width: 33%;
  }
  @media screen and (min-width: 3000px) {
    width: 25%;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const RadioLabel = styled.label`
  display: grid;
  grid-template-areas: 'radio label';
  grid-template-columns: 25px 1fr;
`;

export const Input = styled.input`
  padding: 0.667rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 0.7rem;
  border: none;
  background: var(--lightshade-darker);
  color: var(--lightaccent);

  &:focus {
    outline: none;
    background: var(--lightshade-lighter);
  }

  &:invalid {
    border: 1px solid var(--danger);
  }

  &:valid {
    border: 1px solid var(--success);
  }
`;

export const RadioInput = styled.input`
  grid-area: radio;
  margin: 0.33rem 0;
  width: 100%;
  border-radius: 0.7rem;
  border: none;
  background: var(--lightshade-darker);
  color: var(--lightaccent);

  &:focus {
    outline: none;
    background: var(--lightshade-lighter);
    box-shadow: var(--deepboxshadow);
  }

  &:invalid {
    border: 1px solid var(--danger);
  }

  &:valid {
    border: 1px solid var(--success);
  }
`;

export const RadioInput = styled.input`
  grid-area: radio;
  margin: 0.33rem 0;
  width: 100%;
  border-radius: 0.7rem;
  border: none;
  box-shadow: var(--deepboxshadow);
  background: var(--primary);
  text-transform: uppercase;

  &:active {
    box-shadow: var(--shallowboxshadow);
    background: var(--primary-darker);
  }

  &:focus {
    outline: none;
    background: var(--lightshade-lighter);
    box-shadow: var(--deepboxshadow);
  }

  &:invalid {
    border: 1px solid var(--danger);
  }

  &:valid {
    border: 1px solid var(--success);
  }
`;

export const LinkButton = styled(Link)`
  width: 100%;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 0.7rem;
  border: none;
  box-shadow: var(--deepboxshadow);
  background: var(--primary);
  text-transform: uppercase;
  display: block;
  text-align: center;
  text-decoration: none;

  &:active {
    box-shadow: var(--shallowboxshadow);
    background: var(--primary-darker);
  }

  &:focus {
    outline: none;
    background: var(--primary-darker);
  }
`;

export const Danger = styled.div`
  padding: 2rem;
  background: var(--danger);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
`;

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(245deg, var(--lightaccent-lighter), var(--lightaccent-darker));
`;
