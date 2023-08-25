"use client";
import React from "react";
import Logo from "../images/logo.png";
import Image from "next/image";
import { headerLinks } from "../constants/index";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 border-b border-b-gray-600 px-4">
      <div className="flex max-w-screen-xl mx-auto justify-between items-center h-full">
        <div>
          <Image src={Logo} className="w-32" loading="lazy" />
        </div>
        <div className="hidden lg:inline-flex">
          <ul className="flex items-center gap-x-7">
            {headerLinks.map((item) => (
              <Link href={item.link}>
                <li className="text-sm uppercase text-gray-300 font-semibold hover:text-white hover:cursor-pointer duration-200">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden lg:inline-flex border-l border-r h-full items-center p-4 border-gray-600 group cursor-pointer ">
          <FiSearch className="text-xl text-gray-300 group-hover:text-white duration-300 " />
        </div>
        <div className="flex lg:hidden group cursor-pointer">
          <AiOutlineMenu className="text-xl text-gray-300 group-hover:text-white duration-300 " />
        </div>
      </div>
    </div>
  );
};

export default Header;
