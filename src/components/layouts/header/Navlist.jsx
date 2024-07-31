import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const navlinks = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Services", to: "/services" },
  { id: 3, label: "About Us", to: "/about-us" },
  { id: 4, label: "Contact US", to: "/contact-us" },
];


export const Navlist = () => (
  <div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {navlinks.map(({ id, label, to }) => (
      <Link key={id} to={to} className="p-1 font-normal">
        <Typography  className="text-lg font-Inter font-medium" >
          {label}
        </Typography>
      </Link>
    ))}
  </div>
);


// import React from "react";
// import ReactDOM from "react-dom";
// import {
//   Drawer,
//   Button,
//   Typography,
//   IconButton,
// } from "@material-tailwind/react";
// import { Navlist } from "./Navlist";
// import { IoMdClose } from "../../../constants";

// export function MobileviewDrawer({ Draweropen, setDraweropen }) {
//   const closeDrawer = () => {
//     setDraweropen(false);
//   };

//   return ReactDOM.createPortal(
//     <Drawer
//       className="!bg-pastelGreen-500 max-h-max"
//       open={Draweropen}
//       onClose={closeDrawer}
//     >
//       <div className="mb-2 flex h-full items-center justify-between !bg-pastelGreen-500 p-4">
//         <Typography variant="h4" className="text-center">
//           KISSAN MITRA
//         </Typography>
//         <IconButton variant="text" onClick={closeDrawer}>
//           <IoMdClose className="size-9" />
//         </IconButton>
//       </div>
//       <Button className="mt-3 ml-5" size="sm">
//         Documentation
//       </Button>
//     </Drawer>,
//     document.getElementById("drawer-portal") // Target the portal container
//   );
// }
