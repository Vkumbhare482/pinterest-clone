import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import Explore from "./pages/explorePage";
import Business from "./pages/businessPage";
import Create from "./pages/createPage";
import News from "./pages/newsPage";
import Login from "./pages/loginPage";
import Signup from "./pages/signUpPage";
import About from "./pages/aboutPage";

/* NEW CATEGORY PAGE */
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/explore" element={<Explore />} />

        {/* DYNAMIC CATEGORY ROUTE */}
        <Route
          path="/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route path="/business" element={<Business />} />

        <Route path="/create" element={<Create />} />

        <Route path="/news" element={<News />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;