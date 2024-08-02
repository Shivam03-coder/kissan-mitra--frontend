import React from "react";
import Appinfosection from "./section/Appinfosection";
import BlobSvg from "../../shared/svgs/Blobsvg";
import Snowsvg from "../../shared/svgs/Snowsvg";
import LoginForm from "../../features/authentication/Loginform";
import Signupform from "../../features/authentication/Signupform";

const Authcontent = () => {
  const isUserRegisterd = false;

  return (
    <div className="grid md:grid-cols-2 place-items-center">
      <section className="bg-secondary-main overflow-hidden bg-pastelGreen-200 size-full relative">
        <BlobSvg />
        <Appinfosection />
      </section>
      <section className="relative place-self-stretch  overflow-hidden">
        <Snowsvg />
        {isUserRegisterd ? <LoginForm /> : <Signupform />}
      </section>
    </div>
  );
};

export default Authcontent;
