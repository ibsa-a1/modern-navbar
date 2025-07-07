import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import logo_light from "./assets/logo-black.png";
import logo_dark from "./assets/logo-white.png";
import search_icon_light from "./assets/search-w.png";
import search_icon_dark from "./assets/search-b.png";
import toggle_light from "./assets/night.png";
import toggle_dark from "./assets/day.png";


function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;
