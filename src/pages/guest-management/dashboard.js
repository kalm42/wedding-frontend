import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import PleaseSignIn from '../../components/PleaseSignIn';
import {
  TwoColumns,
  LightAccent,
  DarkAccent,
  LightAccentLighter,
  DarkAccentDarker,
} from '../../shared/styledComponents';
import NoRSVPList from '../../components/NoRSVPList';
import RSVPList from '../../components/RSVPList';
import UnconfirmedGuestCount from '../../components/UnconfirmedGuestCount';
import ConfirmedGuestCount from '../../components/ConfirmedGuestCount';
import GiftGraph from '../../components/GiftGraph';
import NoInvite from '../../components/NoInvite';
import TransactionListByGift from '../../components/TransactionListByGift';
import GiftTotal from '../../components/GiftTotal';

const Dashboard = () => {
  return (
    <Layout>
      <SEO title="Admin dashboard" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Admin Dashboard</h1>
      <PleaseSignIn admin>
        <DarkAccentDarker>
          <h2>Guests</h2>
          <TwoColumns>
            <DarkAccent>
              <h3>Have Not RSVP&rsquo;d</h3>
              <NoRSVPList />
              <LightAccent center>
                <h3>Unconfirmed Guest Count</h3>
                <UnconfirmedGuestCount />
              </LightAccent>
            </DarkAccent>
            <DarkAccent>
              <h3>Have RSVP&rsquo;d</h3>
              <RSVPList />
              <LightAccentLighter center>
                <h3>Confirmed Guest Count</h3>
                <ConfirmedGuestCount />
              </LightAccentLighter>
            </DarkAccent>
          </TwoColumns>
          <LightAccent>
            <h3>Guests without an invitation</h3>
            <NoInvite />
          </LightAccent>
        </DarkAccentDarker>
        <LightAccentLighter>
          <h2>Gifts Details</h2>
          <GiftGraph />
          <TwoColumns>
            <DarkAccent center>
              <h3>Gym</h3>
              <GiftTotal gift="GYM" />
              <TransactionListByGift gift="GYM" />
            </DarkAccent>
            <DarkAccentDarker center>
              <h3>Honeymoon</h3>
              <GiftTotal gift="HONEYMOON" />
              <TransactionListByGift gift="HONEYMOON" />
            </DarkAccentDarker>
          </TwoColumns>
        </LightAccentLighter>
      </PleaseSignIn>
    </Layout>
  );
};

export default Dashboard;
