import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form from "./Form";
import JournalList from "./JournalList";
import styled from "styled-components";

const BlogPage = styled.div`
  // background-color: #e2e2e2;
  width: 100%;
  // height: 110vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const JournalSection = styled.section``;

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

  return (
    <JournalSection>
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
    </JournalSection>
  );
};

export default Jounal;
