import React from 'react';
import { Router, Location } from '@reach/router';

const index = () => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location}>
          <Foo path="guest-profile/:guestId" />
        </Router>
      )}
    </Location>
  );
};

const Foo = props => (
  <div>
    <p>Guest {props.guestId}</p>
  </div>
);

export default index;

/**
 * https://www.gatsbyjs.org/docs/reach-router-and-gatsby/
 * Update this page with some content and an example repo.
 */
