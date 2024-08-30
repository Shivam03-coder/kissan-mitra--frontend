import { Link } from "react-router-dom";
import NavListMenu from "./NavListMenu";
import { Typography, List, ListItem } from "@material-tailwind/react";
import LanguageSelector from "../../../features/language/LanguageSelector";
import { useTranslation } from "react-i18next";

function NavList() {
  const { t } = useTranslation(); // Initialize the hook

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row space-y-5 md:space-y-0 lg:p-1">
      <Typography className="text-lg font-Inter font-medium">
        <Link to="/">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            {t("Navbar.navList.home")} {/* Translate HOME */}
          </ListItem>
        </Link>
      </Typography>
      <NavListMenu />
      <Typography className="text-lg font-Inter font-medium">
        <Link to="/kissan-mitra/contact-us/:id">
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            {t("Navbar.navList.contact_us")} {/* Translate CONTACT-US */}
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as={"div"}
        className="text-lg flex-center font-Inter font-medium"
      >
        <LanguageSelector />
      </Typography>
    </List>
  );
}

export default NavList;
