import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function PetsCategoryHover() {
  return (
    <div className="mt-12">
      <div className="group inline-block relative w-40 md:my-4 flex flex-col justify-evenly md:invisible sm:invisible md:h-0 sm:h-0">
        <h2 className="cursor-pointer underline hover:bg-gray-400 h-8">Pets</h2>
        <div className="absolute hidden mt-28 group-hover:block z-10">
          <StaticQuery
            query={PetsCategory}
            render={(data) => {
              return (
                <>
                  {data.allStrapiProduct.edges.map(({ node }) => (
                    <div key={node.id}>
                      <a
                        className="block font-semibold text-blue-600 bg-gray-400 hover:bg-gray-300 px-2 py-1 block whitespace-no-wrap text-xs"
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

export default PetsCategoryHover;

const PetsCategory = graphql`
  query {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "Pet" } }
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
