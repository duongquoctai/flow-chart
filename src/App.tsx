import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { initDiagram } from "./goJs";
import { ReactDiagram } from "gojs-react";

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
      >
        <ReactDiagram
          divClassName="diagram-component"
          initDiagram={initDiagram}
          nodeDataArray={[
            { key: 0, text: "Alpha", color: "lightblue", loc: "0 0" },
            { key: 1, text: "Beta", color: "orange", loc: "150 0" },
            { key: 2, text: "Gamma", color: "lightgreen", loc: "0 150" },
            { key: 3, text: "Delta", color: "pink", loc: "150 150" },
          ]}
          linkDataArray={[
            { key: -1, from: 0, to: 1 },
            { key: -2, from: 0, to: 2 },
            { key: -3, from: 1, to: 1 },
            { key: -4, from: 2, to: 3 },
            { key: -5, from: 3, to: 0 },
          ]}
        />
      </div>
    </>
  );
}

export default App;
