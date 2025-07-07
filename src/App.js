import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import react, { useState } from "react";

function App() {

  const [theme, seTheme] = useState('light')

  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;
