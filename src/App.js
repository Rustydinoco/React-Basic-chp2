import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  function HandlerNext() {
    if (step < 3) setStep(step + 1);
    console.log(step);
  }
  function HandlerPrev() {
    if (step > 1) setStep(step - 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step : Focus</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={HandlerPrev}
        >
          Prev
        </button>
        <button
          style={{ backgroundColor: "#526D82", color: "#fff" }}
          onClick={HandlerNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
