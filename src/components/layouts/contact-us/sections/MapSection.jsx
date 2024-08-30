import React from "react";
import { useMediaquery } from "../../../../hooks/usemediaQuery";

const MapSection = () => {
  const IsMobileView = useMediaquery(900);
  return (
    <iframe
      className="rounded-3xl shadow-inner"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17033.958703287313!2d75.87676065099531!3d22.733523814610393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725013139237!5m2!1sen!2sin"
      width={IsMobileView ? "350" : "500"}
      height={IsMobileView ? "350" : "450"}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapSection;
