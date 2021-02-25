import './src/assets/styles/global.scss';
import './src/assets/styles/index.scss';

import React from 'react';
import ThemeContextProvider from './src/components/Global/themeContext';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
