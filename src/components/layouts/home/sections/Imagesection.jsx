import React from "react";
import { leafimg } from "../../../../constants";

function Imagesection({ src, border }) {
  return (
    <section>
      <img
        className={` w-72 bg-darken  shadow-glass-card  ${border} `}
        src={src}
        alt="Farmbackground"
      />
    </section>
  );
}

export default Imagesection;
