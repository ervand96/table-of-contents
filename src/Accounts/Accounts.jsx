import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context";
import classes from "./accounts.module.css";

const Accounts = () => {
  const { id } = useParams();
  const [findUser, setFindUser] = useState(null);
  const peopleInfo = useContext(UserContext);

  useEffect(() => {
    if (id) {
      const people = peopleInfo.find((users) => users.id == id);
      setFindUser(people);
    }
  }, [id]);

  return (
    <div className={classes.dataUser}>
      <h1>User {id}</h1>
      {findUser && (
        <table className={classes.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <td>{findUser.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{findUser.name}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{findUser.owner}</td>
            </tr>
            <tr>
              <th>Created On</th>
              <td>{findUser.createdOn}</td>
            </tr>
            <tr>
              <th>Update On</th>
              <td>{findUser.updatedOn}</td>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

export default Accounts;
