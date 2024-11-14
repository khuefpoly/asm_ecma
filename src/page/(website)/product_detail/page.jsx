import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
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
            <div className="mt-8 border-t border-[#D9D9D9] text-[#a3a3a3] text-base pt-10">
              <p className="mt-3 text-base font-medium">SKU : SS001</p>
              <p className="mt-3 text-base font-medium">Category : Sofa</p>
              <p className="mt-3 text-base font-medium">
                Tags : Sofa, Chair, Home, Shop
              </p>
              <p className="mt-3 text-base font-medium">
                Share :
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
