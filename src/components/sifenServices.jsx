import React from 'react';
import Image01 from "../assets/images/sifenservices/img01.jpg";
import Image02 from "../assets/images/sifenservices/img02.jpg";

import Image03 from "../assets/images/sifenservices/img03.jpg";
import Image04 from "../assets/images/sifenservices/img04.jpg";
import Image05 from "../assets/images/sifenservices/img05.jpg";
import Image06 from "../assets/images/sifenservices/img06.jpg";


const services = [
  {
    title: 'Coffee Export',
    
    description: 'We specialize in the export of high-quality coffee beans, sourced directly from trusted local farmers. Experience the rich flavors of premium Ethiopian coffee.',
    image: Image01
},
  {
    title: 'Electronics Import',
    description: 'Our imports include PCs, phones, security cameras, and accessories, providing our clients with top-notch electronics from reputable brands around the world.',
    image: Image02 
},
  {
    title: 'Office Machine Maintenance',
    image: Image03,
    description: 'We offer maintenance services for various office machines, ensuring smooth operations and minimal downtime for your business equipment.',
  },
  {
    title: 'Phone Maintenance',
    image: Image04, description: 'From screen repairs to software troubleshooting, our skilled technicians are here to keep your phones working at their best.',
  },
  {
    title: 'Security Camera Installation & Maintenance',
    image: Image05, description: 'Protect your premises with our security camera solutions. We handle installation and regular maintenance to ensure seamless surveillance.',
  },
  {
    title: 'Accessory Supply',
    image: Image06, description: 'Get quality accessories for your electronics, including chargers, cases, and screen protectors, to enhance and safeguard your devices.',
  },
];

const SifenServices = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-8">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-white shadow-md rounded-lg transition transform hover:scale-105"
            >
               <img src={service.image} alt="" className='rounded-t-2xl'/>
               <div className='p-4'>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-orange-400">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SifenServices;
