import React from "react";
import PageHeader from "../../shared/header/PageHeader";
import FormSection from "./sections/FormSection";
import InfoSection from "./sections/InfoSection";

const FertilizerPredictionContainer = () => {
  return (
    <div className="size-full">
      <div className="grid z-40  md:grid-cols-2 min-h-[90vh] w-full">
        <FormSection />
        <InfoSection />
      </div>
    </div>
  );
};

export default FertilizerPredictionContainer;
