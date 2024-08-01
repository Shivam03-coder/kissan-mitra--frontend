import React from "react";
import Imagesection from "./sections/Imagesection";
import Propsection from "./sections/Propsection";
import Contentsection from "./sections/Contentsection";
import { leafimg, cropsimage } from "../../../constants";
import Servicecontent from "./sections/Servicecontent";
import Servicescards from "./sections/Servicescards";

function Maincontetnt() {
  return (
    <main>
      <div className="my-10 mx-auto max-w-6xl grid md:grid-cols-2 gap-10 place-items-center">
      <Contentsection />
      <Imagesection src={leafimg} border="rounded-bl-full rounded-t-full" />
    </div>
      <Propsection />
      <div className="grid md:grid-cols-2 px-10 py-16 gap-10 place-items-center bg-transparent backdrop-blur-sm ">
        <Imagesection src={cropsimage} border="rounded-3xl" />
        <Servicecontent />
      </div>
      <Servicescards />
    </main>
  );
}

export default Maincontetnt;
