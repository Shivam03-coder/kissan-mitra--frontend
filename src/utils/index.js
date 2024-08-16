import { format } from "date-fns";

export const getTodaysDate = () => {
  const today = new Date();
  return format(today, "dd MMMM yyyy");
};
export const getTodaysDatewithoutYear = () => {
  const today = new Date();
  return format(today, "dd MMMM");
};

export const getCurrentTime = () => {
  
}