import React from "react";

const Blog = ({handleLogout}) => {
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      Blog
    </div>
  );
};

export default Blog;
