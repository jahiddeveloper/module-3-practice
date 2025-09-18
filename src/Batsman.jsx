import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const singleHandler = () => {
    const updatedSingles = runs + 1;
    setRuns(updatedSingles);
  };

  const fourHandler = () => {
    const updatedFours = runs + 4;
    setRuns(updatedFours);
  };

  const SixHandler = () => {
    const updatedSixes = runs + 6;
    setRuns(updatedSixes);
  };

  const BatsmanStyle = {
    marginBottom: "20px",
    border: "2px solid tomato",
    padding: "20px",
    borderRadius: "20px",
  };

  const btnStyle = {
    marginLeft: "20px",
  };
  

  return (
    <div style={BatsmanStyle}>

        {runs > 50 && <h3>Current quantity = <b>50 +</b></h3>}
        {runs > 100 && <h3>Current quantity = <b>100 +</b></h3>}

      <h3>Player : Bangla Batsman</h3>
      <h1>Score : {runs}</h1>
      <button onClick={singleHandler}>Single</button>
      <button style={btnStyle} onClick={fourHandler}>
        Four
      </button>
      <button style={btnStyle} onClick={SixHandler}>
        Six
      </button>
    </div>
  );
}
