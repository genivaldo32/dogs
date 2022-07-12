import React from "react";
import { useParams } from "react-router-dom";
import { Feed } from "../Feed/Feed";

export const UserProfile = () => {
  const { user } = useParams;
  return (
    <seciton className="container mainSection">
      <h1 className="tite">{user}</h1>
      <Feed user={user} />
    </seciton>
  );
};
