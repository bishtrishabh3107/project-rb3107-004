import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import '../../../assets/styles/index.scss';
import HorizontalLine from '../HorizontalLine';
import CategoryProducts from '../CategoryProducts';
import Bounce from 'react-reveal/Bounce';

function ElectronicsCategoryProducts() {
  return (
    <div className="CategoryProducts">
      <Bounce left>
        <div className="horizontalLine">
          <HorizontalLine sectionTitle="Electronics" />
        </div>
      </Bounce>
      <div className="columns is-tablet is-gapless">
        <StaticQuery
          query={electronicProduct}
          render={(data) => {
            return (
              <>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div className="column" key={node.id}>
                    <CategoryProducts
                      fixed={node.image.childImageSharp.fixed}
                      productFamily={node.productFamily}
                      slug={node.slug}
                      key={node.id}
                    />
                  </div>
                ))}
              </>
            );
          }}
        />
      </div>
    </div>
  );
}

export default ElectronicsCategoryProducts;

const electronicProduct = graphql`
  {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "Electronics" } }
        productClass: { eq: "Supreme_Class" }
      }
      sort: { fields: publishedAt, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          name
          description
          slug
          publishedAt(formatString: "DD MM YYYY")
          productFamily
          image {
            childImageSharp {
              fixed(width: 200, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
