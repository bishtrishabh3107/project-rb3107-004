import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function BabyCategoryHeader() {
  return (
    <div className="">
      <StaticQuery
        query={BabyCategory}
        render={(data) => {
          return (
            <>
              {data.allStrapiProduct.edges.map(({ node }) => (
                <div key={node.id}>
                  <a
                    className="text-blue-500 hover:text-red-400"
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

export default BabyCategoryHeader;

const BabyCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "Baby" } }
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
