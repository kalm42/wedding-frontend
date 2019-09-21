import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const Arbor = () => (
  <StaticQuery
    query={graphql`
      query ARBOR_IMAGE_QUERY {
        file(relativePath: { regex: "/thenorthcarolinaarboretum/i" }) {
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

export default Arbor;
