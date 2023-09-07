import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date();
  const [step, setStep] = useState(1);
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>
        <button onClick={() => setStep((c) => step - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((c) => step + 1)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
