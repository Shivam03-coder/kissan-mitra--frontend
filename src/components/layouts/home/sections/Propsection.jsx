import React from "react";
import {
  ecoimage,
  freshimage,
  safeimage,
  easyimage,
} from "../../../../constants";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Carddata = [
  {
    id: 1,
    img: ecoimage,
    label: "Eco",
  },
  {
    id: 2,
    img: freshimage,
    label: "Fresh",
  },
  {
    id: 3,
    img: safeimage,
    label: "Safe",
  },
  {
    id: 4,
    img: easyimage,
    label: "Easy",
  },
];

function Propsection() {
  return (
    <div className="flex-center gap-10 bg-pastelGreen-400 py-8 flex-wrap">
      {Carddata.map(({ id, img, label }, i) => (
        <Card key={id} className="mt-6 w-40 md:w-60 flex-center">
          <CardBody>
            <img  src={img} alt="img" />
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="h5" >{label}</Typography>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Propsection;
