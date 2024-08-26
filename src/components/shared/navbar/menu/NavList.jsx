import { Link } from "react-router-dom";
import NavListMenu from "./NavListMenu";
import {
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";

function NavList() {
    return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
        <Typography
      className="text-lg font-Inter font-medium"
        >
          <Link to="/">
          <ListItem className="flex items-center gap-2 py-2 pr-4">HOME</ListItem>
          </Link>
        </Typography>
        <NavListMenu />
        <Typography
       className="text-lg font-Inter font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            CONTACT US
          </ListItem>
        </Typography>
      </List>
    );
  }

export default NavList;