import React, { useState, useEffect, useCallback } from "react";

// import Canvas from "./Components/Canvas";

import "./App.css";

function App() {
  const [colorImg, setColorImg] = useState(``);
  const [orderedColorImg, setOrderedColorImg] = useState(``);
  const [showColorImg, setShowColorImg] = useState(false);
  const [showOrderedColorImg, setShowOrderedColorImg] = useState(false);

  useEffect(() => {
    setColorImg(
      <div className="colorImg">
        {generateColor()[0].map((color, idx) => (
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
    setOrderedColorImg(
      <div className="colorImg">
        {generateColor()[1].map((color, idx) => (
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
  }, []);

  const colors = [
    8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144,
    152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240, 248, 256,
  ];

  const generateColor = useCallback(() => {
    const colorArr = [[], []];
    for (let red = 0; red < colors.length; red++) {
      for (let green = 0; green < colors.length; green++) {
        for (let blue = 0; blue < colors.length; blue++) {
          const color = `${colors[red]}, ${colors[green]}, ${colors[blue]}`;
          if (colorArr[0].length > 0) {
            const randomNumber = Math.floor(Math.random() * colorArr[0].length);
            colorArr[0].splice(randomNumber, 0, color);
          } else {
            colorArr[0].push(color);
          }
          colorArr[1].push(color);
        }
      }
    }
    return colorArr;
  }, []);

  // const colorArr = generateColor();

  // const getColor = () => {
  //   const idx = Math.floor(Math.random() * colorArr.length);
  //   const color = colorArr[idx];
  //   colorArr.splice(idx, 1);
  //   return color;
  // };

  // const draw = (ctx) => {
  //   const { width, height } = ctx.canvas;

  //   ctx.clearRect(0, 0, width, height);
  //   // ctx.fillStyle = `rgb(${getColor()})`;
  //   ctx.fillStyle = "#fff";
  //   ctx.fillRect(0, 0, width, height);
  //   var path = new Path2D();
  //   path.arc(75, 75, 50, 0, Math.PI * 2, true);
  //   path.moveTo(110, 75);
  //   path.arc(75, 75, 35, 0, Math.PI, false);
  //   path.moveTo(65, 65);
  //   path.arc(60, 65, 5, 0, Math.PI * 2, true);
  //   path.moveTo(95, 65);
  //   path.arc(90, 65, 5, 0, Math.PI * 2, true);
  //   ctx.strokeStyle = "#00ffff";
  //   ctx.stroke(path);
  // };

  const handleRandomButton = useCallback(() => {
    setShowColorImg(!showColorImg);
    if (showOrderedColorImg) setShowOrderedColorImg(!showOrderedColorImg);
  }, [showColorImg, showOrderedColorImg]);

  const handleOrderedButton = useCallback(() => {
    setShowOrderedColorImg(!showOrderedColorImg);
    if (showColorImg) setShowColorImg(!showColorImg);
  }, [showColorImg, showOrderedColorImg]);

  return (
    <div className="App">
      {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
      <div className="button-container">
        <button onClick={() => handleRandomButton()}>
          {showColorImg ? "Hide Image" : "Generate Random Image"}
        </button>

        <button onClick={() => handleOrderedButton()}>
          {showOrderedColorImg ? "Hide Image" : "Generate Ordered Image"}
        </button>
      </div>

      {showColorImg ? (
        <>{colorImg}</>
      ) : showOrderedColorImg ? (
        <>{orderedColorImg}</>
      ) : (
        <div className="colorImg unclick">Click button to generate image</div>
      )}

      {/* </div> */}

      {/* <div>
        <Canvas draw={draw} className="canvas" />
      </div> */}
    </div>
  );
}

export default App;
