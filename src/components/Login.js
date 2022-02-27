import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "https://artisan-dot-com-api.herokuapp.com/api/v1/auth/login",
        {
          data: data,
          password: password,
        }
      );
      console.log(user);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="login-wrapper">
      <h1 className="header-text">Please Log In</h1>
      <form>
        <div className="user-box">
          <input
            type="text"
            placeholder="Username"
            value={data}
            onChange={(e) => setData(e.target.value)}
          ></input>
          <label htmlFor="Username"></label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password"></label>
        </div>
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
