import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Hero Img</p>

    <h2>Where</h2>
    <p>Address</p>
    <h2>When</h2>
    <p>6:00pm - 10:00pm</p>

    <h2>Urgent Day of Question?</h2>
    <p>Don&apos;t call us.</p>

    <div>
      <h2>Come celebrate with us!</h2>

      <p>We are excited to invite you to join us as we begin building out new future together.</p>

      <p>
        Each one of you plays a unique role in our lives, sharing with us memories we will always
        treasure. So we hope you can join us in Asheville for yet another unforgettable moment, as
        we change vows and make a lasting commitment to one another.
      </p>

      <p>RSVP by March 20th.</p>
    </div>

    <div>
      <h2>RSVP Status</h2>
      <p>You are going to our wedding!</p>

      <p>You are bringing 2 other people.</p>

      <p>You generously have given us $100 towards our home gym, and $20 towards our honeymoon.</p>
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

    <div>
      <h2>Gifts</h2>
      <p>
        We would prefer no boxed gifts, but that on its own is boring. So please vote what we should
        do with the money.
      </p>
      <button type="button">Give Gift</button>
    </div>

    <div>
      <h2>FAQ</h2>
      <p>What should I wear?</p>
      <p>Are you expecting gifts?</p>
      <p>How did you meet?</p>
      <p>What should I do now?</p>
      <p>What’s the air speed of an unladen swallow?</p>
    </div>
  </Layout>
);

export default IndexPage;
