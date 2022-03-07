import React, { useContext } from "react";
import { UserContext } from "../../context";
import { NavLink } from "react-router-dom";
import classes from "./usersTable.module.css";

const Table = () => {
  const dataInfo = useContext(UserContext);
  return (
    <table className={classes.userTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created On</th>
          <th>Owner</th>
          <th>Action</th>
        </tr>
      </thead>
      {dataInfo && dataInfo.map((info) => (
        <tbody key={info.id} className={classes.tableMap}>
          <tr>
            <td>{info.id}</td>
            <td>{info.name}</td>
            <td>{info.createdOn}</td>
            <td>{info.owner}</td>
            <td>
              <NavLink to={"/account/" + info.id}>{info.action}</NavLink>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;