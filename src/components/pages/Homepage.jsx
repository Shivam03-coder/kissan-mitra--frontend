import React, { useState } from "react";
import { Header } from "../layouts/header/Header";
import {useMediaquery} from "../../hooks/usemediaQuery";
import Meteorsvg from "../shared/svgs/Meteorsvg";
import { Footer } from "../layouts/footer/Footer";
import HomeConatiner from "../layouts/home/HomeConatiner";

function Homepage() {
  const [Draweropen, setDraweropen] = useState(false);
  const isMobileview = useMediaquery(960);

  return (
    <div className="relative min-h-screen">
      <Meteorsvg />
      <header className="sticky top-0 z-30">
        <Header
          Draweropen={Draweropen}
          isMobileview={isMobileview}
          setDraweropen={setDraweropen}
        />
      </header>
      <main>
        <HomeConatiner />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Homepage;
