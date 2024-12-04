import React from "react";
import { MdArrowOutward } from "react-icons/md";

const featuredIn = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="pt-[10rem]">
        <p className="text-xl md:text-2xl text-center pb-[4rem]">Featured in</p>

        <div className="block md:flex text-center justify-center">
          <div className="border-2 border-gray-700 rounded-xl mt-4 mx-8 md:mx-4">
            <div className="p-6">
              <h2 className="font-medium text-2xl">Mashable</h2>
              <p className="text-base pt-2 text-left">
                This ethereum-based project could change how we think about
                digital art
              </p>
            </div>
            <div className="p-6 border-t-2 border-gray-700 flex text-center justify-between">
              <p>Read article</p>
              <MdArrowOutward size={24} />
            </div>
          </div>

          <div className="border-2 border-gray-700 rounded-xl mt-4 mx-8 md:mx-4">
            <div className="p-6">
              <h2 className="font-medium text-2xl">Mashable</h2>
              <p className="text-base pt-2 text-left">
                This ethereum-based project could change how we think about
                digital art
              </p>
            </div>
            <div className="p-6 border-t-2 border-gray-700 flex text-center justify-between">
              <p>Read article</p>
              <MdArrowOutward size={24} />
            </div>
          </div>

          <div className="border-2 border-gray-700 rounded-xl mt-4 mx-8 md:mx-4">
            <div className="p-6">
              <h2 className="font-medium text-2xl">Mashable</h2>
              <p className="text-base pt-2 text-left">
                This ethereum-based project could change how we think about
                digital art
              </p>
            </div>
            <div className="p-6 border-t-2 border-gray-700 flex text-center justify-between">
              <p>Read article</p>
              <MdArrowOutward size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuredIn;
