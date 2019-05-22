import React from 'react';

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Service built by
      {` `}
      <a href="https://kalm42.com">kalm42</a> and{' '}
      <a href="https://completewebdesignsolution.com">Complete Web Design Solution</a>
    </footer>
  );
};

export default Footer;
