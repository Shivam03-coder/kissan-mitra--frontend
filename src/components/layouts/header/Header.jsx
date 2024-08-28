import React from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Applogo, Menucloseicon, Menuopen } from "../../../constants";
import { useNavigate } from "react-router-dom";

export function Header() {
  const Navigate = useNavigate();
  return (
    <Navbar className="h-max max-w-full rounded-none px-4 py-4 md:py-2 lg:px-8 bg-transparent border-none shadow-none lg:py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex gap-2">
          {/* <img src={Applogo} alt="Applogo" /> */}
          <Typography className="text-lg md:text-2xl font-semibold">
            <span className="text-4xl text-pastelGreen-600">THE </span>{" "}
            <span className="text-3xl text-portgore-600">K</span>ISSAN - MITRA
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            <Button
              size="sm"
              onClick={() => Navigate("auth")}
              className="rounded-xl  lg:inline-block text-black text-base bg-pastelGreen-400 transition-all duration-700 "
            >
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
