import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPost from "./components/posts/main.post";
import AddPost from "./components/posts/AddPost";
import Home from "./components/home/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="posts" element={<MainPost />}></Route>
        <Route path="add" element={<AddPost />}></Route>
        {/* <Route path="edit/:id" element={<EditPost />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
