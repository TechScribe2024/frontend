import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const callSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Signup successful", response.data);
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        console.error("Signup failed:", error.response.data.message);
      } else {
        console.error("Error during signup:", error.message);
      }
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    callSignup,
  };
};

export default useSignup;
