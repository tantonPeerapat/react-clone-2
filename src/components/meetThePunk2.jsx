import React from "react";
import Frame from "../assets/Frame.png";

const meetThePunk2 = () => {
  return (
    <div className="bg-black text-white py-[2rem] w-full rounded-bl-3xl rounded-br-3xl">
      <div className="p-6">
        <div className="w-full md:flex justify-center gap-10">
          <div className="w-full md:w-[20%]">
            <div className="bg-[#638596] hover:bg-black hover:border-gray-700 p-6 border-2 border-[#638596] rounded-xl my-[1rem] cursor-pointer">
              Punks with a blue background are not for sale and have no current
              bids.
            </div>
            <div className="hover:bg-[#638596] hover:border-[#638596] p-6 border-2 border-gray-700 rounded-xl my-[1rem] cursor-pointer">
              Punks with a blue background are not for sale and have no current
              bids.
            </div>
            <div className="hover:bg-[#638596] hover:border-[#638596] p-6 border-2 border-gray-700 rounded-xl my-[1rem] cursor-pointer">
              Punks with a blue background are not for sale and have no current
              bids.
            </div>
          </div>
          <div className="">
            <img src={Frame} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default meetThePunk2;
