import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Global/Layout';
import ProductClassTemplate from './ProductClassTemplate';
import SideScreen from '../components/organism/SideScreen';

export const query = graphql`
  query($productFamily: String!) {
    allStrapiProduct(
      filter: { productFamily: { in: [$productFamily] } }
      sort: { fields: productClass, order: ASC }
    ) {
      edges {
        node {
          id
          name
          publishedAt(formatString: "DD-MM-YYYY")
          description
          content
          productClass
          productFamily
          link1
          link2
          brand1
          brand2
          priceRange
          alt
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    strapiProduct(
      productClass: { eq: "Supreme_Class" }
      productFamily: { in: [$productFamily] }
    ) {
      productFamily
      description
      keywords
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const product = data.strapiProduct;
  var str = product.keywords;
  var temp = new Array();
  temp = str.split(',');
  const seo = {
    metaTitle: product.productFamily,
    metaDescription: product.description,
    keyword1: temp[0],
    keyword2: temp[1],
    keyword3: temp[2],
    keyword4: temp[3],
    keyword5: temp[4],
    keyword6: temp[5],
    keyword7: temp[6],
    keyword8: temp[7],
    keyword9: temp[8],
    keyword10: temp[9],
    keyword11: temp[10],
    keyword12: temp[11],
    keyword13: temp[12],
    keyword14: temp[13],
    keyword15: temp[14],
    shareImage: product.image,
    product: true,
  };

  return (
    <Layout seo={seo}>
      <div className="columns">
        <div className="column is-two-thirds" style={{ marginRight: '1.5rem' }}>
          <h1 style={{ marginBottom: '.5rem' }}>{product.productFamily}</h1>
          {data.allStrapiProduct.edges.map(({ node }) => (
            <ProductClassTemplate
              key={node.id}
              productClass={node.productClass}
              name={node.name}
              description={node.description}
              fluid={node.image.childImageSharp.fluid}
              publishedAt={node.publishedAt}
              content={node.content}
              link1={node.link1}
              link2={node.link2}
              brand1={node.brand1}
              brand2={node.brand2}
              node={node}
              priceRange={node.priceRange}
              alt={node.alt}
            />
          ))}
        </div>
        <div className="column is-one-thirds">
          <SideScreen />
        </div>
      </div>
    </Layout>
  );
};

export default ProductTemplate;
