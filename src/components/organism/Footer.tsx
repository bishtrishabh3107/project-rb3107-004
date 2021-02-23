import React from 'react';
// import { Link } from 'gatsby';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import '../../assets/styles/index.scss';
import { GiPumpkinLantern } from 'react-icons/gi';

function Footer() {
  return (
    <footer className="footer bg-white light:bg-black dark:bg-white relative pt-1 border-b-2 border-blue-700">
      <div className="px-6">
        <div className="flex justify-center text-center text-3xl my-8 flex flex-row text-center md:text-xl sm:text-lg">
          <a className="flex flex-row" href="/">
            <span className="icon text-green-500">
              <GiPumpkinLantern />
            </span>
            <h1 className="mx-1 -my-1 text-yellow-500">Goods </h1>
            <h1 className="mr-1 -my-1 text-blue-500">UMPIRE </h1>
            <span className=" icon text-green-500">
              <GiShoppingCart />
            </span>
          </a>
        </div>
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 justify-between sm:mt-0 sm:w-full sm:px-8 flex flex-row md:flex-row sm:flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-700 uppercase mb-2 md:text-2xl sm:text-xl">
                Namaste Bhaiyon !
              </span>
              <span className="my-2">
                <a
                  href="/"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Home
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/products"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Products
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/articles"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Blogs
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Popular Pages
              </span>
              <span className="my-2">
                <a
                  href="/trending"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  Trending
                </a>
              </span>
              <span className="my-2">
                <a
                  href="/sociallyacclaimed"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Socially Acclaimed
                </a>
              </span>
            </div>
            <div className="flex flex-col content-center items-center">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Social Media
              </span>
              <span className="my-2">
                <a
                  href="https://facebook.com"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  <FaFacebook className="facebook-icon" size="2em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://twitter.com"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  <FaTwitter className="twitter-icon" size="2em" />
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://instagram.com"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  <FaInstagram className="instagram-icon" size="2em" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">
              © 2021 by Coding Pahalwan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
