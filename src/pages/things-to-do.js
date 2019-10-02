import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import {
  TwoColumns,
  LightAccent,
  DarkAccentLighter,
  LightAccentDarker,
  DarkAccent,
} from '../shared/styledComponents';
import BiltmoreEstate from '../components/images/BiltmoreEstate';
import Arbor from '../components/images/Arbor';
import BlueRidgeParkway from '../components/images/BlueRidgeParkway';
import ChimneyRockStatePark from '../components/images/ChimneyRockStatePark';
import LaZoom from '../components/images/LaZoom';
import RiverArtsDistrict from '../components/images/RiverArtsDistrict';

const ThingsToDo = () => {
  return (
    <Layout>
      <SEO title="Things to do" keywords={[`asheville`, `things to do`]} />
      <h1>Things To Do!</h1>
      <p>
        You may want to think about extending your stay or hitting one or more of these amazing
        things to do in Asheville North Carolina.
      </p>

      <LightAccent>
        <h2>Visit the Biltmore Estate</h2>
        <TwoColumns>
          <BiltmoreEstate />
          <div>
            <p>
              Something for everyone – from touring the estate to visiting the winery! Daytime
              admission includes complimentary wine tasting. Completed in 1895, George Vanderbilt’s
              250-room chateau is as impressive today as it was more than a century ago. Biltmore
              House is truly a wonder of architecture and hospitality. As our guest, you’re invited
              to enjoy a self-guided tour of the house, as well as the beautiful gardens and grounds
              surrounding it, designed by renowned landscape architect Frederick Law Olmsted.
            </p>
            <p>
              <a href="https://www.biltmore.com/landing/2019-fall?cid=ppc:brand:google:seg-4wbrand:brand-biltmore&gclid=CjwKCAjw5fzrBRASEiwAD2OSV6cOnZpel8VTQM8S3xIp6chze4oJ8wPW7ek_REZNGiy1SUZjobn6yRoCFwwQAvD_BwE&c">
                Visit Website
              </a>
            </p>
          </div>
        </TwoColumns>
      </LightAccent>

      <DarkAccentLighter>
        <h2>The North Carolina Arboretum</h2>
        <TwoColumns>
          <Arbor />
          <div>
            <p>
              Nestled in the Southern Appalachian Mountains just south of Asheville, The North
              Carolina Arboretum offers acres of cultivated gardens and groomed trails featuring
              some of the most beautiful, botanically-diverse plants in the region. Open 8AM – 9PM.
            </p>
            <p>
              <a href="https://www.ncarboretum.org/">Visit Website</a>
            </p>
          </div>
        </TwoColumns>
      </DarkAccentLighter>

      <LightAccentDarker>
        <h2>Blue Ridge Parkway</h2>
        <TwoColumns>
          <BlueRidgeParkway />
          <div>
            <p>
              Spanning the southern and central Appalachians, the Blue Ridge Parkway offers an
              exceptional glimpse of the regional flora and fauna. It is world-renowned for its
              biodiversity. The Parkway covers a wide range of habitats along the Appalachian
              Mountains, and some of these habitats are exceptionally rare. Drive, stop at the
              numerous overlooks and hike! Take a picnic!
            </p>
            <p>
              <a href="https://www.blueridgeparkway.org/about-the-parkway/">Visit Website</a>
            </p>
          </div>
        </TwoColumns>
      </LightAccentDarker>
      <DarkAccent>
        <h2>River Arts District</h2>
        <TwoColumns>
          <RiverArtsDistrict />
          <div>
            <p>
              Visit the working studies and galleries of hundreds or artists-painting, pottery,
              jewelery, glass, metal, wood and much more! Open daily.{' '}
            </p>

            <p>
              <a href="https://www.riverartsdistrict.com/">Visit Website</a>
            </p>
            <p>
              <a href="https://www.riverartsdistrict.com/river-arts-district-map/">See Map</a>
            </p>
          </div>
        </TwoColumns>
      </DarkAccent>

      <LightAccent>
        <h2>Chimney Rock State Park</h2>
        <TwoColumns>
          <ChimneyRockStatePark />
          <div>
            <p>
              Chimney Rock at Chimney Rock State Park is a nature lover’s paradise with a
              collaboration of spectacular views and incredible hiking trails. They combine to
              create a mountain adventure experience that is postcard perfect. We do not consider
              any of our trails to be wheelchair or stroller accessible, and we recommend carrying
              small children who cannot hike the trails in packs.
            </p>
            <p>
              <a href="https://www.chimneyrockpark.com/">Visit Website</a>
            </p>
          </div>
        </TwoColumns>
      </LightAccent>

      <DarkAccent>
        <h2>LaZoom Tour</h2>
        <TwoColumns>
          <LaZoom />
          <div>
            <p>
              Comedy tour options through downtown Asheville. Book in advance! 4 options – City
              comedy Tour, the Haunted Comedy Tour, the Band &amp; Beer Tour and the Kids’ Comedy
              Tour.
            </p>
            <p>
              Shelly, and I went on this with Shelly&apos;s parents, specifically the beer tour. It
              was a great time, almost ended with Shelly getting a sister-wife. Make sure to ask
              Shelly about that.
            </p>
            <p>
              <a href="https://www.lazoomtours.com/?gclid=CjwKCAjw5fzrBRASEiwAD2OSVwcISmLV5rCv583HD9S0yBeZ3YAkFlnY7SBchxDO23dVH8BmSpSifBoC-CEQAvD_BwE#home">
                Visit Website
              </a>
            </p>
          </div>
        </TwoColumns>
      </DarkAccent>
    </Layout>
  );
};

export default ThingsToDo;
