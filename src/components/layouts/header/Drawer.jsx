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
      className="!bg-pastelGreen-500"
      open={Draweropen}
      onClose={closeDrawer}
    >
      <div className="mb-2 flex h-full top-0  flex-col !bg-pastelGreen-500 p-4">
        <div className="flex justify-center  items-center gap-5">
          <Typography variant="h4" className="text-center">
            KISSAN MITRA
          </Typography>
          <IconButton variant="text" onClick={closeDrawer}>
            <IoMdClose className="size-9" />
          </IconButton>
        </div>
        <div className="px-9 my-5">
          <Navlist />
          <Button className="mt-3 rounded-3xl shadow-2xl text-black text-base bg-honeysuckle-600" size="sm">
            SIGN IN
          </Button>
        </div>
      </div>
    </Drawer>,
    document.getElementById("drawer-portal")
  );
}
