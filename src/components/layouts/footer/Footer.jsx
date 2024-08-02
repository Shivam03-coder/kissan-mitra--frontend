import { Typography } from "@material-tailwind/react";
import Wavesvg from "../../shared/svgs/Wavesvg";

export function Footer() {
  return (
    <section className="relative">
      <Wavesvg />
      <footer className="w-full  bg-transparent  p-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="logo-ct"
            className="w-10"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <Typography className="text-center font-normal">
          &copy; 2023 KISSAN MITRA
        </Typography>
      </footer>
    </section>
  );
}
