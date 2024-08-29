import React, { useCallback, useEffect, useState } from "react";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { useMediaquery } from "../../../hooks/usemediaQuery";
import NavList from "./menu/NavList";
import UserProfile from "../userprofile/UserProfile";
import { Menuopen } from "../../../constants";
import { useDispatch } from "react-redux";
import { OpenMobileviewNavbar } from "../../../redux/states/communitySlice";
import MobileviewNavbar from "../mobileviewnavbar/MobileviewNavbar";

function Navigationbar() {
  const [openNav, setOpenNav] = useState(false);
  const isMobileView = useMediaquery(900);
  const dispatch = useDispatch();

  const handleMobileViewNavBar = useCallback(() => {
    dispatch(OpenMobileviewNavbar());
  }, [dispatch]);

  useEffect(() => {
    setOpenNav(isMobileView);
  }, [isMobileView]);

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
          <div className="hidden px-5 lg:block">
            <NavList />
          </div>
          <UserProfile />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={handleMobileViewNavBar}
        >
          {openNav && (
            <Menuopen className="size-7 text-black" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {isMobileView && <MobileviewNavbar />}
    </Navbar>
  );
}

export default Navigationbar;
