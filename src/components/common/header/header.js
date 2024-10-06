import React from "react";
import BlogHeader from "../../blog/BlogHeader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();
  const takeToHome = () => {
    navigate("/home");
  };
  const pathsToShowHeader = ['/createBlog','/mostViewedBlogs', '/trendingBlogs']
  return (
    <div>
      <div className="bg-black">
        <div className="p-10 text-xl">
          <header className="flex items-center justify-between">
            <div
              className="cursor-pointer bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent font-semibold text-5xl pb-1"
              onClick={takeToHome}
            >
              Tech Blog
            </div>
            {pathsToShowHeader.includes(location.pathname) ? <BlogHeader /> 
            :
              <div className="flex items-center">
              <button className="px-7 py-2 mx-3 border bg-white text-black rounded-md">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-7 py-2 mx-3 border bg-white text-black rounded-md">
                <Link to="/signup">Signup</Link>
              </button>
            </div>
            }
          </header>
        </div>
      </div>
    </div>
  );
};
export default Header;
