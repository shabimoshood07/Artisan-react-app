import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import Search from "./pages/Search";
import RegArtisan from "./pages/RegArtisan";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SingleArtisan from "./pages/SingleArtisan";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

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
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/:id" element={<RegArtisan />} />
        <Route path="/artisan" element={<Search />} />
        <Route path="/artisan/:id" element={<SingleArtisan />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
