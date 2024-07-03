import React from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import path from "../ultils/path";
const Header = () => {
  const { RiPhoneFill, MdEmail, FaUserCircle, BsHandbagFill } = icons;
  return (
    <div className="border flex justify-between w-main h-[110px] py-[35px]">
      <Link to={`/${path.HOME}`}>
        <img src={logo} alt="" className="w-[234px object-contain" />
      </Link>
      <div className="flex text-[13px]">
        <div className="flex flex-col px-4 border-r items-center">
          <span className="flex gap-4 items-center">
            <RiPhoneFill color="red" />
            <span className="font-semibold">(+1800) 000 8808</span>
          </span>
          <span>Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div className="flex flex-col px-4 border-r items-center">
          <span className="flex gap-4 items-center">
            <MdEmail color="red" />
            <span className="font-semibold">SUPPORT@TADATHEMES.COM</span>
          </span>
          <span>Online Support 24/7</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 border-r cursor-pointer">
          <BsHandbagFill />
          <span>0 item(s)</span>
        </div>
        <Link className="flex items-center justify-center gap-2 px-4 cursor-pointer">
          <FaUserCircle />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
