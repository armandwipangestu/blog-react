import React from "react";
import Navbar from "../utilities/navbar";
import PostList from "../posts/PostList";

const BlogHome = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PostList />
    </React.Fragment>
  );
};

export default BlogHome;
