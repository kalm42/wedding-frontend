import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoBlock = styled.div`
  display: block;
  background: var(--lightaccent-lighter);
  padding: 1rem;
  border-radius: 0.7rem;
  color: var(--lightaccent-darker);
  border: 1px solid var(--lightaccent);
`;

const Info = ({ text }) => <InfoBlock>{text}</InfoBlock>;

Info.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Info;
