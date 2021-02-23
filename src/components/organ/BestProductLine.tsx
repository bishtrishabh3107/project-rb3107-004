import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function BestProductLine({ productFamily, fixed }) {
  return (
    <div>
      <div className="">
        <Link to={`/products/${slugify(productFamily)}`}>
          <div className="flex flex-row my-1">
            <Img fixed={fixed} />
            <h4 className="mx-2 my-4 text-blue-600 hover:text-red-400">
              {productFamily}
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BestProductLine;
