import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import '../../assets/styles/index.scss';
import { GiPumpkinLantern } from 'react-icons/gi';
import { ThemeContext } from '../Global/themeContext';
import DarkModeToggle from 'react-dark-mode-toggle';
import NewAgeDevicesCategoryHover from '../organ/CategoryHover/NewAgeDevicesCategoryHover';
import HomeAndDecorCategoryHover from '../organ/CategoryHover/HomeAndDecorCategoryHover';
import CampingCategoryHover from '../organ/CategoryHover/CampingCategoryHover';
import ElectronicsCategoryHover from '../organ/CategoryHover/ElectronicsCategoryHover';
import GiftsCategoryHover from '../organ/CategoryHover/GiftsCategoryHover';
import CampingCategoryHeader from '../organ/CategoryHeader/CampingCategoryHeader.tsx';
import NewAgeDevicesCategoryHeader from '../organ/CategoryHeader/NewAgeDevicesCategoryHeader';
import ElectronicsCategoryHeader from '../organ/CategoryHeader/ElectronicsCategoryHeader';
import HomeAndDecorCategoryHeader from '../organ/CategoryHeader/HomeAndDecorCategoryHeader';
import GiftsCategoryHeader from '../organ/CategoryHeader/GiftsCategoryHeader';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <div className="flex flex-col">
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ml-10 text-2xl flex flex-row text-center md:text-xl sm:text-lg">
          <a className="flex flex-row" href="/">
            <span className="my-3 icon text-green-500 md:my-2 sm:my-2">
              <GiPumpkinLantern />
            </span>
            <h1 className="mx-1 my-2 text-yellow-500 md:mr-1 sm:mr-1 md:ml-0 sm:ml-0">
              Goods{' '}
            </h1>
            <h1 className="mr-1 my-2 text-blue-500 md:mr-0 sm:mr-0">UMPIRE </h1>
            <span className="my-3 icon text-green-500 md:my-2 sm:my-2">
              <GiShoppingCart />
            </span>
          </a>
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ' '}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          {' '}
          <div className="navbar-end">
            <a
              className="navbar-item text-sm hover:text-red-400"
              href="/trending"
            >
              Trending
            </a>
            <a
              className="navbar-item text-sm hover:text-red-400"
              href="/sociallyacclaimed"
            >
              Socially Acclaimed
            </a>
            <a
              className="navbar-item text-sm hover:text-red-400"
              href="/articles"
            >
              Blogs
            </a>
            <a
              className="navbar-item text-sm hover:text-red-400"
              href="/products"
            >
              Products
            </a>
            <div className="my-5 text-center">
              <DarkModeToggle
                id="theme-toggle"
                checked={theme === 'light' ? true : false}
                onChange={handleThemeToggle}
                size={45}
              />
            </div>
            <div className="xl:invisible lg:invisible xl:w-0 lg:w-0 navbar-item has-dropdown is-hoverable -my-4">
              <a className="navbar-link">New Age Devices</a>
              <div className="navbar-dropdown">
                <div className="">
                  <NewAgeDevicesCategoryHeader />
                </div>
              </div>
            </div>
            <div className="xl:invisible lg:invisible xl:w-0 lg:w-0 navbar-item has-dropdown is-hoverable mt-4">
              <a className="navbar-link">Electronics</a>
              <div className="navbar-dropdown">
                <div className="">
                  <ElectronicsCategoryHeader />
                </div>
              </div>
            </div>
            <div className="xl:invisible lg:invisible xl:w-0 lg:w-0 navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Camping</a>
              <div className="navbar-dropdown">
                <div className="">
                  <CampingCategoryHeader />
                </div>
              </div>
            </div>
            <div className="xl:invisible lg:invisible xl:w-0 lg:w-0 navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Home & Decor</a>
              <div className="navbar-dropdown">
                <HomeAndDecorCategoryHeader />
              </div>
            </div>
            <div className="xl:invisible lg:invisible xl:w-0 lg:w-0 navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Gifts</a>
              <div className="navbar-dropdown">
                <GiftsCategoryHeader />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-row justify-evenly">
        <NewAgeDevicesCategoryHover />
        <ElectronicsCategoryHover />
        <CampingCategoryHover />
        <HomeAndDecorCategoryHover />
        <GiftsCategoryHover />
      </div>
    </div>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
