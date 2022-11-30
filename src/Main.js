import DigimonSearch from "./DigimonSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <h1>Digimon Searcher</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DigimonSearch />}></Route>
          <Route path="/search/:searchTerm" element={<DigimonSearch />}></Route>
          <Route path="*" element={<p>Page unavailable</p>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
