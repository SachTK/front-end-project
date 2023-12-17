import React from "react";
import bg from "../assets/bg.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="pt-20">
    <div
      style={{ backgroundImage: `url(${bg})` }}
      name="home"
      className="snap-start bg-no-repeat bg-contain sm:w-full sm:bg-cover h-[470px]   sm:h-screen"
    >
      <div className="max-w-[700px] sm:px-8 flex flex-col justify-end sm:pb-[100px]  h-full">
        <div class="bg-gradient-to-r from-green-400 to-blue-500 p-10 ">
        <h1 className="text-2xl sm:text-5xl font-bold text-white">
          We crush your competitors, goals, and sales records - without the B.S.
        </h1>

        <div>
          <button className="rounded-lg font-semibold text-l mt-7 text-white group px-6 py-3 my-2 flex items-center bg-[#F28D35]">
            <Link to="targetSection">
              GET FREE CONSULTATION
            </Link>
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
