import React from "react";
import Support from "../../../components/Support";
import NewsHome from "./components/News";
import ShopHome from "./components/Shop";
import Blog from "./components/Blog";

const HomePage = () => {
  return (
    <div>
      <div className="banner">
        <img src="./img/banner.svg" alt="" />
      </div>
      <main className="w-[1280px] mx-auto mt-11">
        <NewsHome />
        <ShopHome />
        <Blog />
      </main>
      <Support />
    </div>
  );
};

export default HomePage;
