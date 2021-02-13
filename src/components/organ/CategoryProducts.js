import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import '../../assets/styles/index.scss';
import { slugify } from '../../assets/utilityFunctions';

function CategoryProducts({ fixed, productFamily }) {
  return (
    <div className="categoryProducts">
      <Link to={`/products/${slugify(productFamily)}`}>
        <Img fixed={fixed} />
      </Link>
    </div>
  );
}

export default CategoryProducts;
