import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const BlogPage = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 110vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Single = ({handleLogout}) => {
  return (
    <BlogPage className="blogPage">
      <Button
        className="logoutButton"
        variant="contained"
        color="primary"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </BlogPage>
  );
};

export default Single;
