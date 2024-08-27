import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "../../../redux/states/socketSlice";

const SocketContext = ({ children }) => {
  const { Registerd_User_info } = useSelector((state) => state.userauthstate);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  const UserId = useMemo(
    () => Registerd_User_info?._id || "",
    [Registerd_User_info]
  );

  useEffect(() => {
    if (UserId) {
      const socket = io("http://localhost:5130/", {
        withCredentials: true,
        query: {
          UserId: UserId,
        },
        transports: ["websocket"],
      });

      socket.on("connect", () => {
        console.log("Connected to Network");
      });

      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      dispatch(setSocket(socket));
    }

    // Cleanup function for socket disconnection
    return () => {
      socket.off("receiveMessage", handleReceiveMessages);
      socket.disconnect();
      console.log("Connection Lost");
    };
  });

  return <>{children}</>;
};

export default SocketContext;
