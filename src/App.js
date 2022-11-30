import "./App.css";
import { useState, useEffect } from "react";
import Main from "./Main";

function App() {
  //https://digimon-api.vercel.app/api/digimon
  //https://digimon-api.vercel.app/api/digimon/name/agumon
  //https://digimon-api.vercel.app/api/digimon/level/rookie

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
