import React from 'react';
import { slugify } from '../../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';

function NewAgeDevicesCategoryHover() {
  return (
    <div className="mt-12">
      <div className="group inline-block relative w-36 md:my-4 flex flex-col justify-evenly md:invisible sm:invisible md:h-0 sm:h-0">
        <h2 className="cursor-pointer underline hover:bg-red-400 h-8">
          New Age Devices
        </h2>
        <div className="absolute hidden group-hover:block ml-2.5 mt-32 z-10">
          <StaticQuery
            query={NewAgeDevicesCategory}
            render={(data) => {
              return (
                <>
                  {data.allStrapiProduct.edges.map(({ node }) => (
                    <div key={node.id}>
                      <a
                        className="block font-semibold text-blue-600 bg-red-400 hover:bg-red-300 px-2 py-1 block whitespace-no-wrap text-xs"
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

export default NewAgeDevicesCategoryHover;

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
