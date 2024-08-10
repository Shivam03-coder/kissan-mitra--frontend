import { useEffect, useState } from "react";

export const useMediaquery = (query) => {
  const [Matches, setMatches] = useState(null);
  useEffect(() => {
      const Media = window.matchMedia(`(max-width:${Number(query)}px)`);
      if (Media.matches !== Matches) {
      setMatches(Media.matches);
    }

    window.addEventListener("resize", () => {
      setMatches(Media.matches);
    });

    return () => {
        window.removeEventListener("resize", () => {
        setMatches(Media.matches);
      });
    };
  }, [query, Matches]);
  return Matches;
};