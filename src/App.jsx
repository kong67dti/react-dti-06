import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import MyPageA from "./views/MyPageA";
import MyPageB from "./views/MyPageB";
import MyPageC from "./views/MyPageC";
import MyPageD from "./views/MyPageD";
import NotFound from "./views/NotFound";
import React from "react";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mypagea" element={<MyPageA />} />
          <Route path="/mypageb" element={<MyPageB />} />
          <Route path="/mypagec" element={<MyPageC />} />
          <Route path="/mypaged" element={<MyPageD />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
