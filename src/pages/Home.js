import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-black  text-white">
        <div>
          <div className="h-screen p-10 text-xl ">
            <header className="flex justify-between">
              <div className="">Tech Blog</div>
              <div className="">
                <button className="px-7 mx-3 border bg-white text-black  rounded-md">
                  Login
                </button>
                <button className="px-7  mx-3 border bg-white text-black rounded-md">
                  {" "}
                  Signup
                </button>
              </div>
            </header>
            <div className="text-center  mt-[100px]">
              <div className="text-[50px]">Welcome to Techblog</div>
              <button className="mt-10 border bg-white text-black p-3 rounded-md">
                <Link to="/createBlog">Start blogging</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <footer className="bottom-0 text-xs ">
            <p>Contact us at parishiieb@gmail.com</p>
            <p>Contact us at jahnand2001@gmail.com</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
