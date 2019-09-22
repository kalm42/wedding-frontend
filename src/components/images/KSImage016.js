import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage016 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_016_IMAGE_QUERY {
        file(relativePath: { regex: "/img-016/" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.file.childImageSharp.fluid} />}
  />
);

export default KSImage016;
