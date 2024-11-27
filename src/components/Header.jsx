import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header" className="w-full sticky top-0 z-10 transition-all">
      <header className="max-w-[1400px] mx-auto p-3 transition-all duration-300">
        <div className="mx-auto my-4">
          <div className="grid grid-cols-3 gap-9 items-center">
            {/* Logo */}
            <div>
              <Link to="/">
                <img src="../logo.svg" alt="FurniroShop" className="h-10" />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav>
              <ul className="flex space-x-16 text-xl font-medium">
                <li>
                  <Link to="/" className="hover:text-yellow-600">
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/shop"
                    className="flex items-center hover:text-yellow-600"
                  >
                    <span>Shop</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-yellow-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Icons Section */}
            <div className="flex justify-end space-x-11 text-2xl relative">
              <div className="relative group">
                <Link to="#" className="text-gray-600 hover:text-yellow-600">
                <img src="./img/account.svg" alt="" />
                </Link>
                <div className="w-[150px] absolute hidden group-hover:block bg-white shadow-lg p-2 rounded-md text-left text-lg right-0">
                  <Link
                    to="#"
                    className="block px-4 py-1 hover:text-yellow-600"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-1 hover:text-yellow-600"
                  >
                    Đăng ký
                  </Link>
                </div>
              </div>
              <Link
                to="/search"
                className="text-gray-600 hover:text-yellow-600"
              >
                <img src="./img/search.svg" alt="" />
              </Link>
              <Link
                to="/favorites"
                className="text-gray-600 hover:text-yellow-600"
              >
                <img src="./img/heart.svg" alt="" />
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-yellow-600">
              <img src="./img/shopping.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
