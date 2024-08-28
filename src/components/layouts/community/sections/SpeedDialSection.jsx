import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import { RainIcon } from "../../../../constants";
import { AiOutlinePlus } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineStarOutline } from "react-icons/md";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenMessageModel } from "../../../../redux/states/communitySlice";
import Rendermessage from "./Rendermessage";

function SpeedDialSection() {
  const dispatch = useDispatch();

  const handlemessagemodel = useCallback(() => {
    dispatch(OpenMessageModel());
  }, [dispatch]);
  return (
    <div className="fixed right-8 bottom-8 bg-transparent w-[100px]  h-[100px] flex items-center justify-center rounded-full">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton
            color="white"
            size="lg"
            className="rounded-full w-[200px] h-[200px] border bg-yellow-400 border-blue-gray-50 shadow-xl"
          >
            <AiOutlinePlus className="h-10 w-10 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-custom-greentransparent-gradient shadow-xl shadow-black/10">
          <SpeedDialAction
            onClick={handlemessagemodel}
            className="bg-yellow-500"
          >
            <VscComment className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction className="bg-yellow-500">
            <AiOutlineLike className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction className="bg-yellow-500">
            <MdOutlineStarOutline className="h-5 w-5" />
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}

export default SpeedDialSection;
