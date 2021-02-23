import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function CategoryProducts({ fixed, productFamily, description }) {
  return (
    <div className="mx-4">
      <Link to={`/products/${slugify(productFamily)}`}>
        <div className="">
          <Img fixed={fixed} />
        </div>

        <h1 className="text-base text-blue-600 hover:text-red-400">
          {productFamily}
        </h1>
      </Link>
      <p className="category-product-p text-xs">{description}</p>
    </div>
  );
}

export default CategoryProducts;
