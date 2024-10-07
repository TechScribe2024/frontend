import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/header/header";
import useLogin from "../../hooks/useLogin";
import useSanitize from "../../hooks/useSanitize";

const Login = () => {
  const { email, setEmail, password, setPassword, callLogin } = useLogin();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const sanitizedEmail = useSanitize(email);
  const sanitizedPassword = useSanitize(password);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(sanitizedEmail)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!sanitizedPassword) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (sanitizedPassword.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("sanitized", sanitizedEmail, sanitizedPassword)
        await callLogin(sanitizedEmail, sanitizedPassword);
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Login
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-black mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className={`p-3 rounded-md mb-1 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 ${errors.email ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-3">{errors.email}</p>
            )}

            <label htmlFor="password" className="text-black mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className={`p-3 rounded-md mb-1 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 ${errors.password ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-3">{errors.password}</p>
            )}

            <button
              type="submit"
              className="bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300 mt-4"
            >
              Login
            </button>
          </form>
          <p className="text-center text-black mt-4 underline">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;