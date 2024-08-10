import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { AvatarStack } from "../../../shared/avatar/Avatarstack";
import { Staricon } from "../../../../constants";

function Contentsection() {
  return (
    <section className=" space-y-4 md:space-y-6 mx-auto ">
      <Typography variant="h2" className="text-5xl  md:text-6xl font-Varela ">
        We Are The <br /> Kissan Mitra
      </Typography>
      <Typography variant={"h5"} className="opacity-60">
        Empowering Farmers, Growing Together
      </Typography>
      <Button className="bg-pastelGreen-500 text-sm text-black rounded-3xl">
        More info
      </Button>
      <div className="flex items-center gap-5">
        <AvatarStack />
        <Typography className="flex items-center gap-3">
          <Staricon className="size-8 text-goldentainoi-500 " />
          <Typography variant="h6" className="opacity-60 hidden md:block">
            Empowering Farmers with Real-Time <br /> Insights and Community
            Support
          </Typography>
        </Typography>
      </div>
    </section>
  );
}

export default Contentsection;
