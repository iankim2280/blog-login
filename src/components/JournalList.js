import React, {useState} from "react";
import {List} from "@material-ui/core";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const ColouredOuter = styled.div`
  background-color: #fbf3f394;
`;

const Container = styled.div`
  margin: 15px;
`;

const Table = styled.div`
  width: 80vw;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: 2em;
`;
const Div100 = styled.div`
  width: 100%;
`;
const Between = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const Div70 = styled.div`
  margin-top: 15px;
  width: 70%;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;
const SpanItem = styled.span`
  // display: inline-block;
  width: 100%;
  overflow: hidden;

  font-size: 1.1em;
`;

const ContentItem = styled.span`
  width: 100%;
  overflow: hidden;

  font-size: 1.3em;
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
        {items.map((item) => (
          <ColouredOuter className="card mg-b-15" key={item.id}>
            <Container>
              <div className="card-content">
                <div className="media">
                  <div className="media-content media-content-container">
                    <SpanItem className="googleFont">
                      <Title>
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
                            <Button onClick={() => setEditTitle(item.id)}>
                              Edit
                            </Button>
                          </>
                        )}
                      </Title>
                    </SpanItem>
                    <div className="title1">
                      <div className="title2">
                        <Div100 className="googleFont2">
                          {item.id === editContent ? (
                            <>
                              <input
                                type="text"
                                onChange={(e) =>
                                  setEditingContent(e.target.value)
                                }
                              />
                              <Button onClick={() => submitContent(item.id)}>
                                Submit Edits
                              </Button>
                            </>
                          ) : (
                            <>
                              <ContentItem>{item.content}</ContentItem>
                              <Button onClick={() => setEditContent(item.id)}>
                                Edit
                              </Button>
                            </>
                          )}
                        </Div100>
                      </div>
                      <Between className="title3">
                        <Div70 className="googleFont2">
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
                              <Button onClick={() => setEditTags(item.id)}>
                                Edit
                              </Button>
                            </>
                          )}
                        </Div70>
                        <div className="mg-t-15">
                          <SpanItem className="googleFont2">
                            {item.date}
                          </SpanItem>
                          <SpanItem className="googleFont2">
                            <Button onClick={() => deleteItem(item.id)}>
                              Delete
                            </Button>
                          </SpanItem>
                        </div>
                      </Between>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </ColouredOuter>
        ))}
      </Table>
      {/* <SingleItem items={items} setItems={setItems} /> */}
    </List>
  );
};

export default JournalList;
