import React from "react";
import DealDaily from "../../components/DealDaily";
import { Sidebar, Banner, BestSeller } from "../../components";

const Home = () => {
  return (
    <div className="w-main flex">
      <div className="flex flex-col gap-5 w-[25%] flex-auto">
        <Sidebar />
        <span>
          Deal daily
          <DealDaily />
        </span>
      </div>
      <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
        <Banner />
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;
