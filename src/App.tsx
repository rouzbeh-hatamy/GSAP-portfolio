import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  return (
    <div className="App">
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}

export default App;
