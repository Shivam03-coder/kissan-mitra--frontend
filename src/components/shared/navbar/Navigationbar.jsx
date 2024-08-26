import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { BiAbacus } from "react-icons/bi";
import { useMediaquery } from "../../../hooks/usemediaQuery";
import NavList from "./menu/NavList";
import UserProfile from "../userprofile/UserProfile";

function Navigationbar() {
  const [openNav, setOpenNav] = useState(false);
  const IsMobileView = useMediaquery(900);

  useEffect(() => {
    if (IsMobileView) {
      setOpenNav(true);
    }
    setOpenNav(false);
  }, [IsMobileView]);

  return (
    <Navbar
      fullWidth={true}
      className="sticky z-40 shadow-none border-none bg-custom-greenlight-gradient top-0 w-full"
    >
      <div className="flex items-center justify-between text-blue-gray-900 w-full">
        <Typography className="text-lg md:text-2xl font-semibold">
          <span className="text-4xl text-pastelGreen-600">THE </span>{" "}
          <span className="text-4xl text-portgore-600">K</span>ISSAN -{" "}
          <span className="text-4xl text-portgore-600">M</span>ITRA
        </Typography>
        <div className="hidden gap-5 lg:flex">
          <div className="hidden  px-5 lg:block">
            <NavList />
          </div>
          <UserProfile />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <BiAbacus className="h-6 w-6" strokeWidth={2} />
          ) : (
            <BiAbacus className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Navigationbar;
