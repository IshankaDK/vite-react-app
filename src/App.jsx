import { useState } from "react";
import Count from "./Count";
import "./App.css";
import Detail from "./Detail";
import ListNumber from "./ListNumber";
import { ListPerson } from "./ListPerson";

function App() {
  const [name, setName] = useState("kamal");

  return (
    <div className="App">
      <h1>Hellow, {name}</h1>
      <button onClick={() => setName("Nimal")}>change name to nimal</button>
      {/* <Count /> */}
      {/* <Detail /> */}
      {/* <ListNumber /> */}
      <ListPerson />
    </div>
  );
}

export default App;
