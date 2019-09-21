import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const LaZoom = () => (
  <StaticQuery
    query={graphql`
      query LAZOOM_IMAGE_QUERY {
        file(relativePath: { regex: "/lazoom/i" }) {
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

export default LaZoom;
