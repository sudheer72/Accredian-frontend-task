import React from "react";
import { Button } from "flowbite-react";

const Refer = () => {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-lg text-white mt-10">
      <h1 className="text-2xl font-bold mb-2">Refer & Earn Rewards!</h1>
      <p className="mb-4 text-lg">
        Invite your friends and earn exclusive benefits. Share your unique referral link now!
      </p>
      <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
        <span className="text-gray-700 font-medium">
          https://yourreferrallink.com
        </span>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Copy Link
        </Button>
      </div>
    </div>
  );
};

export default Refer;
