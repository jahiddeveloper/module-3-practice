import "./App.css";
import Counter from "./Count";
import Batsman from "./Batsman";
import Visible from "./Visible";
import LightAndDarkMode from "./LightAndDarkMode";

function App() {
  function eventHandler() {
    alert("Hello world. I am Jahid.");
  }

  const eventHandler2 = () => {
    alert("Hello world. I am Rijon.");
  };

  const addNumber5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };

  const abstact10 = (abstact) => {
    const newAbstructNumber = abstact - 10;
    alert(newAbstructNumber);
  };

  const btnStyle = {
    marginLeft: "20px",
  };


  return (
    <>

      <h1>Vite + React</h1>

      <LightAndDarkMode></LightAndDarkMode>

      <Visible></Visible>

      <Batsman></Batsman>

      <Counter></Counter>


      <button className="btn" onClick={eventHandler}>
        CLICK ME
      </button>

      <button className="btn" style={btnStyle} onClick={eventHandler2}>
        CLICK ME 2
      </button>

      <button className="btn" style={btnStyle} onClick={() => addNumber5(5)}>
        CLICK ME 2
      </button>

      <button className="btn" style={btnStyle} onClick={() => abstact10(50)}>
        CLICK ME 2
      </button>

    </>
  );
}

export default App;
