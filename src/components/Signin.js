import React, { useState } from "react";
import "./Signup.css";
import { url } from "../links/Link";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    const data = { email, password };
    axios
      .post(`${url}/login`, data)
      .then((res) => {
        alert("Login Successfull");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Register</h2>

        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="signup-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Signin;
