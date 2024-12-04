import React from "react";

const meetThePunk = () => {
  return (
    <div className="bg-black text-white pt-[5rem]">
      <div className="md:mx-auto max-w-[1340px]">
        <div className="w-full md:flex justify-center p-6 md:p-0">
          <div className="w-[90%] pl-0 md:pl-[11rem]">
            <h1 className="text-3xl font-medium">Meet the Punks</h1>
          </div>
          <div className="mt-6">
            <p className="text-left">
              The CryptoPunks are 24x24 pixel art images, generated
              algorithmically. Most are punky-looking guys and girls, but there
              are a few rarer types mixed in: Apes, Zombies and even the odd
              Alien. Every punk has their own profile page that shows their
              attributes as well as their ownership/for-sale status.
            </p>
            <div className="pt-6 md:flex items-center gap-6">
              <div>
                <button className="bg-white hover:bg-black text-black hover:text-white w-[151px] h-[50px] rounded-full border-2 border-white hover:border-gray-700">
                  But a Punk
                </button>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="bg-black text-white border-2 border-gray-700 w-[220px] h-[52px] rounded-full hover:bg-white hover:text-black">
                  View full collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default meetThePunk;
