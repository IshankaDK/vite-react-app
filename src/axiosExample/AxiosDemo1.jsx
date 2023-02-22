import axios from "axios";
import React, { useEffect } from "react";

const AxiosDemo1 = () => {
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts/1")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    }).then(function (response) {
      console.log(response.data);
    });
  }, []);

  return <div>AxiosDemo</div>;
};

export default AxiosDemo1;
