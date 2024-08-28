import React from "react";
import SpeedDialSection from "./sections/SpeedDialSection";
import MessageShowcaseSection from "./sections/MessageShowcaseSection";
import { MessageDialog } from "./sections/MessageModelSection";

const CommunityContainer = () => {
  return (
    <div className=" min-h-screen bg-custom-green-gradient">
      <section className="size-full flex-center">
        <MessageShowcaseSection />
      <MessageDialog />
      </section>
      <div className="fixed">
        <SpeedDialSection />
      </div>
    </div>
  );
};

export default CommunityContainer;
