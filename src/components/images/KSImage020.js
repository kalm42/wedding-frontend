import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage020 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_020_IMAGE_QUERY {
        file(relativePath: { regex: "/img-020/" }) {
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

export default KSImage020;
