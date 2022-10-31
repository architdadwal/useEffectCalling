import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.warn("Hey the clc meathod has started");
  }, []);
  //IN ABOVE LINE BLANK ARRAY IS PASSED BECUASE LIFECYCLEMEATHOD WILL BE CALLED AGAIN AND AGAIN WHEN BUTTON IS CLICKED
  //THIS AVOIDS THE CALLING AGAIN AND AGAIN
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{name}</h2>
      <button onClick={() => setName("dADWAL")}> click </button>
    </div>
  );
}
