import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  padding: 0;
  margin: 0;
`;

const Avatar = ({ user }) => {
  let name = Date.now();
  if (user) {
    // eslint-disable-next-line prefer-destructuring
    name = user.name;
  }

  return (
    <StyledAvatar
      width="100"
      height="100"
      src={`https://api.adorable.io/avatars/100/${encodeURI(name)}@adorable.png`}
      alt="Avatar"
      srcSet={`https://api.adorable.io/avatars/100/${encodeURI(name)}@adorable.png, 
        https://api.adorable.io/avatars/200/${encodeURI(name)}@adorable.png 2x`}
    />
  );
};

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Avatar;
