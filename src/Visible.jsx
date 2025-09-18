import { useState } from "react";

export default function Visible() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleText}>
        {isVisible ? "Hide" : "Show"}
      </button>
      
      {isVisible && <p style={{ marginTop: "20px" }}>Hello! This text can be toggled.</p>}
    </div>
  );
}

