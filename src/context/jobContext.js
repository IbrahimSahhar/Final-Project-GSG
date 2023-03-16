import { createContext, useContext } from "react";
import useJob from "../hooks/useJobReducer";

const jobContext = createContext(null);

export const useJobContext = () => {
  return useContext(jobContext);
};

const JobProvider = ({ children }) => {
  const general = useJob();
  return <jobContext.Provider value={general}>{children}</jobContext.Provider>;
};

export default JobProvider;
