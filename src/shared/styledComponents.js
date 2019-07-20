import styled, { keyframes } from 'styled-components';
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

export const SubmitButton = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.7rem;
  border: none;
  box-shadow: var(--deepboxshadow);
  background: linear-gradient(245deg, var(--primary-lighter), var(--primary));
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

export const RadioInput = styled.input`
  grid-area: radio;
  margin: 0.33rem 0;
  width: 70%;
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
  display: grid;
  align-items: center;
  justify-items: center;
`;
export const Warning = styled.div`
  padding: 2rem;
  background: var(--warning);
  color: var(--lightshade);
  font-weight: 900;
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  p {
    padding: 0;
    margin: 0;
  }
`;
export const Success = styled.div`
  padding: 2rem;
  background: var(--success);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  display: grid;
  align-items: center;
  justify-items: center;
  p {
    padding: 0;
    margin: 0;
  }
`;

export const LightAccent = styled.div`
  padding: 2rem;
  background: var(--lightaccent);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;
export const LightAccentLighter = styled.div`
  padding: 2rem;
  background: var(--lightaccent-lighter);
  color: var(--darkshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;

  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;
export const LightAccentDarker = styled.div`
  padding: 2rem;
  background: var(--lightaccent-darker);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;
export const DarkAccent = styled.div`
  padding: 2rem;
  background: var(--darkaccent);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;
export const DarkAccentLighter = styled.div`
  padding: 2rem;
  background: var(--darkaccent-lighter);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;
export const DarkAccentDarker = styled.div`
  padding: 2rem;
  background: var(--darkaccent-darker);
  color: var(--lightshade);
  border-radius: 0.7rem;
  box-shadow: var(--shallowboxshadow);
  margin: 0.7rem 0;
  ${props => props.center && 'display: grid; align-items: center; justify-items: center;'}
`;

export const Button = styled.button`
  width: 100%;
  background: linear-gradient(245deg, var(--lightaccent-lighter), var(--lightaccent-darker));
`;

export const RemoveButton = styled.button`
  padding: 0 1rem;
  background: var(--danger);
  margin: 0 1rem;
`;
export const CancelLink = styled(Link)`
  padding: 0 1rem;
  background: var(--danger);
  margin: 0 1rem;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// START straight copy from https://codepen.io/WhizofaWiz/pen/dBLzZV?page=1
const LoaderRoation = keyframes`
0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg); }
`;

export const Loading = styled.div`
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation: ${LoaderRoation} 0.8s infinite linear;
  border-left: 3px solid rgba(114, 144, 182, 0.15);
  border-right: 3px solid rgba(114, 144, 182, 0.15);
  border-bottom: 3px solid rgba(114, 144, 182, 0.15);
  border-top: 3px solid rgba(114, 144, 182, 0.8);
  border-radius: 100%;
`;
// END
