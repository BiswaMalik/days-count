import { useState } from "react";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="header">Day Calculator</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="body">
      <div className="container">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className="container">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="container">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago from today was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}

function Footer() {
  return <div className="footer"></div>;
}
