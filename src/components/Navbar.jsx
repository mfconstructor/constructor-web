import React, { useState } from "react";
import { close, phone_yellow, menu } from "../assets";
import { navLinks, phoneNumber } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="font-poppins font-medium text-[18px] leading-[23px]">
        <div className="ss:text-[44px] text-[48px] text-tertiary">FIX PDP</div>
        <div className="hidden text-tertiary"></div>
        <div className="py-2 sm:hidden flex mr-0 w-[50px] text-tertiary">
          <img src={phone_yellow} alt="icon" className="w-[50%] h-[50%]" />
          <a
            href={`callto:${phoneNumber.hiddenNumber}`}
            style={{ whiteSpace: "nowrap" }}
          >
            {phoneNumber.visibleNumber}
          </a>
        </div>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] text-tertiary`}
        >
          <div className="flex mr-0 w-[50px]">
            <img src={phone_yellow} alt="icon" className="w-[50%] h-[50%]" />
            <a
              href={`callto:${phoneNumber.hiddenNumber}`}
              style={{ whiteSpace: "nowrap" }}
            >
              {phoneNumber.visibleNumber}
            </a>
          </div>
        </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
