import React, {useState} from "react";
import {List} from "@material-ui/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Table = styled.div`
  width: 80vw;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // text-align: center;
  @media only screen and (max-width: 500px) {
    width: 50vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Title = styled.h3`
  width: 25%;
  @media only screen and (max-width: 850px) {
    width: 50%;
  }
`;
const Body = styled.div`
  margin-top: 10px;
  width: 25%;
  font-size: 1.1em;
`;
const SpanItem = styled.span`
  width: 50%;
`;
const JournalList = ({items, setItems}) => {
  const [editTitle, setEditTitle] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const [editContent, setEditContent] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const [editTags, setEditTags] = useState(null);
  const [editingTags, setEditingTags] = useState("");

  function submitTitle(id) {
    const updatedTitle = [...items].map((item) => {
      if (item.id === id) {
        item.title = editingTitle;
      }
      return item;
    });
    setItems(updatedTitle);
    setEditTitle(null);
  }

  function submitContent(id) {
    const updatedContent = [...items].map((item) => {
      if (item.id === id) {
        item.content = editingContent;
      }
      return item;
    });
    setItems(updatedContent);
    setEditContent(null);
  }

  function submitTags(id) {
    const updatedTags = [...items].map((item) => {
      if (item.id === id) {
        item.tags = editingTags;
      }
      return item;
    });
    setItems(updatedTags);
    setEditTags(null);
  }

  function deleteItem(id) {
    let updatedItems = [...items].filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  return (
    <List>
      <Table className="helloworld">
        <Row className="columns is-desktop">
          <Title className="column googleFont">Title</Title>
          <Title className="column googleFont">Content</Title>
          <Title className="column googleFont">Tags</Title>
          <Title className="column googleFont">Time</Title>
        </Row>
        {items.map((item) => (
          <Row className="columns is-desktop" key={item.id}>
            <Body className="column googleFont2">
              {console.log(items[0].title)}
              {item.id === editTitle ? (
                <>
                  <input
                    type="text"
                    onChange={(e) => setEditingTitle(e.target.value)}
                  />
                  <Button onClick={() => submitTitle(item.id)}>
                    Submit Edits
                  </Button>
                </>
              ) : (
                <>
                  <SpanItem>{item.title}</SpanItem>
                  <Button onClick={() => setEditTitle(item.id)}>Edit</Button>
                </>
              )}
            </Body>
            <Body className="column googleFont2">
              {item.id === editContent ? (
                <>
                  <input
                    type="text"
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <Button onClick={() => submitContent(item.id)}>
                    Submit Edits
                  </Button>
                </>
              ) : (
                <>
                  <SpanItem>{item.content}</SpanItem>
                  <Button onClick={() => setEditContent(item.id)}>Edit</Button>
                </>
              )}
            </Body>
            <Body className="column googleFont2">
              {item.id === editTags ? (
                <>
                  <input
                    type="text"
                    onChange={(e) => setEditingTags(e.target.value)}
                  />
                  <Button onClick={() => submitTags(item.id)}>
                    Submit Edits
                  </Button>
                </>
              ) : (
                <>
                  <SpanItem>{item.tags}</SpanItem>
                  <Button onClick={() => setEditTags(item.id)}>Edit</Button>
                </>
              )}
            </Body>
            <Body className="column googleFont2">
              <SpanItem>{item.date}</SpanItem>
            </Body>
            <Button onClick={() => deleteItem(item.id)}>Delete</Button>
          </Row>
        ))}
      </Table>
    </List>
  );
};

export default JournalList;
