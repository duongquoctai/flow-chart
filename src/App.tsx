import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { initDiagram } from "./goJs";

function App() {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    initDiagram();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div
        id="myDiagramDiv"
        style={{
          width: "800px",
          height: "300px",
          backgroundColor: "#e5e5e5",
          borderRadius: "6px",
          border: "1px dash black",
        }}
      ></div>
    </>
  );
}

export default App;
