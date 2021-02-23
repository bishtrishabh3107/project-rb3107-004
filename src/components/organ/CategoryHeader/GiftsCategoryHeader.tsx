import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function GiftsCategoryHeader() {
  return (
    <div className="">
      <StaticQuery
        query={GiftsCategory}
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

export default GiftsCategoryHeader;

const GiftsCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "Gifts" } }
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
