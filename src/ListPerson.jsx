import { useState } from "react";

export const ListPerson = () => {
  const [personList, setPersonList] = useState([
    {
      id: 1,
      name: "Nuwan",
      age: 20,
      salary: 75000,
    },
    {
      id: 2,
      name: "Kamal",
      age: 22,
      salary: 85000,
    },
  ]);
  return (
    <>
      {personList.map((value,index) => (
        <h4 key={index}>
          {value.name}, {value.age}, {value.salary}
        </h4>
      ))}
      <button
        onClick={() =>
          setPersonList([
            ...personList,
            { id: 3, name: "Suresh", age: 21, salary: 65000 },
          ])
        }
      >
        add person
      </button>
    </>
  );
};
