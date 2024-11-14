import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <h2 className="text-[40px] font-medium border-b border-black mb-[57px] pb-5">
        Blog
      </h2>
      <div className="space-y-16">
        {/* item */}
        <div className="flex">
          <img src="./img/blog1.png" alt="" />
          <div className=" ml-9 mt-14 w-full font-semibold text-xl">
            <h3>THE ULTIMATE SOFA BUYING GUIDE</h3>
            <p></p>
            <div className="flex justify-end border-b border-black pb-4 mt-32">
              <FaArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex">
          <img src="./img/blog2.png" alt="" />
          <div className=" ml-9 mt-14 w-full font-semibold text-xl">
            <h3>A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
            <p className="font-medium text-base text-[#898989] mt-3">
              Your level of comfort when getting into and out of bed can be
              <span className="inline-block w-full">
                greatly influenced by the bed frame you choose. It may
              </span>
              <span className="inline-block w-full">
                significantly affect how you want your bedroom to feel and look.
              </span>
            </p>

            <div className="flex justify-end border-b border-black pb-4 mt-32">
              <span className="font-light mr-5">ABOUT</span>
              <FaArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex">
          <img src="./img/blog3.png" alt="" />
          <div className=" ml-9 mt-14 w-full font-semibold text-xl">
            <h3>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</h3>
            <p className="font-medium text-base text-[#898989] mt-3">
              People do a lot of research to make sure they purchase the ideal
              <span className="inline-block w-full">
                televisoin. And like the rest of us, you want to keep that
                gorgeous
              </span>
              <span className="inline-block w-full">
                flat srceen in your living or bedroom on a table or stand
              </span>
            </p>
            <div className="flex justify-end border-b border-black pb-4 mt-32">
              <span className="font-light mr-5">ABOUT</span>
              <FaArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
