import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation is not supported by this browser.",
      });
      return;
    }

    const successCallback = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const errorCallback = (error) => {
      setLocation({
        latitude: null,
        longitude: null,
        error: error.message,
      });
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const watchId = navigator.geolocation.watchPosition(
      successCallback,
      errorCallback
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return location;
};

