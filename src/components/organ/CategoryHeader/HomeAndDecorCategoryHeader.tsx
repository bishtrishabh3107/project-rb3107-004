import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function HomeAndDecorCategoryHeader() {
  return (
    <div className="">
      <StaticQuery
        query={HomeAndDecorCategory}
        render={(data) => {
          return (
            <>
              {data.allStrapiProduct.edges.map(({ node }) => (
                <div key={node.id}>
                  <a
                    className=""
                    href={`/products/${slugify(node.productFamily)}`}
                  >
                    {node.productFamily}
                  </a>
                </div>
              ))}
            </>
          );
        }}
      />
    </div>
  );
}

export default HomeAndDecorCategoryHeader;

const HomeAndDecorCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "HomeAndDecor" } }
        productClass: { eq: "Supreme_Class" }
      }
    ) {
      edges {
        node {
          productFamily
          id
        }
      }
    }
  }
`;
