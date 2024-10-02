import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/header/header";
import useSignup from "../../hooks/useSignup";
const Signup = () => {
  const { name, setName, email, setEmail, password, setPassword, callSignup } =
    useSignup();
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Sign Up
          </h2>
          <form className="flex flex-col">
            <label htmlFor="username" className="text-black mb-2 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className="p-3 rounded-md mb-4 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />

            <label htmlFor="email" className="text-black mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-md mb-4 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />

            <label htmlFor="password" className="text-black mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="p-3 rounded-md mb-6 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />

            <button
              type="submit"
              className="bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-black mt-4 underline">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
