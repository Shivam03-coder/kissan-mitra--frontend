import { Button } from "@material-tailwind/react";
import React from "react";

const Contactsection = () => {
  return (
    <div className="flex flex-col  space-y-3 ">
      <textarea
        placeholder="SEND MESSAGE TO ORGANIZATION"
        name=""
        id=""
        rows={5}
        className="w-[60%] border-2 border-green-400 p-3 font-Inter rounded-md bg-custom-green-gradient text-black placeholder:text-black"
      ></textarea>
      <Button className="w-[40%] bg-custom-light-green-to-white text-black text-lg">
        SEND
      </Button>
    </div>
  );
};

export default Contactsection;
