import { Header } from "../layouts/header/Header";
import Meteorsvg from "../shared/svgs/Meteorsvg";
import { Footer } from "../layouts/footer/Footer";
import HomeConatiner from "../layouts/home/HomeConatiner";
import Navigationbar from "../shared/navbar/Navigationbar";

function Homepage() {
  const isUserAuthenicated = true;
  return (
    <div className="relative min-h-screen">
      <Meteorsvg />
      <header className="sticky top-0 z-30">
        {isUserAuthenicated ? <Navigationbar /> : <Header />}
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
