import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context";
import classes from "./accounts.module.css";

const DataUser = () => {
  const { id } = useParams();
  const user = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (id && user?.users) {
      const users = user.users.find((users) => users.id == id);
      setUserData(users);
    }
  }, [id, user]);

  useEffect(() => {

  })

  return (
    <div className={classes.tableSection}>
      <h1>User {id}</h1>
      {userData && (
        <table className={classes.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <td>{userData.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{userData.name}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{userData.owner}</td>
            </tr>
            <tr>
              <th>Created On</th>
              <td>{userData.createdOn}</td>
            </tr>
            <tr>
              <th>Update On</th>
              <td>{userData.updatedOn}</td>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

export default DataUser;
