import React, { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("#ffffff");

  const handleButtonClick = (newColor) => {
    setColor(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ backgroundColor: color }}>
      <h1>Background Color Changer</h1>
      <button class="button" onClick={() => handleButtonClick("#ff0000")}>
        Red
      </button>
      <button class="button" onClick={() => handleButtonClick("#FFA500")}>
        Orange
      </button>
      <button class="button" onClick={() => handleButtonClick("#FFFF00")}>
        Yellow
      </button>
      <button class="button" onClick={() => handleButtonClick("#00FF00")}>
        Green
      </button>
      <button class="button" onClick={() => handleButtonClick("#0000FF")}>
        Blue
      </button>
      <button class="button" onClick={() => handleButtonClick("#4B0082")}>
        Indigo
      </button>
      <button class="button" onClick={() => handleButtonClick("#8F00FF")}>
        Violet
      </button>
    </div>
  );
}

export default App;
