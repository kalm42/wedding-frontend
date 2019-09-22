import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage013 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_013_IMAGE_QUERY {
        file(relativePath: { regex: "/img-013/" }) {
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

export default KSImage013;
