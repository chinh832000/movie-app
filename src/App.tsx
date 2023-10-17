import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./screens/MovieDetail/MovieDetail";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
