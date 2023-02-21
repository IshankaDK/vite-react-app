import { useState } from "react";
import Count from "./useStateExample/Count";
import "./App.css";
import Detail from "./useStateExample/Detail";
import ListNumber from "./useStateExample/ListNumber";
import { ListPerson } from "./useStateExample/ListPerson";
import UseEffectDemo from "./useEffectExample/UseEffectDemo";


const TODOS = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];


function App() {
  const [name, setName] = useState("kamal");

  return (
    <div className="App">
      <h1>Hellow, {name}</h1>
      <button onClick={() => setName("Nimal")}>change name to nimal</button>
      {/* <Count /> */}
      {/* <Detail /> */}
      {/* <ListNumber /> */}
      {/* <ListPerson 
       */}
       <UseEffectDemo />
     
    </div>
  );
}

export default App;
