import React from "react";

// Import Pages
import About from "./pages/About";
import RegArtisan from "./pages/RegArtisan";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleArtisan from "./pages/SingleArtisan";
import Signup from "./pages/Signup";

// Import components
import Artisan from "./components/Artisan";
import ArtisanList from "./components/ArtisanList";
import Landing from "./components/Landing";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <h1>Artisans</h1>
      <Loading />
    </div>
  );
}

export default App;
