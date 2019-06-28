import React from 'react';
import { Router, Location } from '@reach/router';

import UpdateGuest from './update-guest';
import ListGuests from './list-guests';
import ViewGuest from './view-guest';
import UpdateAddress from './update-address';

const index = () => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location}>
          <UpdateGuest path="guest-profile/edit/:guestId" />
          <UpdateAddress path="guest-profile/address/:addressId" />
          <ViewGuest path="guest-profile/:guestId" />
          <ListGuests path="guest-profile/" />
        </Router>
      )}
    </Location>
  );
};

export default index;
