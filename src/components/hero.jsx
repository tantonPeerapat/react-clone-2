import React from "react";

const hero = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-[1280px] mx-6 md:mx-auto pt-16 md:pt-24 pb-36 md:pb-48">
        <h1 className="w-full text-[46px] leading-[65px] text-center md:flex items-center justify-center">
          The project that inspired the modern CryptoArt movement
        </h1>
        <p className="mt-6 max-w-[450px] mx-auto text-center">
          10,000 unique collectible characters with proof of ownership stored on
          the Ethereum blockchain.
        </p>
        <div className="flex items-center justify-center">
          <button className="mt-6 bg-white text-black rounded-3xl px-8 py-2.5">
            Mint now
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
