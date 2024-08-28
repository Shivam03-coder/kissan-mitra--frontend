import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import moment from "moment/moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetallMessagesQuery } from "../../../../redux/endpoints/appdataapi";
import { addMessageToCommunityData } from "../../../../redux/states/communitySlice";

const Rendermessage = ({ communityMessage }) => {
  const dispatch = useDispatch();

  // Fetch all messages using the query hook
  const { data, error, isLoading } = useGetallMessagesQuery();

  useEffect(() => {
    if (data) {
      // Dispatch the action to add messages to community data
      dispatch(addMessageToCommunityData(data));
    }
  }, [data, dispatch]); // Ensure useEffect runs whenever data or dispatch changes

  const timestamp = "2024-08-28T17:56:20.194Z";
  const formattedDate = moment(timestamp).format("DD MMM YYYY");
  const formattedTime = moment(timestamp).format("hh:mm A");

  return (
    <Timeline>
      {communityMessage &&
        communityMessage.map((msg, index) => {
          const timestamp = msg?.timestamp;
          const formattedDate = moment(timestamp).format("DD MMM YYYY");
          const formattedTime = moment(timestamp).format("hh:mm A");
          return (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <div className="size-[70px] flex-center">
                    <span className="text-3xl">
                      {msg.sender?.fullname?.charAt(0)}
                    </span>
                  </div>
                </TimelineIcon>
                <div>
                  <Typography className="uppercase font-Poppins text-xl font-medium"  color="blue-gray">
                    {msg.sender?.fullname}
                  </Typography>
                  <span className="font-Inter font-medium opacity-75">
                    {formattedDate}
                  </span>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  as={"div"}
                  className="font-normal rounded-3xl p-5 shadow-glass text-black font-Inter opacity-80 flex flex-col gap-4"
                >
                  {msg.content}
                  <span className="text-green-700 font-Inter">
                    {formattedTime}
                  </span>
                </Typography>
              </TimelineBody>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
};

export default Rendermessage;
