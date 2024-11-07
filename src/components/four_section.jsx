import React from "react";

// import Image01 from "../assets/images/new/four/img01.png";
// import Image02 from "../assets/images/new/four/img12.jpg";

// import Image03 from "../assets/images/new/four/img13.jpg";

// import Image04 from "../assets/images/new/four/img14.jpg";

import Image01 from "../assets/images/sifen/scroll/img01.jpg";
import Image02 from "../assets/images/sifen/scroll/img02.jpg";
import Image03 from "../assets/images/sifen/scroll/img03.jpg";
import Image04 from "../assets/images/sifen/scroll/img04.jpg";

// import Image02 from "../assets/images/new/four/img16.jpg";
// import Image03 from "../assets/images/new/four/img17.jpg";
// import Image04 from "../assets/images/new/four/img18.jpg";

export default function FourSection() {
  return (
    <div className="text-gray-800   font-serif">
      <div>
        <div className="w-full md:grid grid-cols-2">
          <div className="my-auto">
            <h1 className="p-8">
            At Sifen General Trading, we take pride in offering premium Ethiopian coffee beans that are celebrated globally for their rich flavors, aromatic profiles, and high quality. As one of the leading exporters of Ethiopian coffee, we work directly with trusted local farmers in Ethiopia, ensuring that the beans we supply are sourced sustainably and ethically. {" "}
            </h1>
            <h1 className="p-8">
              {" "}
              Our coffee is grown in some of the best coffee regions, where the climate and soil conditions provide the perfect environment for producing beans that offer unique, full-bodied flavors.{" "}
            </h1>
            <h1 className="p-8">
            Our commitment to quality is reflected in every step of the coffee-exporting process, from selecting only the finest beans to meticulously processing and packaging them for export. Whether you're a café, roastery, retailer, or distributor, we provide a reliable supply of top-tier coffee that will elevate your offerings and meet the diverse tastes of coffee enthusiasts worldwide.{" "}
            </h1>
            <h1 className="p-8">
              Our offerings in fashion, apparel, and human hair include
              wholesale clothing, shoes, accessories, and 100% human hair
              products, all designed to keep up with the latest global trends.
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 m-8">
            <img
              src={Image01}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image02}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image03}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image04}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* <div>
        <div className="w-full flex flex-col-reverse md:grid grid-cols-2">
          <div className="grid grid-cols-2 gap-4 m-8">
            <img
              src={Image05}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image06}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image07}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
            <img
              src={Image08}
              alt=""
              className="rounded-2xl hover:shadow-2xl shadow-sky-900 hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
          <div className="my-auto">
            <h1 className="p-8">
              For home, office, and commercial furnishings, we supply modern
              furniture, fixtures, decor, and high-quality building materials,
              ensuring functionality and style for residential and commercial
              spaces.
            </h1>
            <h1 className="p-8">
              {" "}
              In addition, we provide a variety of general trading and wholesale
              products, ranging from consumer goods to specialized industrial
              materials, with access to global suppliers.{" "}
            </h1>
            <h1 className="p-8">
              {" "}
              Our business consulting and sourcing services deliver expert
              guidance and solutions, helping businesses expand, optimize
              operations, and effectively access international markets.{" "}
            </h1>
            <h1 className="p-8">
              At Birara Dragon Bridge General Trading, we pride ourselves on
              quality, customer satisfaction, and our commitment to meeting the
              diverse needs of our clients.
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
}
