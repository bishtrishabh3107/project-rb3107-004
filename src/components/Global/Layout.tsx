import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Seo from './seo';
import Header from '../organism/Header';
import Footer from '../organism/Footer';
import { ThemeContext } from './themeContext';

const Layout = ({ children, seo }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  // const handleThemeToggle = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };
  return (
    <StaticQuery
      query={graphql`
        query {
          strapiGlobal {
            defaultSeo {
              metaTitle
              metaDescription
              shareImage {
                publicURL
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          className={`${
            theme === 'light' ? 'theme-light' : 'theme-dark'
          } bg-primary text-main-text text-center transition-all duration-300 py-5 min-h-screen`}
        >
          <Seo seo={seo} />
          <Header />
          <main className="m-2">{children}</main>
          <Footer />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
