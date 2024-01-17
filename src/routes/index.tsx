import { Route, Routes } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Post from "./post";
import Publication from "./publication";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/publication/:id" element={<Publication />} />
    <Route path="/login" element={<Login />} />
    <Route path="/post" element={<Post />} />
  </Routes>
);
