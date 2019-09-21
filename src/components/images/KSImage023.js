import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage023 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_023_IMAGE_QUERY {
        file(relativePath: { regex: "/img-023/" }) {
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

export default KSImage023;
