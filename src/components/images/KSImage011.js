import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage011 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_011_IMAGE_QUERY {
        file(relativePath: { regex: "/img-011/" }) {
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

export default KSImage011;
