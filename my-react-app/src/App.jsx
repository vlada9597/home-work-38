import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [value, setValue] = useState("");

  const handleAlert = () => {
    alert(`Значення: "${value || "порожньо"}"`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Надіслано: "${value || "порожньо"}"`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Приклад кнопки</h1>

      {/* Невелика форма, щоб показати різні типи кнопок */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введіть щось…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ marginRight: 8 }}
        />

        {/* Кнопка типу "button" з onClick */}
        <Button text="Показати alert" type="button" onClick={handleAlert} />

        {/* Кнопка типу "submit" без onClick — спрацює onSubmit форми */}
        <span style={{ marginLeft: 8 }}>
          <Button text="Надіслати" type="submit" />
        </span>
      </form>
    </div>
  );
};

export default App;