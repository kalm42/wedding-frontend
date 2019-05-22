import styled from 'styled-components';

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
    box-shadow: var(--deepboxshadow);
  }

  &:invalid {
    border: 1px solid var(--danger);
  }

  &:valid {
    border: 1px solid var(--success);
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.7rem;
  border: none;
  box-shadow: var(--deepboxshadow);
  background: linear-gradient(245deg, var(--primary-lighter), var(--primary-darker));
  text-transform: uppercase;

  &:active {
    box-shadow: var(--shallowboxshadow);
    background: var(--primary-darker);
  }

  &:focus {
    outline: none;
    background: var(--primary-darker);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.7rem;
  border: none;
  box-shadow: var(--deepboxshadow);
  background: linear-gradient(245deg, var(--lightaccent-lighter), var(--lightaccent-darker));
  text-transform: uppercase;
  color: var(--lightshade);

  &:active {
    box-shadow: var(--shallowboxshadow);
    background: var(--lightaccent-darker);
  }

  &:focus {
    outline: none;
    background: var(--lightaccent-darker);
  }
`;
