import { useState } from "react";

const ListNumber = () => {
  const [number, setNumber] = useState([10, 20, 30, 40, 50]);
  return (
    <>
      {number.map((num) => (
        <h4 key={num}> {num}</h4>
      ))}
      <button
        onClick={() => setNumber([...number, number[number.length - 1] + 10])}
      >
        increment ++
      </button>
    </>
  );
};
export default ListNumber;
