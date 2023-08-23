import { Routes, Route } from "react-router-dom";

import SearchPage from "./pages/searchPage";
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
