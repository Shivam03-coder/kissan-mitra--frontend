import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setSocket } from "../../../redux/states/socketSlice";
import { SetCommunityMessagedata } from "../../../redux/states/communitySlice";

const SocketContext = ({ children }) => {
  const { Registerd_User_info } = useSelector((state) => state.userauthstate);
  const dispatch = useDispatch();

  const UserId = useMemo(
    () => Registerd_User_info?._id || "",
    [Registerd_User_info]
  );

  useEffect(() => {
    let socket;

    if (UserId) {
      socket = io("http://localhost:5130/", {
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
        dispatch(SetCommunityMessagedata(newMessage));
      });
      dispatch(setSocket(socket));
    }

    return () => {
      if (socket) {
        socket.off("receiveMessage");
        socket.disconnect();
        console.log("Connection Lost");
      }
    };
  }, [UserId, dispatch]);

  return <>{children}</>;
};

export default SocketContext;
