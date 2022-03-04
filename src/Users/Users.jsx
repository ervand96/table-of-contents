import React, {useContext} from "react";
import classes from "./Users.module.css";
import Table from "../component/table";
import {UserContext} from "../context";

const Users = () => {
  const user = useContext(UserContext);
  console.log(user, ">>>>>>");
  return (
    <div>
      <h1>Home Page</h1>

      <div className={classes.glbTable}>
        <Table />
      </div>
    </div>
  );
};

export default Users;
