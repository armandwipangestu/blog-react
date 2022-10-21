import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import Footer from "./components/Layouts/footer.layouts";
import Home from "./components/Home/main.home";
import AddPost from "./components/Posts/add.posts";

const App = () => {
  return (
    <>
      <MainLayouts>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add" element={<AddPost />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MainLayouts>
    </>
  );
};

export default App;
