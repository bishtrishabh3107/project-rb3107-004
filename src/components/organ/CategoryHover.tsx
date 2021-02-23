import React from 'react';
import { slugify } from '../../assets/utilityFunctions';
import { graphql, StaticQuery } from 'gatsby';
import '../../assets/styles/index.scss';

function CategoryHover({ name }) {
  const CategoriesHover = graphql`
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
          }
        }
      }
    }
  `;

  return (
    <div className="">
      <div className="block text-blue-600 font-semibold px-2 inline-flex items-center cursor-pointer hover:bg-red-400">
        {name}
      </div>
      <div className="w-48 flex flex-col bg-red-400 shadow-xl">
        <StaticQuery
          query={CategoriesHover}
          render={(data) => {
            return (
              <>
                {data.allStrapiProduct.edges.map(({ node }) => (
                  <div key={node.id}>
                    <a
                      className="block text-blue-600 bg-red-400 hover:bg-red-300 py-2 px-4"
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
  );
}

export default CategoryHover;
