import React from 'react';

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Site built by
      {` `}
      <a href="https://kalm42.com">kalm42</a>
    </footer>
  );
};

export default Footer;
