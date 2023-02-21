import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>increment ++</button>
    </>
  );
}
