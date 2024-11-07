//import logo from "../assets/images/logo01.png";
import logo from "../assets/images/sifen/logo01.png";
import logosmall from "../assets/images/sifen/smalllogo.png";

import { X, Menu, Facebook, Instagram, Youtube } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function NavBar() {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  let CompName = "blank";
  let pathName = window.location.pathname;
  switch (window.location.pathname) {
    case "/":
      CompName = "Home";
      break;
  }

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full ">
      {/* <div class="hidden md:flex bg-sky-900 w-full h-10  justify-end items-center">
        <div className="flex space-x-4 mr-4 text-white">
          <Facebook className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
          <Instagram className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
          <Youtube className="hover:text-sky-900 hover:bg-gray-200 rounded duration-100 cursor-pointer" />
        </div>
      </div> */}
      <div
        className={`z-50  w-full flex ${
          CompName == "Home"
            ? "text-white bg-opacity-90 bg-gray-200 "
            : "bg-sky-900 text-white bg-opacity-30 "
        }`}
      >
        <div
          className={`hidden   md:grid grid-cols-6 w-full ${
            CompName == "Home" ? "bg-white" : "bg-white"
          }}`}
        >
          <div className="col-span-1 p-5">
            <img src={logo} alt="" className="w-3/4 " />
          </div>
          <div className=" my-auto col-span-5 w-full ">
            <div className="flex  justify-between px-10  font-serif">
              <div className=" space-x-7 text-black">
                {" "}
                <a
                  href="/"
                  className={`hover:text-orange-400 hover:scale-105 duration-100 ${
                    pathName == "/" ? "text-orange-500" : ""
                  }`}
                >
                  Home
                </a>{" "}
                <a
                  href="/about"
                  className={`hover:text-orange-400 hover:scale-105 duration-100 ${
                    pathName == "/about" ? "text-orange-500" : ""
                  }`}
                >
                  About Us
                </a>
                <a
                  href="/services"
                  className={`hover:text-orange-400 hover:scale-105 duration-100 ${
                    pathName == "/services" ? "text-orange-500" : ""
                  }`}
                >
                  Services
                </a>
                <a
                  href="/coffee"
                  className={`hover:text-orange-400 hover:scale-105 duration-100 ${
                    pathName == "/coffee" ? "text-orange-500" : ""
                  }`}
                >
                  Coffee
                </a>
              </div>{" "}
              <div>
                <a
                  href="/contact"
                  className="hover:text-orange-400 hover:bg-gray-200 bg-orange-500 p-2 rounded hover:scale-105 duration-100"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block border-b-2 bg-yellow-200 border-gray-300 w-5/6 mx-auto"></div> */}

        <div className="block md:hidden relative w-full font-serif">
          <div
            onClick={toggleDrawer}
            className="flex cursor-pointer justify-between px-4 bg-gray-200 text-orange-900"
          >
            {drawer ? <X className="my-auto" /> : <Menu className="my-auto" />}
            <img src={logosmall} className="w-fit" alt="" />
          </div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: drawer ? "0%" : "-100%" }}
            transition={{ duration: 0.3 }} // Smooth transition without bounce
            className="absolute top-11 bg-gray-200 w-3/4 rounded-br-3xl shadow-2xl shadow-sky-900"
          >
            <div className="px-8 text-orange-400 flex flex-col space-y-3 py-3">
              <a
                href="/"
                className={`hover:text-orange-800 hover:scale-105 duration-100 ${
                  pathName == "/" ? "text-orange-800" : ""
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`hover:text-orange-800 hover:scale-105 duration-100 ${
                  pathName == "/about" ? "text-orange-800" : ""
                }`}
              >
                About us
              </a>

              <a
                href="/services"
                className={`hover:text-orange-800 hover:scale-105 duration-100 ${
                  pathName == "/services" ? "text-orange-800" : ""
                }`}
              >
                Services
              </a>
              <a
                href="/coffee"
                className={`hover:text-orange-800 hover:scale-105 duration-100 ${
                  pathName == "/coffee" ? "text-orange-800" : ""
                }`}
              >
                Coffee
              </a>

              <a
                href="/contact"
                className={`hover:text-orange-800 hover:scale-105 duration-100 ${
                  pathName == "/cocontactffee" ? "text-orange-800" : ""
                }`}
              >
                Contact
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
