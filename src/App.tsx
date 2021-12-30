import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";

function App() {
  return (
    <div className="App">
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
    </div>
  );
}

export default App;
