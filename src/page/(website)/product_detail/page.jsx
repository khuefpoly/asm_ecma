import React, { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaStar,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Kiểm tra để chỉ cho phép nhập số (hoặc chuỗi rỗng)
    if (newValue === "" || /^[0-9]*$/.test(newValue)) {
      setValue(newValue);
    }
  };
  return (
    <div>
      <div className="w-full bg-[#F9F1E7] py-9">
        <div className="flex space-x-6 max-w-[1280px] mx-auto text-base text-[#9F9F9F]">
          <div className="flex space-x-2 items-center">
            <Link to="#">Home</Link>
            <IoIosArrowForward className="w-5 h-5 text-black" />
          </div>
          <div className="flex space-x-2 items-center">
            <Link to="#">Shop</Link>
            <IoIosArrowForward className="w-5 h-5 text-black" />
          </div>
          <div className="flex space-x-2 items-center border-l-2 pl-8 py-1 border-[#9F9F9F]">
            <Link to="#" className="text-black">
              Asgaard sofa
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[1280px] mx-auto font-poppins mb-3 ">
        <section className=" flex w-full my-16">
          {/* box ảnh */}
          <div className="flex w-full">
            {/* ảnh bé */}
            <div className="w-[76px] h-[416px]">
              <img className="mb-8" src="../img/sofa3_1.png" alt="" />
              <img className="mb-8" src="../img/sofa3_1.png" alt="" />
              <img className="mb-8" src="../img/sofa3_1.png" alt="" />
              <img className="mb-8" src="../img/sofa3_1.png" alt="" />
            </div>
            {/* ảnh to */}
            <div className="px-8">
              <div className="w-[423px] h-[500px] bg-[#F9F1E7] flex justify-center items-center mx-auto rounded-10px">
                <img
                  className="w-[480px] h-[390px] object-contain"
                  src="../img/sofa3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* box infor */}
          <div className="w-full ml-33px">
            {/* name */}
            <h3 className="text-42px mb-2 font-medium">Asgaard sofa</h3>
            {/* price */}
            <p className="text-6 font-medium text-[#9F9F9F] mb-2">
              25.000.000đ
            </p>
            {/* rating */}
            <div className="flex items-center text-[#9F9F9F ">
              <div className="flex py-5px pr-4 text-[#FFC700] border-[#A3A3A3] border-r-2 ">
                <FaStar className="w-5" />
                <FaStar className="w-5" />
                <FaStar className="w-5" />
                <FaStar className="w-5" />
                <i className="fa-solid fa-star-half w-5"></i>
              </div>
              <span className="text-[#9F9F9F] pl-4">5 Customer Review</span>
            </div>
            {/* description */}
            <p className="mt-4 text-base font-medium">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="mt-4 text-[#A3A3A3] ">
              <div className="mb-1">Size</div>
              <ul className="flex space-x-3 ">
                <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] bg-[#CA8A04] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                  L
                </li>
                <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                  XL
                </li>
                <li className="bg-[#A3A3A3] py-5px px-3 rounded-5px text-[white] hover:bg-[#CA8A04] cursor-pointer active:bg-[#CA8A04]">
                  XS
                </li>
              </ul>
            </div>
            {/* color */}
            <div className="mt-4 text-[#A3A3A3] ">
              <div className="mb-1">Color</div>
              <ul className="flex space-x-4 ">
                <li className="bg-[#816DFA] rounded-full p-4"></li>
                <li className="bg-[#000] rounded-full p-4 "></li>
                <li className="bg-[#B88E2F] rounded-full p-4"></li>
              </ul>
            </div>
            {/* add to cart */}
            <div className="flex space-x-3 mt-8 mb-60px">
              {/* tăng giảm số lượng */}
              <div className="flex items-center border border-[#A3A3A3] px-4 text-base font-medium rounded-5px py-10px">
                <div className="mr-9">
                  <button>-</button>
                </div>
                <div className="mr-9">
                  <input
                    type="text" // Có thể là "text" hoặc "number"
                    value={value} // Gán giá trị từ state
                    className="w-10 text-center outline-none"
                    onChange={handleChange} // Cập nhật state khi người dùng nhập
                  />
                </div>
                <div>
                  <button>+</button>
                </div>
              </div>

              {/* button */}
              <Link to="/shop/cart">
                <button className="border text-[#CA8A04] border-[#CA8A04] px-60px text-base font-medium rounded-5px py-10px hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                  Add to cart
                </button>
              </Link>
              <button className="border border-[#A3A3A3] px-60px text-base font-medium rounded-5px py-10px">
                + Compare
              </button>
            </div>
            {/* thông tin */}
            <div className="mt-8 border-t border-gray-300 text-gray-500 text-base pt-10">
              <div className="">
                <div className="space-y-4">
                  <div className="flex items-center text-base font-medium gap-x-2">
                    <span className="w-1/4">SKU</span>
                    <span>: SS001</span>
                  </div>
                  <div className="flex items-center text-base font-medium gap-x-2">
                    <span className="w-1/4">Category</span>
                    <span>: Sofa</span>
                  </div>
                  <div className="flex items-center text-base font-medium gap-x-2">
                    <span className="w-1/4">Tags</span>
                    <span>: Sofa, Chair, Home, Shop</span>
                  </div>
                  <div className="flex items-center text-base font-medium gap-x-2">
                    <span className="w-1/4">Share</span>
                    <div className="flex items-center space-x-3 text-xl text-black">
                      <span>:</span>
                      <FaFacebook className="hover:text-blue-600 transition-colors" />
                      <FaLinkedin className="hover:text-blue-500 transition-colors" />
                      <FaTwitterSquare className="hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Mô tả sản phẩm */}
        <section className="mb-16">
          <div className="flex space-x-16 border-b border-[#A3A3A3] pb-4 mb-8 text-xl font-semibold text-[#A3A3A3] justify-center">
            <h3 className="text-[#000]">Description</h3>
            <h3>Additional Information</h3>
            <h3>Reviews [5]</h3>
          </div>
          <div className="px-24 text-base font-medium text-[#A3A3A3] mb-8">
            <p className="mb-2">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="flex justify-between space-x-8">
            <img className="w-full" src="../img/detail.png" alt="" />
            <img className="w-full" src="../img/detail.png" alt="" />
          </div>
        </section>
        {/* sản phẩm liên quan */}
        <section className="max-w-7xl mx-auto p-4">
          <h2 className="text-medium text-4xl text-center mb-26px pb-5">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* item */}
            <div className=" bg-[#F4F5F7]">
              {/* box ảnh */}
              <div className="relative group h-80 overflow-hidden">
                <img
                  src="../img/lq1.png"
                  alt="Syltherine"
                  className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
                />
                {/* sale */}
                <p className="absolute top-4 left-56 bg-[#E97171] text-white text-base font-medium px-1 py-3 rounded-full">
                  -30%
                </p>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                  <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                    Add to cart
                  </button>
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
                  <span className="mr-3">2.500.000đ</span>
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
                  src="../img/lq2.png"
                  alt="Leviosa"
                  className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
                />
                {/* sale */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                  <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                    Add to cart
                  </button>
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
                  src="../img/lq3.png"
                  alt="Lolito"
                  className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
                />
                {/* sale */}
                <p className="absolute top-4 left-56 bg-[#E97171] text-white text-base font-medium px-1 py-3 rounded-full">
                  -50%
                </p>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                  <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                    Add to cart
                  </button>
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
                  <span className="mr-3">7.000.000đ</span>
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
                  src="../img/lq4.png"
                  alt="Respira"
                  className="w-full h-full object-cover transition duration-300 group-hover:opacity-70"
                />
                {/* sale */}
                <p className="absolute top-4 left-56 bg-[#2EC1AC] text-white text-base font-medium px-2 py-3 rounded-full">
                  New
                </p>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                  <button className="bg-white text-yellow-600 font-semibold py-3 px-11 mb-2">
                    Add to cart
                  </button>
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
                  <span className="mr-3">5,000,000đ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-11">
            <button className="border-[#B88E2F] border py-3 px-78px text-[#B88E2F] text-base font-semibold hover:text-white hover:bg-[#B88E2F] hover: opacity-80 ">
              Show More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
