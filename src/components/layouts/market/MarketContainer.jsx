import React from "react";
import PageHeader from "../../shared/header/PageHeader";
import ImageSection from "./sections/ImageSection";
import TextSection from "./sections/TextSection";
import SelectionSection from "./sections/SelectionSection";
import MarketpriceSection from "./sections/MarketpriceSection";

const MarketContainer = () => {



  
  return (
    <div className="size-full">
      <PageHeader />
      <section className="space-y-4">
        <ImageSection />
        <TextSection />
        <SelectionSection />
        <MarketpriceSection  />
      </section>
    </div>
  );
};

export default MarketContainer;
