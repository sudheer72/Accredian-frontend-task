import { Button } from "flowbite-react";
import React from "react";
import { PiHeadsetFill } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

function Support() {
  return (
    <div className="max-w-4xl mx-auto rounded-lg bg-[#FF6B6B] p-6 flex flex-wrap md:flex-nowrap justify-between items-center mt-16 mb-10 shadow-xl">
      {/* Left Section */}
      <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
        <div className="h-14 w-14 rounded-md bg-[#FFD93D] flex justify-center items-center shadow-md">
          <PiHeadsetFill className="w-10 h-10 text-[#FF6B6B]" />
        </div>
        <div className="text-white text-left">
          <h1 className="font-bold text-lg md:text-xl leading-tight">
            Need Expert Guidance?
          </h1>
          <p className="font-medium text-sm md:text-base leading-tight mt-1">
            Share your details and our team will assist you right away!
          </p>
        </div>
      </div>

      {/* Button Section */}
      <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white font-semibold rounded-md px-4 py-2 transition-all duration-300 hover:opacity-80 focus:ring-0 flex items-center gap-2 mt-4 md:mt-0">
        Get Help Now
        <FaAngleRight className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default Support;
