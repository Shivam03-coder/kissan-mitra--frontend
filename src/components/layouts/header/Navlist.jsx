import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const navlinks = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Services", to: "/services" },
  { id: 3, label: "About", to: "/about-us" },
  { id: 4, label: "Contact", to: "/contact-us" },
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


