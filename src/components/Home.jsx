import React from "react";
import bg from "../assets/bg.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="pt-20 relative">
      <div
        style={{ backgroundImage: `url(${bg})`, height: "100%" }}
        name="home"
        className="snap-start bg-no-repeat sm:bg-contain md:bg-contain lg:bg-contain xl:bg-cover sm:w-full h-auto  relative"
      >
        <div className="sm:max-w-full sm:top-[180px] md:top-[190px] lg:top-[180px] xl:top-[120px] md:max-w-full lg:max-w-[550px] xl:max-w-[550px] sm:pl-0 md:pl-0 lg:pl-8 xl:pl-8 flex flex-col justify-end sm:pb-[230px] md:pb-[160px] lg:pb-[350px] xl:pb-[160px] h-full relative">
          <div class="bg-gradient-to-r from-green-400 to-blue-500 sm:p-4 md:p-4 lg:p-4 xl:p-4 relative">
            <h1 className="sm:text-[39.8px] md:text-[55.8px] lg:text-[38px] xl:text-[41px] font-bold text-white  ">
              We crush your competitors, goals, and sales records - without the
              B.S.
            </h1>

            <div>
              <button className="rounded-lg font-semibold text-l mt-7 text-white group px-6 py-3 my-2 flex items-center bg-[#F28D35]">
                <Link to="targetSection">GET FREE CONSULTATION</Link>
                <span className="group-hover:rotate-90 duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
