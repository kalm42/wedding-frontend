import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage010 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_010_IMAGE_QUERY {
        file(relativePath: { regex: "/img-010/" }) {
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

export default KSImage010;
