import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const AxiosDemo4 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function savePost() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
        </div>
      ))}

      <Button
        variant="contained"
        disabled={false}
        color={"warning"}
        onClick={() => savePost()}
      >
        to about pag
      </Button>
    </>
  );
};

export default AxiosDemo4;
