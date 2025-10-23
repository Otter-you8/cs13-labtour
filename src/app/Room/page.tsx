import React from "react";
import RoomSection from "./feature/RoomSection";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="flex justify-center pt-10">
        <h1 className="text-center font-black text-5xl">Room</h1>
      </div>
      <RoomSection />
    </div>
  );
};

export default page;
