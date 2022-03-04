import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {usersInfo} from "../Utils/constants";
import classes from "./account.module.css";

const Accounts = () => {
  const {id} = useParams();
  const [fillUser, setFillUser] = useState(null);

  useEffect(() => {
    if (id) {
      const people = usersInfo.find((users) => users.id == id);
      setFillUser(people);
    }
  }, [id]);

  return (
    <div className={classes.div}>
      <h1>User {id}</h1>
      {fillUser && (
        <table className={classes.userTable}>
          <thead>
            <tr>
              <th>ID</th>
              <td>{fillUser.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{fillUser.name}</td>
            </tr>
            <tr>
              <th>Owner</th>
              <td>{fillUser.owner}</td>
            </tr>
            <tr>
              <th>Created On</th>
              <td>{fillUser.createdOn}</td>
            </tr>
            <tr>
              <th>Update On</th>
              <td>{fillUser.updatedOn}</td>
            </tr>
          </thead>
        </table>
      )}
    </div>
  );
};

export default Accounts;
