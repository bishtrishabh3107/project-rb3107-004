import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function ElectronicsCategoryHeader() {
  return (
    <div className="">
      <StaticQuery
        query={ElectronicsCategory}
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

export default ElectronicsCategoryHeader;

const ElectronicsCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "Electronics" } }
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
