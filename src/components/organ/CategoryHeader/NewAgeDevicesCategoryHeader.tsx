import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function NewAgeDevicesCategoryHeader() {
  return (
    <div className="">
      <StaticQuery
        query={NewAgeDevicesCategory}
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

export default NewAgeDevicesCategoryHeader;

const NewAgeDevicesCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "NewAgeDevices" } }
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
