import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tab from "./components/TabComponent/Tab";
import { Header } from "./components/Header/Header";
import Movie from "./screens/Movies/Movie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./screens/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
