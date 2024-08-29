import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Drawer,
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaTachometerAlt, FaInbox, FaChevronDown } from "react-icons/fa";
import { OpenMobileviewNavbar } from "../../../redux/states/communitySlice";
import { createPortal } from "react-dom";
import UserProfile from "../userprofile/UserProfile";
import { navListMenuItems } from "../../../data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "../../features/language/LanguageSelector";
import { ContactIcon, HomeIcon, ProfileIcon } from "../../../constants";


 function MobileviewNavbar() {
  const { MobileviewNavbar } = useSelector((state) => state.community);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(0);

  const { t } = useTranslation();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const closeDrawer = useCallback(() => {
    dispatch(OpenMobileviewNavbar());
  }, [dispatch]);

  useEffect(() => {
    if (MobileviewNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [MobileviewNavbar]);

  return createPortal(
    <Drawer
      open={MobileviewNavbar}
      onClose={closeDrawer}
      overlayProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
      className="bg-transparent"
    >
      <Card
        shadow={false}
        className="h-full w-full rounded-none bg-custom-greenlight-gradient p-4 overflow-hidden"
        style={{
          overflow: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <div className="mb-2 flex-center gap-4">
          <UserProfile />
          <Typography
            as={"div"}
            className="text-lg flex-center font-Inter font-medium"
          >
            <LanguageSelector />
          </Typography>
        </div>
        <div
          style={{
            overflow: "scroll",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          className="h-full overflow-y-auto"
        >
          <List>
            <Accordion
              open={open === 1}
              icon={
                <FaChevronDown
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <Link to="/" className="text-lg flex-center text-black">
                <ListItem>
                  <ListItemPrefix>
                    <HomeIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  {t("Navbar.navList.home")}
                </ListItem>
              </Link>
              <Link to={"/contact"} className="text-lg flex-center text-black">
                <ListItem>
                  <ListItemPrefix>
                    <ContactIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  {t("Navbar.navList.contact_us")}
                </ListItem>
              </Link>
              <Link
                to={"/user-profile/:id"}
                className="text-lg flex-center text-black"
              >
                <ListItem>
                  <ListItemPrefix>
                    <ProfileIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  {t("Navbar.navList.profile")}
                </ListItem>
              </Link>
              <hr className="my-2 border-green-900" />
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaTachometerAlt className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography className="mr-auto font-semibold">
                    {t("Navbar.title")}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  {navListMenuItems.map((items) => {
                    const IconComponents = items.icon;
                    return (
                      <Link key={items.path} to={items.path} className="text-lg text-black">
                        <ListItem >
                          <ListItemPrefix>
                            <IconComponents className="h-5 w-5 text-black" />
                          </ListItemPrefix>
                          {t(items.title)}
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </AccordionBody>
            </Accordion>
          </List>
        </div>
      </Card>
    </Drawer>,
    document.getElementById("drawer-portal")
  );
}

export default MobileviewNavbar