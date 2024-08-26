import React from "react";
import { MarketCropsImg } from "../../../../constants";

const ImageSection = () => {
  return (
    <div className="w-full h-[50vh] relative">
      <img
        className="w-full h-full object-cover object-center filter brightness-125"
        src={MarketCropsImg}
        alt="Market Crops"
      />
    </div>
  );
};

export default ImageSection;
