import React, { useState } from "react";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="user-card ">

      {/* <span className="badge">
        {user.role}
      </span> */}

      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>

      <button className="desc-btn" onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? "Hide Description" : "Show Description"}
      </button>

      {showDesc && <p className="description">{user.description}</p>}
    </div>
  );
};

export default UserCard;
