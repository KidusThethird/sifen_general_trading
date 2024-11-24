import React from "react";
//import logo from "../assets/images/logo01.png";
import whatsapp from "../assets/images/whatsapplogo.png";
import { Phone, MapPin } from "lucide-react";
import logo from "../assets/images/sifen/sifenlogo.jpg";


const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center font-serif">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6 mt-14 md:mt-32">
        <div className="flex justify-center mb-6 ">
          <img src={logo} alt="Company Logo" className="w-64 p-1 rounded" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us through the following contact information.
        </p>

        <div className="space-y-8 md:flex md:space-y-0 md:space-x-6">
          {/* Phone Info */}
          <div className="space-y-4 md:w-1/2">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-orange-400" />
              <span className="text-gray-700">+2519 04 85 49 10</span>
            </div>

            {/* <div className="flex items-center space-x-3">
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="w-8 h-8 my-auto bg-orange-400 rounded-full p-1"
              />
              <div>
                <span className="text-gray-700 block"></span>
                <span className="text-gray-700 block"></span>
              </div>
            </div> */}
          </div>

          {/* Address Info */}
          <div className="flex items-center space-x-3 md:w-1/2">
            <MapPin size={32} className="text-orange-400" />
            <div className="text-gray-700">
             <h1>Megenagna, Meseret Defar blg 2nd Floor, Addis Ababa , Ethiopia</h1>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-600">
          Welcome to Sifen General Trading, where we specialize in exporting premium Ethiopian coffee, importing high-quality electronics, and providing expert maintenance services for office and security equipment. We are committed to delivering reliable, top-notch products and services to meet your business needs.{" "}

          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
