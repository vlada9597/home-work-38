import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


// src/App.jsx
import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    alert(`Ви ввели: ${value}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Мій перший React-компонент</h1>
      <Input placeholder="Введіть текст..." onChange={handleInputChange} />
      <Button text="Надіслати" type="button" onClick={handleClick} />
      <p>Значення: {value}</p>
    </div>
  );
}

// export default App;
