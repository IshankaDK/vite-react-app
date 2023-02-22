import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, TextField, Grid } from "@mui/material";

const AxiosDemo5 = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
    userId: 1,
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function savePost() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts",newPost)
      .then((res) => {
        if (res.status === 201) {
          alert("Post Saved..! ");
          console.log(res);
        }
      })
      .catch((err) => console.log(err));

  }

  function handleChange(event) {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <TextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="body"
            name="body"
            label="Body"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disabled={false}
            color={"warning"}
            onClick={() => savePost()}
          >
            Save Post
          </Button>
        </Grid>
      </Grid>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
        </div>
      ))}
    </>
  );
};

export default AxiosDemo5;
