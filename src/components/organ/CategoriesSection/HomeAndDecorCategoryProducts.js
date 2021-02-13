import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import '../../../assets/styles/index.scss';
import HorizontalLine from '../HorizontalLine';
import CategoryProducts from '../CategoryProducts';
import Bounce from 'react-reveal/Bounce';

function HomeAndDecorCategoryProducts() {
  return (
    <div className="CategoryProducts">
      <Bounce left>
        <div className="horizontalLine">
          <HorizontalLine sectionTitle="Home & Decor" />
        </div>
      </Bounce>
      <div className="columns is-tablet is-gapless">
        <StaticQuery
          query={HomeAndDecorProduct}
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

export default HomeAndDecorCategoryProducts;

const HomeAndDecorProduct = graphql`
  {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "HomeAndDecor" } }
        productClass: { eq: "Supreme_Class" }
      }
      sort: { fields: publishedAt, order: DESC }
      limit: 5
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
