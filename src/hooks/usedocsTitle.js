import { useEffect } from "react";
const useDocsTitle = (title) => {
  useEffect(() => {
    return () => {
      document.title = title;
    };
  }, [title]);
};

export default useDocsTitle;
