import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#6B3CC9]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#6B3CC9] pt-10 pr-10 pl-10 pb-8">
        <div className="md:col-span-2 sm:col-span-2 col-span-1 mt-7">
          <div>
            <img src={logo} alt="Company Logo" style={{ width: "220px" }} />
          </div>
          <div className="mt-5">
            <p className="max-w-[500px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 col-span-1 mt-7">
          <h1 className="text-xl font-bold">Our Technologies</h1>
          <div className="pt-2">ReactJS</div>
          <div className="pt-2">Gatsby</div>
          <div className="pt-2">NextJS</div>
          <div className="pt-2">NodeJS</div>
          <div className="pt-2">GraphQL</div>
          <div className="pt-2">Laravel</div>
        </div>

        <div className="md:col-span-1 col-span-1 mt-7">
          <h1 className="text-xl font-bold">Our Services</h1>
          <div className="pt-2">Social Media Marketing</div>
          <div className="pt-2">Web & Mobile App Devolopment</div>
          <div className="pt-2">Data & Analytics</div>
          <div className="pt-2">Google Marketing Solutions</div>
          <div className="pt-2">Search Engine Optimization</div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-5 ">
        <div className="border-t-2 border-white h-6 w-[300px] sm:w-[800px]"></div>
      </div>

      <div className="flex items-center justify-center pt-3 pb-5">
        <div className="pr-9">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div>|</div>
        <div className="pl-9">
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
