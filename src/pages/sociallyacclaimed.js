import React from 'react';
import Layout from '../components/Global/Layout';
import { graphql, StaticQuery } from 'gatsby';
import SideScreen from '../components/organism/SideScreen';
import RatingProductLine from '../components/organ/RatingProductLine';
import '../assets/styles/index.scss';

function sociallyacclaimed() {
  return (
    <div>
      <Layout>
        <div className="columns is-variable is-tablet is-1">
          <div className="column is-two-thirds ">
            <StaticQuery
              query={sociallyacclaimedProductsQuery}
              render={(data) => {
                return (
                  <div>
                    {data.allStrapiProduct.edges.map(({ node }) => (
                      <RatingProductLine
                        key={node.id}
                        fixed={node.image.childImageSharp.fixed}
                        name={node.name}
                        productFamily={node.productFamily}
                        slug={node.slug}
                      />
                    ))}
                  </div>
                );
              }}
            />
          </div>
          <div className="column is-one-thirds">
            <SideScreen />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default sociallyacclaimed;

const sociallyacclaimedProductsQuery = graphql`
  {
    allStrapiProduct(filter: { sociallyAcclaimed: { eq: "yes" } }, limit: 20) {
      edges {
        node {
          id
          name
          slug
          productFamily
          image {
            childImageSharp {
              fixed(height: 130, width: 130) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
