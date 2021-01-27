import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import JournalList from "./JournalList";
import Single from "./Single";
import styled from "styled-components";
import {Switch, Route, BrowserRouter as Router, Link} from "react-router-dom";
import Anchor from "@material-ui/core/Link";

const BlogPage = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 110vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const JournalSection = styled.section``;
const BreadCrumbSection = styled.section`
  height: 60px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;

const LOCAL_STORAGE_KEY = "Journal Items";

const Jounal = ({handleLogout}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageItems) {
      setItems(storageItems);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(item) {
    // adds new items to beginning of itemss array
    setItems([item, ...items]);
  }
  z;

  function handleClick(e) {
    e.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  function Home() {
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
        <Container>
          <Typography
            className="journalTitle"
            style={{padding: 16, fontWeight: "bold"}}
            variant="h2"
          >
            Please add your items.
          </Typography>
          <Form addItem={addItem} />
          <JournalList items={items} setItems={setItems} />
        </Container>
      </BlogPage>
    );
  }
  return (
    <Router>
      <JournalSection>
        <BreadCrumbSection>
          <Breadcrumbs aria-label="breadcrumb" style={{marginLeft: "10px"}}>
            {/* <li>
            <Link to="/">Home</Link>
          </li> */}
            <Anchor color="inherit" href="/" onClick={handleClick}>
              <Link to="/">Home</Link>
            </Anchor>
            {/* <li>
            <Link to="/single">Single</Link>
          </li> */}
            <Anchor color="inherit" href="/" onClick={handleClick}>
              <Link to="/single">Single</Link>
            </Anchor>
          </Breadcrumbs>
        </BreadCrumbSection>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
        </Switch>
      </JournalSection>
    </Router>
  );
};

export default Jounal;
