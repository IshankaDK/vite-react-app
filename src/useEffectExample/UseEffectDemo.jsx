import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nimal");

  useEffect(() => {
    console.log("useEffect without deps array");
    return () =>{
        console.log("returned");
    }
  });

  useEffect(() => {
    console.log("useEffect with empty deps array");
    // apiCallings
  },[]);

  useEffect(() => {
    console.log("useEffect with count in deps array");
  },[count]);

  useEffect(() => {
    console.log("useEffect with name in deps array");
   
  },[name]);

  return (
    <>
      <h1>count is: {count}</h1>
      <h1>Name is: {name}</h1>
      <button onClick={() => setCount(count + 1)}>
        increment number
      </button>
      <button onClick={() => setName("Nuwan")}>
        Change Name
      </button>
    </>
    
  );
};

export default UseEffectDemo;
