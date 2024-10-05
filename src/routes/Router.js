import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import CreateBlog from "../pages/createBlog/CreateBlog";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import TrendingBlogs from "../pages/trendingBlogs/TrendingBlogs";
import { blogs } from "../pages/trendingBlogs/MockBlogs";
import MostViewedBlogs from "../pages/mostViewedBlogs.js/MostViewedBlogs";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/trendingBlogs" element={<TrendingBlogs blogs = {blogs}/>} />
      <Route path="/mostViewedBlogs" element={<MostViewedBlogs blogs = {blogs}/>}/>
    </Routes>
  );
};

export default Router;
