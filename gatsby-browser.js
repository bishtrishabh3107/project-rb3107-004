import './src/assets/styles/global.css';
import React from 'react';
import ThemeContextProvider from './src/components/Global/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
