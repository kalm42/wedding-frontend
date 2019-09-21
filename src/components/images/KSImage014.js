import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage014 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_014_IMAGE_QUERY {
        file(relativePath: { regex: "/img-014/" }) {
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

export default KSImage014;
