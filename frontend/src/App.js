import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Add from "./components/posts/main.add";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="add" element={<Add />}></Route>
        {/* <Route path="edit/:id" element={<EditPost />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
