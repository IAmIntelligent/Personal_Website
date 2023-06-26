import React from "react";
import {
  AiFillGithub,
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoNote } from "react-icons/go";
import { CiRollingSuitcase } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const iconStyle = "text-[30px]";
  return (
    <div className="flex h-screen relative">
      <div className="w-72 bg-[#2a2b30]">
        {/* profile image */}
        <div className="flex flex-col items-center space-x-4 mb-8 relative">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
            alt="Profile Picture"
            style={{ width: "100%" }}
          />
          <p className="text-white font-semibold text-lg tracking-wider absolute bottom-0 bg-[#00A3E1] px-3">
            MUHAMMAD SHAKKEER
          </p>
        </div>
        {/* nav links and li icons */}
        <nav>
          <ul className="space-y-2">
            <li className="sidebar-li-style">
              <Link to="/" className="sidebar-a-style">
                <AiOutlineHome className={iconStyle} />
                Home
              </Link>
            </li>
            <li className="sidebar-li-style">
              <Link to="/aboutme" className="sidebar-a-style">
                <CgProfile className={iconStyle} />
                About Me
              </Link>
            </li>
            <li className="sidebar-li-style">
              <Link to="/resume" className="sidebar-a-style">
                <GoNote className={iconStyle} />
                Resume
              </Link>
            </li>
            <li className="sidebar-li-style">
              <Link to="/portfolio" className="sidebar-a-style">
                <CiRollingSuitcase className={iconStyle} />
                Portfolio
              </Link>
            </li>

            <li className="sidebar-li-style">
              <Link to="/contact" className="sidebar-a-style">
                <AiOutlineContacts className={iconStyle} />
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* social icons */}
        <div className="absolute bottom-0 pl-10 text-[#777] mb-3">
          <p className="flex gap-3 mb-3">
            <AiFillGithub className="text-[20px] hover:text-white cursor-pointer" />
            <AiOutlineLinkedin className="text-[20px] hover:text-white cursor-pointer" />
            <AiOutlineInstagram className="text-[20px] hover:text-white cursor-pointer" />
          </p>
          <p className="text-sm">2021 © Cosmos-Themes.</p>
          <p className="text-sm"> All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
