import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "1234567890";
  const email = "shubham@gmail.com";
  return (
    <AppContext.Provider value={{phone, email}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
