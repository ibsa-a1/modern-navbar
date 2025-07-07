import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import react, { useState } from "react";

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className="container">
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
