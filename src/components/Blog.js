import React from "react";
import Button from "@material-ui/core/Button";

const Blog = ({handleLogout}) => {
  return (
    <div className="blogPage">
      <Button
        className="logoutButton"
        variant="contained"
        color="primary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Blog;
