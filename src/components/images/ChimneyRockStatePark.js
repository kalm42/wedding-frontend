import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const ChimneyRockStatePark = () => (
  <StaticQuery
    query={graphql`
      query CHIMNEY_ROCK_STATE_PARK_IMAGE_QUERY {
        file(relativePath: { regex: "/chimney_rock/i" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
);

export default ChimneyRockStatePark;
