import React, { useState } from "react";
import Logo from "../assets/Group.png";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black">
      <div className="flex items-center justify-between max-w-[1360px] mx-auto h-20">
        <img src={Logo} alt="/" className="ml-6 md:ml-0" />
        <ul className="text-[#638596] hidden md:flex items-center gap-4">
          <li>About</li>
          <li>Collect</li>
          <li>FAQs</li>
          <li className="bg-[#638596] text-[#C4EBFF] p-1.5 px-4 rounded-lg cursor-pointer	">
            Connect wallet
          </li>
          <li>
            <FaTwitter size={20} />
          </li>
          <li>
            <FaDiscord size={20} />
          </li>
        </ul>
        <div onClick={handleNav} className="text-white block md:hidden">
          {!nav ? (
            <AiOutlineMenu size={20} className="mr-6 md:0" />
          ) : (
            <AiOutlineClose size={20} className="mr-6 md:0" />
          )}
        </div>
        <ul
          className={
            !nav
              ? "ease-in-out duration-500 fixed top-0 left-[-100%] h-full"
              : "z-50 text-[#638596] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
          }
        >
          <img src={Logo} alt="/" className="m-6" />
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Collect</li>
          <li className="p-4 border-b border-gray-600">FAQs</li>
          <li className="p-4 border-b border-gray-600">Connect wallet</li>
          <li className="p-4 border-b border-gray-600">
            <FaTwitter size={20} />
          </li>
          <li className="p-4 border-b border-gray-600">
            <FaDiscord size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
