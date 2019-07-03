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
          <UpdateGuest path="guest-management/edit/:guestId" />
          <UpdateAddress path="guest-management/address/:guestId/:addressId" />
          <ViewGuest path="guest-management/:guestId" />
          <ListGuests path="guest-management/" />
        </Router>
      )}
    </Location>
  );
};

export default index;
