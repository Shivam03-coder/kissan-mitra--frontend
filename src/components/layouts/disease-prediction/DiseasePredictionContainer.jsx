import React from "react";
import InfoSection from "./section/InfoSection";
import FormSection from "./section/FormSection";
import PageHeader from "../../shared/header/PageHeader";

const DiseasePredictionContainer = () => {
  return (
    <div className="size-full">
      <div className="grid z-40  md:grid-cols-2 min-h-[90vh] w-full">
        <FormSection />
        <InfoSection />
      </div>
    </div>
  );
};

export default DiseasePredictionContainer;
