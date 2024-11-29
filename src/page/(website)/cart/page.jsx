import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="w-[1280px] mx-auto flex mt-12 mb-16">
      {/* phần 1 */}
      <div className="w-[817px]">
        <table className="w-full text-[#262626] text-base font-medium font-poppins table-auto">
          <thead className="bg-[#F9F1E7] text-left">
            <tr>
              <th className="py-4 pl-24">Product</th>
              <th className="py-4">Price</th>
              <th className="py-4">Quantity</th>
              <th className="py-4">Subtotal</th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody className="text-base font-medium  text-[#A3A3A3]">
            <tr>
              <td className="py-[55px] flex  items-center space-x-4">
                <img
                  src="/img/sofa3.png"
                  alt="Sofa"
                  className="w-[80px] h-[80px] rounded-md bg-[#F9F1E7]"
                />
                <span>Asgaard Sofa</span>
              </td>
              <td className="text-left">25.000.000đ</td>
              <td>
                <input
                  className="border border-[#e5e5e5] rounded-[5px] text-center w-8 h-8"
                  type="text"
                  defaultValue={1}
                />
              </td>
              <td className="text-left">25.000.000đ</td>
              <td>
                <AiFillDelete className="text-2xl text-[#B88E2F] cursor-pointer hover:text-[#e0ae3a]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* phần 2 */}
      <div className="w-[393px] h-[390px] px-16 pt-4 ml-[30px] bg-[#F9F1E7] shadow text-center">
        <h3 className="text-[32px] font-semibold">Cart Total</h3>
        <div className="pt-[61px] mt-4 text-base space-y-8 font-medium text-black">
          <div className="flex justify-between">
            <h4>Subtotal</h4>
            <span className="font-normal text-[#9F9F9F]">25.000.000đ</span>
          </div>
          <div className="flex justify-between">
            <h4>Total</h4>
            <span className="text-[#B88E2F] font-medium text-xl">
              25.000.000đ
            </span>
          </div>
        </div>
        <Link to="checkout">
          <button className="w-full mt-8 border border-black rounded-[15px] py-[15px]  text-[#000] px-[58px] text-xl font-semibold hover:bg-[#000] hover:text-white">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
