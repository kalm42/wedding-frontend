import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query HOME_HERO_IMAGE_QUERY {
        file(relativePath: { regex: "/hero/" }) {
          childImageSharp {
            fluid(maxWidth: 5000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
);

export default HeroImage;
