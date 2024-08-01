import React, { useState } from "react";
import { Header } from "../layouts/header/Header";
import useMediaquery from "../../hooks/usemediaQuery";
import Maincontetnt from "../layouts/home/Maincontetnt";
import Meteorsvg from "../shared/svgs/Meteorsvg";
import { Footer } from "../layouts/footer/Footer";

function Homepage() {
  const [Draweropen, setDraweropen] = useState(false);
  const isMobileview = useMediaquery(960);

  return (
    <div className="relative">
      <Meteorsvg />
      <header className="sticky top-0 z-30">
        <Header
          Draweropen={Draweropen}
          isMobileview={isMobileview}
          setDraweropen={setDraweropen}
        />
      </header>
      <main>
        <Maincontetnt />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
