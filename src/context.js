import React from "react";
import {usersInfo} from "./Utils/constants";

export const UserContext = React.createContext();

export const Provider = (props) => {
  return (
    <UserContext.Provider value={usersInfo}>
      {props.children}
    </UserContext.Provider>
  );
};
