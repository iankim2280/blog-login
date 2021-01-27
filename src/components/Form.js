import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Button, TextField} from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  display: flex;
`;

const Form = ({addItem}) => {
  let today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes();
  const [item, setItem] = useState({
    id: "",
    title: "",
    content: "",
    tags: "",
    date: date,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setItem({...item, [e.target.name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({...item, id: uuidv4()});
    setItem({...item, title: "", content: "", tags: ""});
  };

  return (
    <form
      className="submitForm"
      onSubmit={handleSubmit}
      style={{marginTop: "20px"}}
    >
      <Container>
        <TextField
          label="Title"
          name="title"
          type="text"
          onChange={handleChange}
          value={item.title}
        />
      </Container>
      <Container>
        <TextField
          label="Content"
          name="content"
          type="text"
          onChange={handleChange}
          value={item.content}
        />
      </Container>
      <Container>
        <TextField
          label="Tags"
          name="tags"
          type="text"
          onChange={handleChange}
          value={item.tags}
        />
      </Container>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
