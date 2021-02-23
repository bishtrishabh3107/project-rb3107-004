import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function ElectronicsCategoryHover() {
  return (
    <div className="mt-12">
      <div className="group inline-block relative w-40 md:my-4 flex flex-col justify-evenly md:invisible sm:invisible md:h-0 sm:h-0">
        <h2 className="cursor-pointer underline hover:bg-red-400 h-8">
          Electronics
        </h2>
        <div className="absolute hidden group-hover:block mt-44 ml-2 z-10">
          <StaticQuery
            query={ElectronicsCategory}
            render={(data) => {
              return (
                <>
                  {data.allStrapiProduct.edges.map(({ node }) => (
                    <div key={node.id}>
                      <a
                        className="block text-blue-600 bg-red-400 hover:bg-red-300 px-2 py-1 block whitespace-no-wrap text-xs"
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
      </div>
    </div>
  );
}

export default ElectronicsCategoryHover;

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
