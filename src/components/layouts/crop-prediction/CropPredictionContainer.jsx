import React from "react";
import PageHeader from "../../shared/header/PageHeader";
import FormSection from "./section/FormSection";
import InfoSection from "./section/InfoSection";

const CropPredictionContainer = () => {
  return (
    <div className="size-full">
      <div className="grid z-40  md:grid-cols-2 min-h-[90vh] w-full">
        <FormSection />
        <InfoSection />
      </div>
    </div>
  );
};

export default CropPredictionContainer;
