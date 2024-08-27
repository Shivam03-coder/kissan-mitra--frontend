import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { toastConfig } from "./configs/Toastconfig";
import "./components/features/config/i18next";
import SocketContext from "./components/features/chat/SocketContext";
function Appcontainer() {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer {...toastConfig} />
        <SocketContext>
          <App />
        </SocketContext>
      </Provider>
    </>
  );
}

export default Appcontainer;
