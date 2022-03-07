import React from "react";
import { users } from "./Utils/constants";

export const UserContext = React.createContext();

export const Provider = (props) => {
    return (
        <UserContext.Provider value={users}>
            {props.children}
        </UserContext.Provider>
    );
};