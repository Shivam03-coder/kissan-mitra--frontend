import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Appcontainer from "./Appcontainer.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Appcontainer />
  </ThemeProvider>
);
