import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage008 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_008_IMAGE_QUERY {
        file(relativePath: { regex: "/img-008/" }) {
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

export default KSImage008;
