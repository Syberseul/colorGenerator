import React, { useState } from "react";

import "./App.css";

function App() {
  const [colorImg, setColorImg] = useState(``);
  const [showColorImg, setShowColorImg] = useState(false);

  const colors = [
    8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144,
    152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256,
  ];

  const generateColor = () => {
    const colorArr = [];
    for (let red = 0; red < colors.length; red++) {
      for (let green = 0; green < colors.length; green++) {
        for (let blue = 0; blue < colors.length; blue++) {
          colorArr.push(`${colors[red]}, ${colors[green]}, ${colors[blue]}`);
        }
      }
    }
    return colorArr;
  };

  function toggleShowImg() {
    setShowColorImg(!showColorImg);

    if (colorImg === ``) {
      setColorImg(
        <div className="colorImg">
          {generateColor().map((color, idx) => (
            <div
              className="colorPixel"
              style={{
                backgroundColor: `rgb(${color})`,
              }}
              key={idx}
            ></div>
          ))}
        </div>
      );
    }
  }

  return (
    <div className="App">
      <button onClick={toggleShowImg}>Generate color image</button>

      {showColorImg === true ? (
        <>{colorImg}</>
      ) : (
        <div className="colorImg unclick"> Click button to generate image</div>
      )}
    </div>
  );
}

export default App;
