import React from "react";
import Navbar from "../utilities/navbar";
import PostList from "./PostList";

const MainPost = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PostList />
    </React.Fragment>
  );
};

export default MainPost;
