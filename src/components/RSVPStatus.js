import React from 'react';
import User from './User';
import {
  Loading,
  LightAccentLighter,
  DarkAccentDarker,
  LinkButton,
} from '../shared/styledComponents';

const RSVPStatus = () => {
  return (
    <User>
      {({ data, loading }) => {
        if (loading) {
          return <Loading />;
        }
        if (!data || !data.me) {
          return (
            <>
              <p>RSVP by March 20th.</p>
              <LinkButton to="/rsvp">RSVP</LinkButton>
            </>
          );
        }
        const {
          me: { guestCount },
        } = data;
        if (guestCount > 0) {
          return (
            <LightAccentLighter>
              <h4>
                You are going to the wedding.{' '}
                <span role="img" aria-label="happy emoji">
                  😄
                </span>
              </h4>
              <p>Including yourself you are bringing {guestCount - 1} other people.</p>
            </LightAccentLighter>
          );
        }
        return (
          <DarkAccentDarker>
            <h4>
              You have said you are not able to attend{' '}
              <span role="img" aria-label="sad emoji">
                😢
              </span>
            </h4>
            <p>
              We are sad to hear that but we hope that you take a moment out of your day to do
              something fun!
            </p>
          </DarkAccentDarker>
        );
      }}
    </User>
  );
};

export default RSVPStatus;
