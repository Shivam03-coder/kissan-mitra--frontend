import React, { useState } from "react";
import { Header } from "../layouts/header/Header";
import useMediaquery from "../../hooks/usemediaQuery";

function Homepage() {
  const [Draweropen, setDraweropen] = useState(false);
  const isMobileview = useMediaquery(960);

  return (
    <>
      <Header
        Draweropen={Draweropen}
        isMobileview={isMobileview}
        setDraweropen={setDraweropen}
      />
    </>
  );
}

export default Homepage;
