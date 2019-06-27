import React from 'react';
import { Router, Location } from '@reach/router';

import UpdateGuest from './update-guest';
import ListGuests from './list-guests';

const index = () => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location}>
          <ListGuests path="guest-profile/" />
          <Foo path="guest-profile/:guestId" />
          <UpdateGuest path="guest-profile/edit/:guestId" />
        </Router>
      )}
    </Location>
  );
};

const Foo = () => (
  <div>
    <p>Guest</p>
  </div>
);

export default index;
