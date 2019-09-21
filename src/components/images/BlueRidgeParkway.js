import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const BlueRidgeParkway = () => (
  <StaticQuery
    query={graphql`
      query BLUE_RIDGE_PARKWAY_IMAGE_QUERY {
        file(relativePath: { regex: "/blue-ridge-parkway/" }) {
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

export default BlueRidgeParkway;
