import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios"
import cors from "cors"


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8080/api/auth/login', {
      email,
      password
    });

    console.log(res.data);
      if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }
  } catch (err) {
    console.error(err.response?.data?.message || err.message);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md
                   hover:shadow-2xl transition-shadow duration-300"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Login
        </h2>

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mb-6"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mb-6"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg
                     hover:bg-blue-600 active:bg-blue-700 focus:outline-none
                     focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
                     transition-all duration-200 font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline font-medium">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}
