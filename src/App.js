import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Projects from "./pages/Projects/Projects";

function App() {
  const darktheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:pid" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
