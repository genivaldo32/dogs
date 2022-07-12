import React from "react";
import { useParams } from "react-router-dom";
import { Feed } from "../Feed/Feed";
import { Head } from "../Helpers/Head";

export const UserProfile = () => {
  const { user } = useParams;
  return (
    <seciton className="container mainSection">
      <Head title={user} />
      <h1 className="tite">{user}</h1>
      <Feed user={user} />
    </seciton>
  );
};
