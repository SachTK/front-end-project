import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#6B3CC9] z-50">
      <div>
        <img src={logo} alt="logo image" style={{ width: "150px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="services" smooth={true} duration={500}>
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="careers" smooth={true} duration={500}>
            CAREERS
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "z-50 fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">
          <Link to="services" smooth={true} duration={500}>
            SERVICES
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="about" smooth={true} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            CONTACT US
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="careers" smooth={true} duration={500}>
            CARRERS
          </Link>
        </li>

        <div
          onClick={handleClick}
          className="flex items-center justify-center rounded-full border-2 border-sky-500 w-10 h-10 md:hidden z-10 mt-5"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
