import React from "react";

function App() {
  const [item, setItem] = React.useState("");

  const [arr, serArr] = React.useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addArray() {
    serArr([...arr, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arr.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
