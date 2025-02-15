import { Button, MegaMenu, Navbar } from "flowbite-react";
import React from "react";
import logo from "../../assets/logo.png";
import { HiChevronDown } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import PositionedMenu from "../PositionedMenu";

function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="max-w-4xl mx-auto bg-[#1A73E8] shadow-lg rounded-lg">
      <div className="flex justify-start items-center gap-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold text-white flex items-center"
        >
          <img src={logo} alt="logo" className="h-12" />
        </Link>
        <div className="hidden md:block">
          <PositionedMenu />
        </div>
      </div>

      <div className="flex gap-5 md:order-2">
        <Link to="/sign-in">
          <Button type="button" size="md" className="bg-white text-[#1A73E8] hover:bg-gray-100">
            <span className="hover:text-[#0F5CBD]">Login</span>
          </Button>
        </Link>

        <Link to="/sign-up">
          <Button type="button" size="md" className="bg-[#FFD700] text-black hover:bg-[#FFC107]">
            <span className="hover:text-black">Try for free</span>
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/refer"} as={"div"} className="text-white hover:text-gray-200">
          <Link to="/refer">Refer & Earn</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/resources"} as={"div"} className="text-white hover:text-gray-200">
          <Link to="/resources">Resources</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"} className="text-white hover:text-gray-200">
          <Link to="/about">About us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
