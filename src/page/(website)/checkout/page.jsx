import React from "react";

const CheckoutPage = () => {
  return (
    <div className="w-[1280px] mx-auto  mt-16">
      <h3 className="text-40px font-semibold px-[79px]">Billing details</h3>
      <div className=" flex mt-8 mb-16">
        {/* box 1 */}
        <div className="w-1/2 grid grid-cols-1 gap-3 px-[79px]">
          <div className="flex space-x-8 my-9">
            <div className="">
              <label htmlFor=""> First Name</label>
              <input
                className="p-2 rounded-[10px] mt-5 w-full h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                className="p-2 rounded-[10px] mt-5 w-full h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Company Name (Optional)</label>
            <input
              className="p-2 mt-5 w-[473px] rounded-[15px] h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Country / Region</label>
            <select className="p-2 mt-5 w-full h-[75px] rounded-[10px] cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3]  border outline-none">
              <option value="" disabled selected>
                Select a country
              </option>
              <option value="LK" selected>
                Sri Lanka
              </option>
              <option value="VN">Viet Nam</option>
              <option value="AD">An Do</option>
              <option value="HCM">TP Ho Chi Minh</option>
            </select>
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Street address</label>
            <input
              className="p-2 mt-5 rounded-[10px] w-full h-[75px] bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2  mb-9">
            <label htmlFor="">Town / City</label>
            <input
              className="p-2 mt-5 rounded-[10px] h-[75px] w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Province</label>
            <select className="p-2 mt-5 rounded-[10px] h-[75px] w-full cursor-pointer text-[#A3A3A3] bg-[#FFFFFF] border-[#A3A3A3]  border outline-none">
              <option value="" disabled selected>
                Select a province
              </option>
              <option value="" selected>
                Western Province
              </option>
            </select>
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">ZIP code</label>
            <input
              className="p-2 mt-5 rounded-[10px] h-[75px] w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Phone</label>
            <input
              className="p-2 mt-5 rounded-[10px] h-[75px] w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2 mb-9">
            <label htmlFor="">Email address</label>
            <input
              className="p-2 mt-5 rounded-[10px] h-[75px] w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none"
              type="text"
            />
          </div>
          <div className="col-span-2 mb-9">
            <input
              className=" mt-5 rounded-[10px] h-[75px] w-full bg-[#FFFFFF] border-[#A3A3A3] border outline-none pl-[29px] "
              placeholder="Additional information"
              type="text"
            />
          </div>
        </div>
        {/* box 2 */}
        <div className="w-1/2 px-[38px]">
          {/* box top */}
          <div className=" grid  grid-cols-2 mb-8 text-base">
            <div>
              <h2 className="text-2xl font-medium mb-4">Product</h2>
              <div className="space-x-3 mb-4">
                <span className="text-[#A3A3A3] font-normal">Asgaard sofa</span>
                <span>X1</span>
              </div>
              <p className="mb-4">Subtotal</p>
              <p>Total</p>
            </div>
            <div className="text-end">
              <h2 className="text-2xl font-medium mb-4">Subtotal</h2>
              <p className="mb-4 font-light">25.000.000đ</p>
              <p className="mb-4 font-light">25.000.000đ</p>
              <p className="text-[#B88E2F] text-2xl font-bold">25.000.000đ</p>
            </div>
            {/* Middle */}
          </div>
          {/* box end */}
          <div className="border-t border-[#D9D9D9] flex flex-col items-center">
            <div>
              <h3 className="mt-8 font-medium text-base flex items-center">
                <p className="bg-black rounded-full p-2 mr-2"></p>
                Direct Bank Transfer
              </h3>
              <p className="mt-3 text-[#a3a3a3] text-base">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <ul className="mt-4 text-[#a3a3a3]">
              <li className="flex items-center">
                  <input
                    className="appearance-none w-4 h-4 bg-white border border-[#9F9F9F] rounded-full checked:bg-black checked:border-none focus:outline-none cursor-pointer"
                    type="checkbox"
                  />
                  <label
                    className="ml-2 text-base font-medium text-[#9F9F9F]"
                    htmlFor=""
                  >
                    Direct Bank Transfer
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    className="appearance-none w-4 h-4 bg-white border border-[#9F9F9F] rounded-full checked:bg-black checked:border-none focus:outline-none cursor-pointer"
                    type="checkbox"
                  />
                  <label
                    className="ml-2 text-base font-medium text-[#9F9F9F]"
                    htmlFor=""
                  >
                    Cash On Delivery
                  </label>
                </li>
              </ul>
              <p className="my-8 text-[#000] space-x-4 text-base font-light tracking-[0.060em]">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our {" "}
                <span className="font-semibold">privacy policy.</span>
              </p>
            </div>
            <button className=" border border-[#000] rounded-[15px] w-[320px] h-16 text-[#000] px-[102px] mt-[39px] hover:bg-[#000] hover:text-white opacity-70 text-xl">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
