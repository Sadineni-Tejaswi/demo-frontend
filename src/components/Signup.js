import React, { useState } from "react";
import "./Signup.css";
import { url } from "../links/Link";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    const data = { name, email, password };
    axios
      .post(`${url}/create`, data)
      .then((res) => {
        alert("Signup Successfull");
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>

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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
