import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { RxAvatar } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMediaquery } from "../../../hooks/usemediaQuery";
function UserProfile() {
  const [Image, setImage] = useState(null);
  const { UserAvatar } = useSelector((state) => state.userauthstate);
  const isMobileView = useMediaquery(900); 
  useEffect(() => {
    if (UserAvatar) {
      setImage(UserAvatar);
    }
  }, [UserAvatar]);
  return (
    <Menu>
      <MenuHandler>
        {UserAvatar ? (
          <Avatar  className="cursor-pointer border border-black " size={isMobileView && "xl"} src={Image} alt="avatar" />
        ) : (
          <div
            className={`size-12 border-2 bg-green-500 border-black rounded-full font-Varela uppercase text-black text-3xl flex-center cursor-pointer`}
          >
            S
          </div>
        )}
      </MenuHandler>
      <MenuList className="!-mr-20 bg-custom-green-gradient ">
        <MenuItem className="flex items-center gap-2">
          <RxAvatar className="size-6 text-blue-700" />
          <Typography variant="small" className="font-medium  text-blue-900">
            <Link to="/user-profile/:id">My Profile</Link>
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-2">
          <IoIosHelpCircleOutline className="size-6 text-yellow-700" />
          <Typography variant="small" className="font-medium text-yellow-700">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <RiLogoutCircleLine className="size-6 text-red-700" />
          <Typography variant="small" className="font-medium text-red-700">
            Sign Out
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2 ">
          <RiLogoutCircleLine className="size-6 text-red-700 " />
          <Typography variant="small" className="font-medium text-red-700">
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserProfile;
