import axios from "axios";
import React, { useEffect,useState } from "react";

const AxiosDemo2 = () => {

  const [post, setPost] = useState({});


  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then(function (response) {
      console.log(response.data);
      setPost(response.data)
    });
  }, []);

  return (
    <>
    <h2>{post.title}</h2>
    <h4>{post.body}</h4>
    </>

  )
};

export default AxiosDemo2;
