import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/header/header";
import useSignup from "../../hooks/useSignup";
import useSanitize from "../../hooks/useSanitize";

const Signup = () => {
  const { name, setName, email, setEmail, password, setPassword, callSignup } =
    useSignup();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const sanitizedEmail = useSanitize(email)
  const sanitizedPassword = useSanitize(password)
  const sanitizedName = useSanitize(name)
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  useEffect(() => {
    const checkPasswordStrength = () => {
      setPasswordStrength({
        length: sanitizedPassword.length >= 8,
        uppercase: /[A-Z]/.test(sanitizedPassword),
        lowercase: /[a-z]/.test(sanitizedPassword),
        number: /[0-9]/.test(sanitizedPassword),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(sanitizedPassword),
      });
    };

    checkPasswordStrength();
  }, [sanitizedPassword]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    // Name validation
    if (!sanitizedName.trim()) {
      newErrors.name = "Username is required";
      isValid = false;
    } else if (sanitizedName.length < 3) {
      newErrors.name = "Username must be at least 3 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(sanitizedEmail)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    const passwordErrors = [];

    if (!sanitizedPassword) {
      passwordErrors.push("Password is required");
    } else {
      if (!passwordStrength.length) {
        passwordErrors.push("At least 8 characters");
      }
      if (!passwordStrength.uppercase) {
        passwordErrors.push("At least one uppercase letter");
      }
      if (!passwordStrength.lowercase) {
        passwordErrors.push("At least one lowercase letter");
      }
      if (!passwordStrength.number) {
        passwordErrors.push("At least one number");
      }
      if (!passwordStrength.special) {
        passwordErrors.push("At least one special character");
      }
    }

    if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (validateForm()) {
      try {
        // Pass name, email, and password directly to callSignup
        await callSignup(sanitizedName, sanitizedEmail, sanitizedPassword);
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const getPasswordStrengthColor = () => {
    const strength = Object.values(passwordStrength).filter(Boolean).length;
    if (strength === 0) return "bg-gray-200";
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  // Rest of the component remains the same...

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-black">
            Sign Up
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Rest of the form remains the same... */}
            <label htmlFor="username" className="text-black mb-2 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your username"
              className={`p-3 rounded-md mb-1 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 ${errors.name ? 'border-2 border-red-500' : ''
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-3">{errors.name}</p>
            )}

            <label htmlFor="email" className="text-black mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`p-3 rounded-md mb-1 text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 ${errors.password ? 'border-2 border-red-500' : ''
                }`}
            />

            <div className="mb-2">
              <div className="h-1 w-full bg-gray-200 rounded-full">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                  style={{
                    width: `${(Object.values(passwordStrength).filter(Boolean).length / 5) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            <div className="mb-4 text-sm">
              <p className="font-semibold mb-1">Password requirements:</p>
              <ul className="space-y-1">
                <li className={passwordStrength.length ? 'text-green-500' : 'text-gray-500'}>
                  ✓ At least 8 characters
                </li>
                <li className={passwordStrength.uppercase ? 'text-green-500' : 'text-gray-500'}>
                  ✓ At least one uppercase letter
                </li>
                <li className={passwordStrength.lowercase ? 'text-green-500' : 'text-gray-500'}>
                  ✓ At least one lowercase letter
                </li>
                <li className={passwordStrength.number ? 'text-green-500' : 'text-gray-500'}>
                  ✓ At least one number
                </li>
                <li className={passwordStrength.special ? 'text-green-500' : 'text-gray-500'}>
                  ✓ At least one special character
                </li>
              </ul>
            </div>

            {errors.password && Array.isArray(errors.password) && (
              <div className="text-red-500 text-sm mb-3">
                {errors.password.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}

            <button
              type="submit"
              className="bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition duration-300 mt-4"
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