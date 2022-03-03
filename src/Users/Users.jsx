import React from "react";
import classes from "./Users.module.css";
import Table from "../component/table";

const Users = () => {
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
