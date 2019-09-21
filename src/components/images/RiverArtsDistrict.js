import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const RiverArtsDistrict = () => (
  <StaticQuery
    query={graphql`
      query RIVER_ARTS_DISTRICT_IMAGE_QUERY {
        file(relativePath: { regex: "/river-arts-district/i" }) {
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

export default RiverArtsDistrict;
