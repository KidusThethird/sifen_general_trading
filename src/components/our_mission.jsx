import React from "react";
import { Activity, LifeBuoy, Footprints, Home , Coffee , Unplug ,Construction, Cctv} from "lucide-react";
export default function OurMission() {
  return (
    <div>
      <div className="md:grid grid-cols-2">
        <div className="p-16 space-y-7">
          <h1 className="text-2xl font-semibold">Our Mission</h1>
          <h1 className="font-serif">
          At Sifen General Trading, our mission is to connect our clients with quality products and reliable service. Through a commitment to excellence in coffee exports, electronics imports, and professional maintenance services, we strive to support our clients' growth and enhance their daily operations with trust and integrity.
          </h1>
        </div>

        <div className="m-8 font-serif">
          <div className="grid grid-cols-2 gap-5">
            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Coffee size={80} className="mx-auto text-orange-400" />
              <h1 className="text-center">Coffee Export</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Unplug size={80} className="mx-auto text-orange-400" />
              <h1 className="text-center">Electronics Import</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Construction size={80} className="mx-auto text-orange-400" />
              <h1 className="text-center">Maintenance</h1>
            </div>

            <div className="border-0 border-sky-900 p-4 rounded shadow-2xl">
              <Cctv size={80} className="mx-auto text-orange-400" />
              <h1 className="text-center">Security Solutions</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
