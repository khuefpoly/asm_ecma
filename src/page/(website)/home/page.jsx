import React from "react";
import Support from "../../../components/Support";
import NewsHome from "./components/News";
import ShopHome from "./components/Shop";
import Blog from "./components/Blog";
import Banner from "../../../components/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner/>
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
