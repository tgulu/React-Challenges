import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greetings from "/src/components/Greetings.jsx";
// import Header from "/src/components/Header";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div>
        <Welcome name="Citizen" />
        <Greetings name="Hello My Darling Hello my Friend" />
      </div>
    </>
  );
}

export default App;
