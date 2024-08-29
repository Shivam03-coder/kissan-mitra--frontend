import React from "react";
import UserinfoSection from "./sections/UserinfoSection";
import ProfileSection from "./sections/ProfileSection";

const ProfileContainer = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    contactNumber: "+1234567890",
    address: "123 Main St, Anytown, USA",
    otherInfo: "Additional information about the user.",
  };
  return (
    <div className="min-h-screen pt-9 bg-custom-light-green-to-white">
      <section className=" w-[90%] mx-auto space-y-6">
        <section className="grid md:grid-cols-2 place-items-center">
          <ProfileSection />
          <UserinfoSection user={user} />
        </section>
      </section>
    </div>
  );
};

export default ProfileContainer;
