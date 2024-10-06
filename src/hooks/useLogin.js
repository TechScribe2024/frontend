import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../redux/userSlice";
import axios from "axios";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const callLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful", response.data);

        localStorage.setItem("user", JSON.stringify(response.data.user)); // assuming user info is in response.data.user
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        dispatch(
          setAuthenticated({ isAuthenticated: true, user: response.user })
        );
        navigate("/createBlog");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login failed:", error.response.data.message);
      } else {
        console.error("Error during login:", error.message);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    callLogin,
  };
};

export default useLogin;
