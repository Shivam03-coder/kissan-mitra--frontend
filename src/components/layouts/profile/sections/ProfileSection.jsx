import React, { useEffect, useMemo, useState } from "react";
import { FiCamera } from "react-icons/fi";
import { Button } from "@material-tailwind/react";
import { useUploadProfileImageMutation } from "../../../../redux/endpoints/userauthapi";
import { useDispatch, useSelector } from "react-redux";
import { setUserAvatar } from "../../../../redux/states/userauthstate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadProfileImage] = useUploadProfileImageMutation();
  const dispatch = useDispatch();
  const { UserAvatar } = useSelector((state) => state.userauthstate);

  useEffect(() => {
    if (UserAvatar) {
      setProfileImage(UserAvatar);
    }
  }, [UserAvatar]);

  const handleProfileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
      setFile(uploadedFile);
    }
  };

  const handleSave = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await uploadProfileImage(formData).unwrap();
        console.log("🚀 ~ handleSave ~ response:", response);
        dispatch(setUserAvatar(response?.profilePhoto));
        toast.success("Image uploaded successfully");
      } catch (error) {
        console.log("🚀 ~ handleSave ~ error:", error);
        toast.error("Failed to upload image");
      }
    }
  };

  return (
    <section className="flex  flex-col gap-4">
      <div className="relative w-44 h-44 rounded-full overflow-hidden">
        <input
          type="file"
          id="profileUpload"
          className="hidden"
          onChange={handleProfileUpload}
        />
        <label
          htmlFor="profileUpload"
          className="cursor-pointer block w-full h-full rounded-full overflow-hidden relative"
        >
          {profileImage ? (
            <img
              src={profileImage || UserAvatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full bg-green-200 text-gray-500 rounded-full">
              <FiCamera className="text-2xl" />
              <span className="text-sm">Add Photo</span>
            </div>
          )}
          <div className="absolute inset-0 flex justify-center items-center bg-green-500 bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
            <FiCamera className="text-white text-2xl" />
          </div>
        </label>
      </div>
      <Button className="bg-yellow-700 text-xl text-black" onClick={handleSave}>
        SAVE
      </Button>
    </section>
  );
};

export default ProfileSection;
