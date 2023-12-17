import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#6B3CC9]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#6B3CC9] pt-10 pr-10 pl-10 pb-8">
        <div className="md:col-span-2">
          <div>
            <img src={logo} alt="Company Logo" style={{ width: "150px" }} />
          </div>
          <div>
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <h1 className="text-xl font-bold">Our Technologies</h1>
          <div className="pt-2">ReactJS</div>
          {/* Add other technologies */}
        </div>

        <div className="md:col-span-1">
          <h1>Our Services</h1>
          <p>hhhhh</p>
          <p>hghg</p>
        </div>
      </div>

      <div className="flex items-center justify-center pt-5 ">
        <div className="border-t-4 border-white h-6 w-[800px]"></div>
      </div>

      <div className="flex items-center justify-center pt-3 pb-5">
        <div className="pr-9">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div>|</div>
        <div className="pl-9">
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
