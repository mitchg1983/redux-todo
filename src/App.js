import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./routes/about";
import Home from "./routes/home";
import Todo from "./routes/todo";
import NotFound from "./routes/notfound";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-display">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="todo" element={<Todo />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
