import React from 'react';
import { isBefore, distanceInWordsToNow } from 'date-fns';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../components/HeroImage';
import {
  LinkButton,
  LightAccent,
  DarkAccent,
  TwoColumns,
  Warning,
  Danger,
} from '../shared/styledComponents';
import GiftGraph from '../components/GiftGraph';
import RSVPStatus from '../components/RSVPStatus';

const IndexPage = () => (
  <>
    <HeroImage />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h4>
        {isBefore(new Date(2020, 6, 20, 18, 0, 0), Date.now())
          ? `We got married ${' '}
        ${distanceInWordsToNow(new Date(2020, 6, 20, 18, 0, 0), { includeSeconds: true })}`
          : `We're getting married in${' '}
      ${distanceInWordsToNow(new Date(2020, 6, 20, 18, 0, 0), { includeSeconds: true })}`}
      </h4>
      <TwoColumns>
        <LightAccent>
          <h2>Where</h2>
          <address>
            26 Sweeten Creek Rd. <br />
            Asheville, NC 28803-2318
          </address>
        </LightAccent>
        <DarkAccent>
          <h2>When</h2>
          <p>
            June 20, 2020 <br />
            6:00pm - 10:00pm
          </p>
        </DarkAccent>
      </TwoColumns>

      {isBefore(new Date(2020, 6, 20, 18, 0, 0), Date.now()) && (
        <Warning>
          <h2>Urgent Day of Question?</h2>
          <p>Don&apos;t call us. I mean you can, but please we got a lot going on.</p>
          <Danger>
            <p>
              <a href="tel:+9512127174">(951)212-7174</a>
            </p>
          </Danger>
        </Warning>
      )}

      <div>
        <h2>Come celebrate with us!</h2>

        <p>We are excited to invite you to join us as we begin building out new future together.</p>

        <p>
          Each one of you plays a unique role in our lives, sharing with us memories we will always
          treasure. So we hope you can join us in Asheville for yet another unforgettable moment, as
          we exchange vows and make a lasting commitment to one another.
        </p>

        <RSVPStatus />
      </div>

      <div>
        <h2>Our Wedding Day</h2>
        <p>
          At 6pm, we will meet you inside Haiku I Do for Our wedding ceremony which will start at
          6:30pm. After a misleadingly short ceremony, we will raise A toast to celebrate officially
          becoming husband &amp; wife.
        </p>
        <p>
          From there, we will immediately start the reception at the same location. We will dine on
          food and stuff. Drink beverages that are liquid and be merry.
        </p>
        <p>
          There will more than likely be an after party at one of the many local breweries. If you
          don’t know which one then you should ask because you are invited.
        </p>
      </div>

      <TwoColumns>
        <DarkAccent>
          <h2>Gifts</h2>
          <p>
            We would prefer no boxed gifts, but that on its own is boring. So please vote what we
            should do with the money.
          </p>
          <LinkButton to="/gift">Give Gift</LinkButton>
          <GiftGraph />
        </DarkAccent>
        <LightAccent>
          <h2>FAQ</h2>
          <p>
            <strong>What should I wear?</strong>
          </p>
          <p>
            I&rsquo;d start with clothes. From there it&rsquo;s up to you. But really, it&rsquo;s
            business casual.
          </p>
          <p>
            <strong>Are children welcome?</strong>
          </p>
          <p>
            There will be alcohol served at the wedding along with alcoholic ice cream. In the
            interest of the enjoyment for everyone please leave your younglings in the care of
            capable adults. Or - bring a child and tell them they can&rsquo;t have ice cream and see
            how well that goes.
          </p>
          <p>
            <strong>Are you expecting gifts?</strong>
          </p>
          <p>Not at all. We&rsquo;re only hoping that you join us.</p>
          <p>
            <strong>How did you meet?</strong>
          </p>
          <p>
            Coffee Meets Bagel. We still don&rsquo;t know who is the coffee and who is the bagel.
          </p>
          <p>
            <strong>What should I do now?</strong>
          </p>
          <p>
            I would highly suggest seeing if you can stay a day or two longer in Asheville. They
            have a vibrant art scene and more breweries then you can shake a stick at. I&rsquo;ve
            tried.
          </p>
          <p>
            <strong>What’s the air speed of an unladen swallow?</strong>
          </p>
          <p>African or European?</p>
        </LightAccent>
      </TwoColumns>
    </Layout>
  </>
);

export default IndexPage;
