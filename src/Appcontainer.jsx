import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { toastConfig } from "./configs/Toastconfig";

function Appcontainer() {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer {...toastConfig} />
        <App />
      </Provider>
    </>
  );
}

export default Appcontainer;