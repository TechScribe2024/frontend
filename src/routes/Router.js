import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CreateBlog from "../pages/CreateBlog";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/createBlog" element={<CreateBlog />} />
    </Routes>
  );
};

export default Router;
