import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const BiltmoreEstate = () => (
  <StaticQuery
    query={graphql`
      query BILTMORE_ESTATE_IMAGE_QUERY {
        file(relativePath: { regex: "/biltmore-estate/" }) {
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

export default BiltmoreEstate;
