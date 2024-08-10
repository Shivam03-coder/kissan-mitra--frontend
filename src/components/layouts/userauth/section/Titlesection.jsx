import { Avatar, Typography } from "@material-tailwind/react";

const Titlesection = ({ msg }) => {
  return (
    <section className="Col-center gap-4">
      <Typography
        className="text-secondary-prime font-Inter font-bold text-center mt-8"
        variant="h2"
      >
        {msg}
      </Typography>
    </section>
  );
};

export default Titlesection;