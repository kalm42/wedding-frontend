import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const KSImage018 = () => (
  <StaticQuery
    query={graphql`
      query KYLE_AND_SHELL_018_IMAGE_QUERY {
        file(relativePath: { regex: "/img-018/" }) {
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

export default KSImage018;
