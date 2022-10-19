import React from "react";
import Navbar from "../utilities/navbar";
import PostList from "../posts/PostList";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PostList />
    </React.Fragment>
  );
};

export default Home;
