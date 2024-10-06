import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogHeader = () => {
  const location  = useLocation()
  return (
    <div className="text-white">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          {location.pathname === "/trendingBlogs" ?
          <>
           <button className="px-7 py-2 mx-3 border bg-white text-black rounded-md cursor-pointer">
           <Link to="/createBlog">Start Blogging</Link>
         </button>
            <div className="flex space-x-8 text-md ">
            <Link to="/mostViewedBlogs" className="text-white hover:underline">
              Most Viewed Blogs
            </Link>
            <Link to="/createBlog" className="text-white hover:underline">
              Genres
            </Link>
          </div>
          </>
          :
          location.pathname === "/mostViewedBlogs" ?
          <>
          <button className="px-7 py-2 mx-3 border bg-white text-black rounded-md cursor-pointer">
              <Link to="/createBlog">Start Blogging</Link>
            </button>
          <div className="flex space-x-8 text-md ">
            <Link to="/trendingBlogs" className="text-white hover:underline">
              Trending Blogs
            </Link>
            <Link to="/createBlog" className="text-white hover:underline">
              Genres
            </Link>
          </div>
          </>
          :
          <div className="flex space-x-8 text-md ">
            <Link to="/trendingBlogs" className="text-white hover:underline">
              Trending Blogs
            </Link>
            <Link to="/mostViewedBlogs" className="text-white hover:underline">
              Most Viewed Blogs
            </Link>
            <Link to="/createBlog" className="text-white hover:underline">
              Genres
            </Link>
          </div>
          }
        </div>
      </header>
    </div>
  );
};

export default BlogHeader;
