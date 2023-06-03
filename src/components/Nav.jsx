import React from "react";
import Logo from "../assets/Logo.png";

function Nav() {
  return (
    <div className="flex justify-between px-[16.67%] py-[0.45%] bg">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="flex gap-[5rem] items-center ">
        <li className="hover:text-[#722ED1]">
          <a href="#">About</a>
        </li>
        <li className="hover:text-[#722ED1]">
          <a href="#">Pricing</a>
        </li>
        <li className="hover:text-[#722ED1]">
          <a href="#">Contract Us</a>
        </li>
        <li className="hover:text-[#722ED1]">
          <a href="/login">Login</a>
        </li>
        <li className="flex justify-center items-center border border-[#722ED1] w-[142px] h-[38px] rounded-full text-[#722ED1] hover:bg-[#722ED1]  hover:text-white mr-3 ease-in-out transition">
          <a href="#">Start free trial</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
