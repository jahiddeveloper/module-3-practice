import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    const addNewNumber = count + 1;
    setCount(addNewNumber);
  };

  const removeHandler = () => {
    if(count === 0) {
        alert("You don’t have enough products.")
        return;
    }
    const removeNewNumber = count - 1;
    setCount(removeNewNumber);
  }

  const CounterStyle = {
    marginBottom: "20px",
    border: "2px solid tomato",
    padding: "20px",
    borderRadius: "20px",
  };

  const btnStyle = {
    marginLeft: "20px"
  }

  return (
    <div style={CounterStyle}>

        {count > 5 && <p>You already have <strong>five +</strong> products.</p>}
        {count > 10 && <p>You already have <strong>ten +</strong> products.</p>}

      <h2>Count : {count}</h2>
      <button onClick={addHandler}>Add to Bag</button>
      <button style={btnStyle} onClick={removeHandler}>Add to Bag</button>
    </div>
  );
}
