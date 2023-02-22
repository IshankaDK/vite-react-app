import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosDemo3 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

  return (
    <>
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

export default AxiosDemo3;
