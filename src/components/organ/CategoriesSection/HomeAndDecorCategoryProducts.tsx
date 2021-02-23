import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import '../../../assets/styles/index.scss';
import HorizontalLine from '../HorizontalLine';
import CategoryProducts from '../CategoryProducts';
import Bounce from 'react-reveal/Bounce';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default class HomeAndDecorCategoryProducts extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <div className="mt-16 mx-10 mb-10">
        <Bounce left>
          <div className="horizontalLine">
            <HorizontalLine sectionTitle="Home & Decor" />
          </div>
        </Bounce>
        <StaticQuery
          query={HomeAndDecorProduct}
          render={(data) => (
            <Slider {...sliderSettings}>
              {data.allStrapiProduct.edges.map(({ node }) => (
                <div key={node.id}>
                  <CategoryProducts
                    fixed={node.image.childImageSharp.fixed}
                    productFamily={node.productFamily}
                    key={node.id}
                    description={node.description}
                  />
                </div>
              ))}
            </Slider>
          )}
        />
      </div>
    );
  }
}

const HomeAndDecorProduct = graphql`
  {
    allStrapiProduct(
      filter: {
        category: { name: { eq: "HomeAndDecor" } }
        productClass: { eq: "Supreme_Class" }
      }
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
          description
          slug
          publishedAt(formatString: "DD MM YYYY")
          productFamily
          image {
            childImageSharp {
              fixed(width: 200, height: 180) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
