import React, { useCallback, useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { OpenMessageModel } from "../../../../redux/states/communitySlice";
import { IoCloseCircleOutline } from "react-icons/io5";

export function MessageDialog() {
  const { messagemodel } = useSelector((state) => state.community);
  const [Message, setMessage] = useState("");
  const { Registerd_User_info } = useSelector((state) => state.userauthstate);
  const { socket } = useSelector((state) => state.socket);
  const UserId = useMemo(
    () => Registerd_User_info?._id || "",
    [Registerd_User_info]
  );
  const dispatch = useDispatch();

  const handlecloseMessageModel = useCallback(() => {
    dispatch(OpenMessageModel());
  }, [dispatch]);

  const handleMessageBox = (e) => {
    setMessage(e.target.value);
  };

  const SendMessage = () => {
    const messagecontent = {
      sender: UserId,
      room: "Kissan-Mitra-Community",
      messageType: "text",
      content: Message,
    };
    console.log("🚀 ~ SendMessage ~ messagecontent:", messagecontent)
    socket.emit("sendMessage", messagecontent);
    setMessage("");
  };

  return (
    <Dialog className="bg-custom-green-gradient" open={messagemodel} size="xs">
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <Typography className="mb-1" variant="h4">
            ADD COMMENT
          </Typography>
        </DialogHeader>
        <IconButton className="mr-3" onClick={handlecloseMessageModel}>
          <IoCloseCircleOutline className="size-8" />
        </IconButton>
      </div>
      <DialogBody>
        <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
          Write the message.
        </Typography>
        <div className="grid gap-6">
          <Textarea
            className="text-xl"
            labelProps={{ className: "text-xl" }}
            label="Message"
            value={Message}
            onChange={(e) => handleMessageBox(e)}
          />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button
          onClick={SendMessage}
          variant="gradient"
          color="light-green"
          className="text-black"
        >
          send message
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
