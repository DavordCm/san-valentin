import { useState } from "react";
import "./App.css";

function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [clickedYes, setClickedYes] = useState(false);

  const handleNoHover = () => {
    setPosX(Math.random() * 270 - 190);
    setPosY(Math.random() * 270 - 190);
  };

  return (
    <div className="container">
      {clickedYes ? (
        <>
          <h1>¡Sabía que dirías que sí! 💖</h1>
          <img src="/fd3530b992c00cc1556a794a306cef45.gif" alt="Gatito Feliz" />
        </>
      ) : (
        <>
          <h1>¿Quieres ser mi San Valentín? ❤️</h1>
          <img src="/dbaac13f6278b91a15e480752b8a7242.gif" alt="Gatito Tierno" />
          <div className="buttons">
            <button className="yes" onClick={() => setClickedYes(true)}>
              Sí 😍
            </button>
            <button
              className="no"
              onMouseEnter={handleNoHover}
              style={{ transform: `translate(${posX}px, ${posY}px)` }}
            >
              No 😢
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
