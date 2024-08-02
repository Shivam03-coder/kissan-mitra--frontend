import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Navlist } from "./Navlist";
import { Applogo, IoMdClose, CiMenuFries } from "../../../constants";
import { MobileviewDrawer } from "./Drawer";
import { useNavigate } from "react-router-dom";

export function Header({ Draweropen, isMobileview, setDraweropen }) {
  const Navigate = useNavigate();
  return (
    <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-8 bg-transparent border-none shadow-none lg:py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-2">
          <img src={Applogo} alt="Applogo" />
          <Typography
            variant="h3"
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold font-Roboto"
          >
            KISSAN-MITRA
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <Navlist />
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              size="sm"
              variant="outlined"
              onClick={() => Navigate("auth")}
              className="rounded-3xl hidden md:block lg:inline-block text-black text-base bg-pastelGreen-400 transition-all duration-700 "
            >
              <span>Sign in</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setDraweropen(!Draweropen)}
          >
            {isMobileview ? (
              <CiMenuFries className="size-7 font-extrabold" />
            ) : (
              <IoMdClose className="size-9 font-bold" />
            )}
          </IconButton>
        </div>
        {isMobileview && (
          <MobileviewDrawer
            Draweropen={Draweropen}
            setDraweropen={setDraweropen}
          />
        )}
      </div>
    </Navbar>
  );
}
