import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>{username}</h1>
      <h2>{city}</h2>
    </div>
  );
}

export default Home;
