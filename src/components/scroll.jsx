import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import image01 from "../assets/images/sifen/scroll/img01.jpg";
import image02 from "../assets/images/sifen/scroll/img02.jpg";
import image03 from "../assets/images/sifen/scroll/img03.jpg";
import image04 from "../assets/images/sifen/scroll/img04.jpg";
import image05 from "../assets/images/sifen/scroll/img05.jpg";

// Example images array
const images = [image01, image02, image03, image04, image05];

const ImageScroller = () => {
  const [index, setIndex] = useState(0);

  // Automatically update the index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate the effective index for looping
  const effectiveIndex = index % images.length;

  return (
    <div className="overflow-hidden  bg-gray-200 flex w-screen  items-center justify-center ">
      <motion.div
        className="flex"
        initial={false}
        animate={{ x: `-${effectiveIndex * 500}px` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ width: `${(images.length + 4) * 500}px` }}
      >
        {/* Render the images array twice to create a loop effect */}
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            className="w-1/4  object-cover m-5 bg-gray-100 rounded-2xl "
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageScroller;
