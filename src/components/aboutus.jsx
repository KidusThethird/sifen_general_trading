import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo01.png";

export default function AboutUs() {
  return (
    <div className="z-10 relative overflow-hidden font-serif">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-gray-100 to-white opacity-25 z-0"></div>

      <div className="w-full  relative z-10">
        {/* <div className="flex">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-1/2 sm:w-full col-span-1 my-auto h-fit mx-auto"
            animate={{ y: [0, -10, 0] }} // Float effect
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div> */}
        <div className="mx-7  px-6 sm:px-0 my-4 p-7 text-sm space-y-2 pr-8 text-gray-800 font-montserrat">
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p className="text-base">
            At Sifen General Trading, we are dedicated to bridging quality
            products and exceptional service across diverse industries. With a
            strong presence in the coffee export market, we source premium
            Ethiopian coffee beans directly from local farmers, bringing the
            rich flavors of Ethiopia to clients worldwide. In addition to
            coffee, we specialize in the import of high-quality electronics,
            including PCs, phones, security cameras, and essential accessories.
            We ensure that our clients receive only the best products from
            trusted manufacturers. Our expertise extends beyond product
            supply—we also provide maintenance services for office machines,
            phones, and security cameras, ensuring that businesses and
            individuals have reliable, well-maintained equipment for seamless
            operations. With a commitment to quality, integrity, and customer
            satisfaction, Sifen General Trading stands ready to meet your needs
            and exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
