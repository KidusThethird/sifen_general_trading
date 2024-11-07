import React from "react";
import { Grid2x2Check, Handshake, WandSparkles } from "lucide-react";

export default function Break03() {
  return (
    <div className="w-full font-serif">
      <div className="w-full space-y-3 ms:space-y-0 ms:grid grid-cols-2 lmd:grid-cols-3 gap-4 p-5">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Grid2x2Check className="text-orange-400 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-orange-400 text-lg  ms:text-2xl font-semibold">
            Quality First

            </div>
            <div className="text-sm">At Sifen General Trading, we prioritize delivering top-quality products and services to ensure our clients receive the best every time.</div>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <Handshake className="text-orange-400 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-orange-400 text-lg  ms:text-2xl font-semibold">
            Reliable Service
            </div>
            <div className="text-sm">We are committed to providing dependable and consistent service, ensuring our clients' needs are met with professionalism and care.</div>
          </div>
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <WandSparkles className="text-orange-400 size-9 ms:size-14" />
          </div>
          <div className="col-span-3">
            <div className="text-orange-400 text-lg  ms:text-2xl font-semibold">
            Trusted Solutions
            </div>
            <div className="text-sm">Our clients trust us to provide effective and lasting solutions, from high-quality imports to expert maintenance services.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
