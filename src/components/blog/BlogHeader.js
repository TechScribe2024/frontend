import React from "react";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <div className="text-white">
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-8 text-md ">
            <Link to="/createBlog" className="text-white hover:underline">
              Trending Blogs
            </Link>
            <Link to="/createBlog" className="text-white hover:underline">
              Most Viewed Blogs
            </Link>
            <Link to="/createBlog" className="text-white hover:underline">
              Genres
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default BlogHeader;
