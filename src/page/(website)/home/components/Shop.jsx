import React from "react";

const ShopHome = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-[40px] font-medium border-b border-black mb-[57px] pb-5">
        Shop
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="p-4 basis-1/2 flex-grow">
          <img
            src="./img/shop.png"
            className="w-full h-[470px] object-cover"
            alt=""
          />
        </div>
        <div className="p-4 basis-1/2 flex-grow">
          <img
            src="./img/shop2.png"
            className="w-full h-[470px] object-cover"
            alt=""
          />
        </div>
        <div className="p-4 basis-1/2 flex-grow">
          <img
            src="./img/shop3.png"
            className="w-full h-[470px] object-cover"
            alt=""
          />
        </div>
        <div className="p-4 basis-1/2 flex-grow">
          <img
            src="./img/shop4.png"
            className="w-full h-[470px] object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ShopHome;
