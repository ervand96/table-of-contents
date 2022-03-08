import React from "react";
import Table from "../component/table/usersTable";
import classes from "./Users.module.css";

const Users = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <div className={classes.userTableSection}>
        <Table />
      </div>
    </div>
  );
};

export default Users;
