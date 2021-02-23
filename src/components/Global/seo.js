import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { defaultSeo, siteName, favicon } = strapiGlobal;

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          name: 'title',
          content: fullSeo.metaTitle,
        }
        // {
        //   property: 'og:title',
        //   content: fullSeo.metaTitle,
        // },
        // {
        //   name: 'twitter:title',
        //   content: fullSeo.metaTitle,
        // }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: 'description',
          content: fullSeo.metaDescription,
        }
        // {
        //   property: 'og:description',
        //   content: fullSeo.metaDescription,
        // },
        // {
        //   name: 'twitter:description',
        //   content: fullSeo.metaDescription,
        // }
      );
    }
    if (fullSeo.keyword1) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword1,
      });
    }
    if (fullSeo.keyword2) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword2,
      });
    }
    if (fullSeo.keyword3) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword3,
      });
    }
    if (fullSeo.keyword4) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword4,
      });
    }
    if (fullSeo.keyword5) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword5,
      });
    }
    if (fullSeo.keyword6) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword6,
      });
    }
    if (fullSeo.keyword7) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword7,
      });
    }
    if (fullSeo.keyword8) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword8,
      });
    }
    if (fullSeo.keyword9) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword9,
      });
    }
    if (fullSeo.keyword10) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword10,
      });
    }
    if (fullSeo.keyword11) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword11,
      });
    }
    if (fullSeo.keyword12) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword12,
      });
    }
    if (fullSeo.keyword13) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword13,
      });
    }
    if (fullSeo.keyword14) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword14,
      });
    }
    if (fullSeo.keyword15) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword15,
      });
    }
    if (fullSeo.keyword16) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword16,
      });
    }
    if (fullSeo.keyword17) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword17,
      });
    }
    if (fullSeo.keyword18) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword18,
      });
    }
    if (fullSeo.keyword19) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword19,
      });
    }
    if (fullSeo.keyword20) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword20,
      });
    }
    if (fullSeo.keyword21) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword21,
      });
    }
    if (fullSeo.keyword22) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword22,
      });
    }
    if (fullSeo.keyword23) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword23,
      });
    }
    if (fullSeo.keyword24) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword24,
      });
    }
    if (fullSeo.keyword25) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword25,
      });
    }
    if (fullSeo.keyword26) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword26,
      });
    }
    if (fullSeo.keyword27) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword27,
      });
    }
    if (fullSeo.keyword28) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword28,
      });
    }
    if (fullSeo.keyword29) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword29,
      });
    }
    if (fullSeo.keyword30) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword30,
      });
    }
    if (fullSeo.keyword31) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword31,
      });
    }
    if (fullSeo.keyword32) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword32,
      });
    }
    if (fullSeo.keyword33) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword33,
      });
    }
    if (fullSeo.keyword34) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword34,
      });
    }
    if (fullSeo.keyword35) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword35,
      });
    }
    if (fullSeo.keyword36) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword36,
      });
    }
    if (fullSeo.keyword37) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword37,
      });
    }
    if (fullSeo.keyword38) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword38,
      });
    }
    if (fullSeo.keyword39) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword39,
      });
    }
    if (fullSeo.keyword40) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword40,
      });
    }
    if (fullSeo.keyword41) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword41,
      });
    }
    if (fullSeo.keyword42) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword42,
      });
    }
    if (fullSeo.keyword43) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword43,
      });
    }
    if (fullSeo.keyword44) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword44,
      });
    }
    if (fullSeo.keyword45) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword45,
      });
    }
    if (fullSeo.keyword46) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword46,
      });
    }
    if (fullSeo.keyword47) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword47,
      });
    }
    if (fullSeo.keyword48) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword48,
      });
    }
    if (fullSeo.keyword49) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword49,
      });
    }
    if (fullSeo.keyword50) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword50,
      });
    }
    if (fullSeo.keyword51) {
      tags.push({
        name: 'keyword',
        content: fullSeo.keyword51,
      });
    }
    if (fullSeo.shareImage) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || 'http://localhost:8000') +
        fullSeo.shareImage.publicURL;
      tags.push(
        {
          name: 'image',
          content: imageUrl,
        }
        // {
        //   property: 'og:image',
        //   content: imageUrl,
        // },
        // {
        //   name: 'twitter:image',
        //   content: imageUrl,
        // }
      );
    }
    if (fullSeo.product) {
      tags.push({
        property: 'og:type',
        content: 'product',
      });
    }
    tags.push({ name: 'twitter:card', content: 'summary_large_image' });
    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      titleTemplate={`%s |${siteName}`}
      link={[
        {
          rel: 'icon',
          href: favicon.publicURL,
        },
        { rel: 'canonical', href: 'https://www.goodsumpire.com/' },
      ]}
      meta={metaTags}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword1: PropTypes.string,
  keyword2: PropTypes.string,
  keyword3: PropTypes.string,
  keyword4: PropTypes.string,
  keyword5: PropTypes.string,
  keyword6: PropTypes.string,
  keyword7: PropTypes.string,
  keyword8: PropTypes.string,
  keyword9: PropTypes.string,
  keyword10: PropTypes.string,
  keyword11: PropTypes.string,
  keyword12: PropTypes.string,
  keyword13: PropTypes.string,
  keyword14: PropTypes.string,
  keyword15: PropTypes.string,
  keyword16: PropTypes.string,
  keyword17: PropTypes.string,
  keyword18: PropTypes.string,
  keyword19: PropTypes.string,
  keyword21: PropTypes.string,
  keyword22: PropTypes.string,
  keyword23: PropTypes.string,
  keyword24: PropTypes.string,
  keyword25: PropTypes.string,
  keyword26: PropTypes.string,
  keyword27: PropTypes.string,
  keyword28: PropTypes.string,
  keyword29: PropTypes.string,
  keyword30: PropTypes.string,
  keyword31: PropTypes.string,
  keyword32: PropTypes.string,
  keyword33: PropTypes.string,
  keyword34: PropTypes.string,
  keyword35: PropTypes.string,
  keyword36: PropTypes.string,
  keyword37: PropTypes.string,
  keyword38: PropTypes.string,
  keyword39: PropTypes.string,
  keyword40: PropTypes.string,
  keyword41: PropTypes.string,
  keyword42: PropTypes.string,
  keyword43: PropTypes.string,
  keyword44: PropTypes.string,
  keyword45: PropTypes.string,
  keyword46: PropTypes.string,
  keyword47: PropTypes.string,
  keyword48: PropTypes.string,
  keyword49: PropTypes.string,
  keyword50: PropTypes.string,
  image: PropTypes.string,
  product: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  product: false,
};

const query = graphql`
  query {
    strapiGlobal {
      siteName
      favicon {
        publicURL
      }
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          publicURL
        }
      }
    }
  }
`;
