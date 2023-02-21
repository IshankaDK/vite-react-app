import { useState } from "react";

const Detail = () => {
  const [person, setPerson] = useState({
    name: "Nuwan",
    age: 20,
    salary: 75000,
    address: {
      no: 120 / 2,
      street: "temple street",
      city: "matara",
    },
  });

  return (
    <>
      <h4>Name : {person.name}</h4>
      <h4>Age : {person.age}</h4>
      <h4>Salary : {person.salary}</h4>
      <p>
        Address : {person.address.no}, {person.address.street},
        {person.address.city}
      </p>
      <button onClick={() => setPerson({ ...person, name: "Saman", age: 55 })}>
        change person
      </button>
    </>
  );
};

export default Detail;
