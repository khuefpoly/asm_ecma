import React from "react";
import { Link } from "react-router-dom"; // Nếu sử dụng React Router

const NewsHome = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-medium text-[40px] border-b border-[#000] mb-[57px] pb-5">
        New
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* item */}
        <div className=" bg-[#F4F5F7]">
          {/* box ảnh */}
          <div className="relative group h-80 overflow-hidden">
            <img
              src="./img/Images.svg"
              alt="Syltherine"
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
            />
            {/* sale */}
            <p className="absolute top-4 left-56 bg-[#E97171] text-white text-base font-medium px-1 py-3 rounded-full">
              -30%
            </p>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <Link to={`shop/cart`}>
                <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                  Add to cart
                </button>
              </Link>
              <div className="flex space-x-4 text-white">
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-share-nodes" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-arrow-right-arrow-left" />
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fas fa-heart" />
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
          {/* box infor */}
          <div className="mt-3 bg-[#F4F5F7] pt-4 pl-4 pb-8">
            <h3 className="font-semibold text-2xl mb-2">
              {/* Link cho tên sản phẩm */}
              <Link to="/shop/detail" className="hover:text-yellow-600">
                Syltherine
              </Link>
            </h3>
            <p className="text-gray-600 font-medium text-base mb-2">
              Stylish cafe chair
            </p>
            <div className="text-[#3a3a3a] font-semibold ">
              <span className="mr-3" />
              <span className="text-[#B0B0B0] font-normal line-through text-base">
                3,500,000đ
              </span>
            </div>
          </div>
        </div>
        {/* item */}
        <div className=" bg-[#F4F5F7]">
          {/* box ảnh */}
          <div className="relative group h-80 overflow-hidden">
            <img
              src="./img/Images.svg"
              alt="Leviosa"
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
            />
            {/* sale */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <Link to={`shop/cart`}>
                <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                  Add to cart
                </button>
              </Link>
              <div className="flex space-x-4 text-white">
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-share-nodes" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-arrow-right-arrow-left" />
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fas fa-heart" />
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
          {/* box infor */}
          <div className="mt-3 bg-[#F4F5F7] pt-4 pl-4 pb-8">
            <h3 className="font-semibold text-2xl mb-2">
              {/* Link cho tên sản phẩm */}
              <Link to="/shop/detail" className="hover:text-yellow-600">
                Leviosa
              </Link>
            </h3>
            <p className="text-gray-600 font-medium text-base mb-2">
              Stylish cafe chair
            </p>
            <div className="text-[#3a3a3a] font-semibold ">
              <span className="mr-3">2,500,000đ</span>
              <span className="text-[#B0B0B0] font-normal line-through text-base" />
            </div>
          </div>
        </div>
        {/* item */}
        <div className=" bg-[#F4F5F7]">
          {/* box ảnh */}
          <div className="relative group h-80 overflow-hidden">
            <img
              src="./img/Images.svg"
              alt="Lolito"
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
            />
            {/* sale */}
            <p className="absolute top-4 left-56 bg-[#E97171] text-white text-base font-medium px-1 py-3 rounded-full">
              -50%
            </p>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <Link to={`shop/cart`}>
                <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                  Add to cart
                </button>
              </Link>
              <div className="flex space-x-4 text-white">
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-share-nodes" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-arrow-right-arrow-left" />
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fas fa-heart" />
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
          {/* box infor */}
          <div className="mt-3 bg-[#F4F5F7] pt-4 pl-4 pb-8">
            <h3 className="font-semibold text-2xl mb-2">
              {/* Link cho tên sản phẩm */}
              <Link to="shop/detail" className="hover:text-yellow-600">
                Lolito
              </Link>
            </h3>
            <p className="text-gray-600 font-medium text-base mb-2">
              Luxury big sofa
            </p>
            <div className="text-[#3a3a3a] font-semibold ">
              <span className="mr-3" />
              <span className="text-[#B0B0B0] font-normal line-through text-base">
                14,000,000đ
              </span>
            </div>
          </div>
        </div>
        {/* item */}
        <div className=" bg-[#F4F5F7]">
          {/* box ảnh */}
          <div className="relative group h-80 overflow-hidden">
            <img
              src="./img/Images.svg"
              alt="Respira"
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
            />
            {/* sale */}
            <p className="absolute top-4 left-56 bg-[#2EC1AC] text-white text-base font-medium px-2 py-3 rounded-full">
              New
            </p>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
              <Link to={`shop/cart`}>
                <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                  Add to cart
                </button>
              </Link>
              <div className="flex space-x-4 text-white">
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-share-nodes" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fa-solid fa-arrow-right-arrow-left" />
                </button>
                <button className="flex items-center space-x-1">
                  <i className="fas fa-heart" />
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
          {/* box infor */}
          <div className="mt-3 bg-[#F4F5F7] pt-4 pl-4 pb-8">
            <h3 className="font-semibold text-2xl mb-2">
              {/* Link cho tên sản phẩm */}
              <Link to="/shop/detail" className="hover:text-yellow-600">
                Respira
              </Link>
            </h3>
            <p className="text-gray-600 font-medium text-base mb-2">
              Stylish cafe chair
            </p>
            <div className="text-[#3a3a3a] font-semibold ">
              <span className="mr-3">3,000,000đ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
