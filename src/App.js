import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./routes/navbar"
import About from "./routes/about";
import Home from "./routes/home";
import Todo from "./routes/todo";
import NotFound from "./routes/notfound"

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="main-display">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;