import React from "react";
import image01 from "../assets/images/sifen/img01.jpg";

const HeroSection = () => {
  return (
    <div className="pt-24 flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-100">
      <div className="max-w-lg text-center lg:text-left mb-8 lg:mb-0">
        <p className="text-gray-500 mb-2">
          Empowering global connections with quality products and services
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-orange-400 leading-tight mb-4">
          SIFEN GENERAL TRADING <br /> YOUR PARTNER IN QUALITY & RELIABILITY
        </h1>
        <p className="text-gray-700 mb-4">
          From premium coffee exports to high-quality electronics imports and
          reliable maintenance services, we are committed to excellence in every
          aspect.
        </p>
        <button className="mt-4 px-6 py-2 bg-orange-400 text-white rounded shadow hover:bg-orange-700">
          CONTACT US
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={image01}
          alt="Professional meeting or service"
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
