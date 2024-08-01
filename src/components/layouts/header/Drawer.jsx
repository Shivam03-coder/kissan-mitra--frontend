import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Navlist } from "./Navlist";
import { IoMdClose } from "../../../constants";
import { createPortal } from "react-dom";

export function MobileviewDrawer({ Draweropen, setDraweropen }) {
  const closeDrawer = () => {
    setDraweropen(false);
  };

  return createPortal(
    <Drawer
      className="!bg-white"
      open={Draweropen}
      onClose={closeDrawer}
    >
      <div className="flex flex-col h-full p-4 bg-white">
        <div className="flex justify-between items-center mb-6">
          <Typography variant="h4" className="text-black font-bold">
            KISSAN MITRA
          </Typography>
          <IconButton
            variant="text"
            onClick={closeDrawer}
            aria-label="Close drawer"
          >
            <IoMdClose className="text-gray-800 size-9" />
          </IconButton>
        </div>

        <div className="flex-1 flex flex-col">
          <Navlist className="flex flex-col gap-4 mb-6" />
          
          <div className="flex-grow" />

          <div className="px-6 mb-6">
            <Button
              variant="outlined"
              className="w-full rounded-3xl shadow-md  bg-pastelGreen-400 text-lg text-black"
              size="sm"
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </Drawer>,
    document.getElementById("drawer-portal")
  );
}
