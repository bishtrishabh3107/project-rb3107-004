import React from 'react';
import Img from 'gatsby-image';
import '../assets/styles/index.scss';
import ReactMarkdown from 'react-markdown';

function ProductClassTemplate({
  productClass,
  name,
  description,
  fluid,
  alt,
  publishedAt,
  content,
  link1,
  link2,
  brand1,
  brand2,
  priceRange,
  node,
}) {
  return (
    <div className="productClass">
      <div className="productMain">
        <div className="productMedia">
          <h1 style={{ color: 'teal' }}>
            {productClass.toString().replace('_', ' ')}
          </h1>
          <Img
            fluid={fluid}
            style={{
              maxHeight: 'calc(70vh - 4rem)',
              maxWidth: 'calc(70vh - 4rem)',
            }}
            alt={alt}
          />
        </div>
        <div className="productAffiliate">
          {node.link1 && (
            <a href={`${link1}`} target="_blank" className="affiliateLink1">
              Buy From {brand1}
            </a>
          )}
          {node.link2 && (
            <a href={`${link2}`} target="_blank" className="affiliateLink2">
              Buy From {brand2}
            </a>
          )}
          <h2 className="priceRange">Price Range: {priceRange}</h2>
        </div>
      </div>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>
        <ReactMarkdown source={content} />
      </p>
      <h3>Published On: {publishedAt}</h3>
    </div>
  );
}

export default ProductClassTemplate;
