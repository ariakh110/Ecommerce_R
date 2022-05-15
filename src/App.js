import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./common/header/Header";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<Home />} />
        <Route path="/pages" element={<Cuisine />} />
        <Route path="/user/:query" element={<SearchResult />} />
        <Route path="/vendor/:id" element={<Recipe />} />
        <Route path="/track/:id" element={<Recipe />} />
        <Route path="/contact/:id" element={<Recipe />} /> */}
      </Routes>
    </>
  );
}

export default App;
