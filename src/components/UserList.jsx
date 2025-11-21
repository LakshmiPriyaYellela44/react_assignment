import React, { useState, useEffect } from "react";
import usersData from "../data/users";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

//   const randomColor = () => {
//     const colors = ["#FF5733", "#33C1FF", "#8D33FF", "#33FF57", "#FFC133"];
//     return colors[Math.floor(Math.random() * colors.length)];
//   };

  useEffect(() => {
    const updated = usersData.map((u) => ({
      ...u,
      highlight: u.age > 25,
      badgeColor: randomColor()
    }));
    setUsers(updated);
  }, []);

  return (
    <div className="userlist-container">
      <h1 className="title">All Users</h1>

      <div className="grid-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
